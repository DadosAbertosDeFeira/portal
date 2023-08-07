import { autoUpdate, size, useFloating } from "@floating-ui/react";
import { useCombobox } from "downshift";
import type { ForwardedRef, ReactNode } from "react";
import { forwardRef, useMemo } from "react";
import { createPortal } from "react-dom";

import { useRootDocument } from "@/hooks/useRootDocument";

import type { SelectProps } from "./types";

function SelectComponent<T>(
  {
    selectedItem,
    inputValue,
    items,
    renderInput,
    renderList,
    onInputChange,
    onSelectedChange,
    itemToString = (v) => String(v),
    children,
    onMenuChange,
  }: SelectProps<T>,
  ref: ForwardedRef<HTMLInputElement>
) {
  const root = useRootDocument();

  const {
    getInputProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    isOpen,
    openMenu,
    highlightedIndex,
    closeMenu,
  } = useCombobox({
    inputValue,
    itemToString,
    items,
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
    {
      ...getInputProps({ ref }),
      containerProps: getLabelProps({ ref: refs.setReference }),
    },
    { isOpen, openMenu, closeMenu }
  );

  const listItems = useMemo(() => {
    return items.map((item, index) => {
      return children({
        focused: highlightedIndex === index,
        getItemProps: () => getItemProps({ item, index }),
        key: itemToString(item),
        label: itemToString(item),
      });
    });
  }, [children, items, itemToString, getItemProps, highlightedIndex]);

  const list = renderList({
    ...getMenuProps({ ref: refs.setFloating }),
    style: {
      ...floatingStyles,
      display: isOpen ? "block" : "none",
      zIndex: "999999",
    },
    children: listItems,
  });

  return (
    <>
      {input}
      {root.current && createPortal(list, root.current)}
    </>
  );
}

export const Select = forwardRef(SelectComponent) as <T>(
  props: SelectProps<T>,
  ref: ForwardedRef<HTMLInputElement>
) => ReactNode;
