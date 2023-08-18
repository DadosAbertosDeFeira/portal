import {
  autoUpdate,
  size,
  useFloating,
  useMergeRefs,
} from "@floating-ui/react";
import { Input } from "atoms/Input";
import { Menu } from "atoms/Menu";
import { useCombobox } from "downshift";
import type { ForwardedRef, ReactNode } from "react";
import { forwardRef, useMemo } from "react";
import { createPortal } from "react-dom";

import type { SelectProps } from "./types";

function SelectComponent<T>(
  {
    selectedItem,
    inputValue,
    items,
    renderInput = ({ getInputProps, getLabelProps }) => (
      <Input {...getInputProps()} labelProps={getLabelProps()} />
    ),
    renderList = (props) => <Menu {...props} />,
    onInputChange,
    onSelectedChange,
    itemToString = (v) => String(v),
    children,
    onMenuChange,
  }: SelectProps<T>,
  ref: ForwardedRef<HTMLInputElement>
) {
  const {
    getInputProps,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    isOpen,
    highlightedIndex,
  } = useCombobox({
    inputValue,
    itemToString,
    items,
    onInputValueChange({ inputValue }) {
      if (onInputChange) onInputChange(inputValue);
    },
    /* istanbul ignore next */
    onIsOpenChange({ isOpen = false }) {
      if (onMenuChange) onMenuChange(isOpen);
    },
    onSelectedItemChange({ selectedItem }) {
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

  const inputRef = useMergeRefs([ref, refs.setReference]);

  const input = renderInput(
    {
      getInputProps: () => getInputProps({ ref: inputRef }),
      getLabelProps,
      getToggleButtonProps,
    },
    { isOpen }
  );

  const listItems = useMemo(() => {
    return items.map((item, index) => {
      return children({
        focused: highlightedIndex === index,
        getItemProps: () => getItemProps({ item, index }),
        key: `${itemToString(item)}-${index}`,
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
      {createPortal(list, document.getElementById("app") as HTMLElement)}
    </>
  );
}

export const Select = forwardRef(SelectComponent) as <T>(
  props: SelectProps<T>,
  ref: ForwardedRef<HTMLInputElement>
) => ReactNode;
