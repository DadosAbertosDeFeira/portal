import { autoUpdate, size, useFloating } from "@floating-ui/react";
import { Box } from "atoms/Box";
import { useCombobox } from "downshift";
import type { ForwardedRef, ReactElement, ReactNode } from "react";
import { forwardRef, useMemo } from "react";
import { createPortal } from "react-dom";

import { useRootDocument } from "@/hooks/useRootDocument";

import type { GroupSelectProps } from "./types";

function GroupSelectComponent<T>(
  {
    selectedItem,
    inputValue,
    items,
    renderInput,
    renderSectionHeader,
    renderItem,
    renderList,
    onInputChange,
    onSelectedChange,
    itemToString = (v) => String(v),
    onMenuChange,
  }: GroupSelectProps<T>,
  ref: ForwardedRef<HTMLInputElement>
) {
  const options = useMemo<T[]>(() => {
    return items.reduce(
      (array, { options }) => array.concat(...options),
      [] as T[]
    );
  }, [items]);

  const { getInputProps, getItemProps, getLabelProps, getMenuProps, isOpen } =
    useCombobox({
      inputValue,
      itemToString,
      items: options,
      onInputValueChange({ inputValue = "" }) {
        if (onInputChange) onInputChange(inputValue);
      },
      onIsOpenChange({ isOpen = false }) {
        if (onMenuChange) onMenuChange(isOpen);
      },
      onSelectedItemChange({ selectedItem = null }) {
        if (onSelectedChange) onSelectedChange(selectedItem);
      },
      selectedItem,
    });

  const root = useRootDocument();

  const { refs, floatingStyles } = useFloating({
    middleware: [
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            maxWidth: `${rects.reference.width}px`,
            minWidth: `${rects.reference.width}px`,
            width: `${rects.reference.width}px`,
          });
        },
        padding: 10,
      }),
    ],
    open: isOpen,
    whileElementsMounted: autoUpdate,
  });

  const input = renderInput(
    getInputProps({ ref }),
    getLabelProps({ ref: refs.setReference })
  );

  const children = items.reduce(
    (acc, group) => {
      acc.groups.push(
        <Box className="flex flex-col" key={group.title}>
          {renderSectionHeader(group.title)}
          <Box as="ul" className="flex flex-col">
            {group.options.map((item) => {
              // eslint-disable-next-line no-plusplus
              const index = acc.itemIndex++;
              return renderItem({
                key: itemToString(item),
                label: itemToString(item),
                ...getItemProps({ item, index }),
              });
            })}
          </Box>
        </Box>
      );
      return acc;
    },
    { groups: [], itemIndex: 0 } as {
      groups: ReactElement[];
      itemIndex: number;
    }
  );

  const list = renderList({
    ...getMenuProps({ ref: refs.setFloating }),
    style: { ...floatingStyles, display: isOpen ? "block" : "none" },
    children: children.groups,
  });

  return (
    <>
      {input}
      {root.current && createPortal(list, root.current)}
    </>
  );
}

export const GroupSelect = forwardRef(GroupSelectComponent) as <T>(
  props: GroupSelectProps<T>,
  ref: ForwardedRef<HTMLInputElement>
) => ReactNode;
