/* istanbul ignore file */
import { Button } from "atoms/Button";
import { Input } from "atoms/Input";
import { MenuItem } from "atoms/MenuItem";
import { Select } from "atoms/Select";
import type { ForwardedRef, ReactNode } from "react";
import React, { forwardRef } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

import { useMatchText } from "@/hooks/useMatchText";

import type { ArrowSelectProps } from "./types";

export function ArrowSelectComponent<T>(
  {
    inputValue,
    onInputChange,
    onSelectedChange,
    items,
    selectedItem,
    onMenuChange,
    itemToString = (v) => String(v),
    ...props
  }: ArrowSelectProps<T>,
  ref: ForwardedRef<HTMLInputElement>
) {
  const filteredItems = useMatchText({
    items,
    value: inputValue ?? "",
    itemToString,
  });

  return (
    <Select
      inputValue={inputValue}
      onInputChange={onInputChange}
      onSelectedChange={onSelectedChange}
      selectedItem={selectedItem}
      itemToString={itemToString}
      ref={ref}
      onMenuChange={onMenuChange}
      items={filteredItems}
      renderInput={(
        { getInputProps, getLabelProps, getToggleButtonProps },
        { isOpen }
      ) => (
        <Input
          {...props}
          {...getInputProps()}
          labelProps={getLabelProps()}
          placeholder="Selecione a base de dados"
          containerProps={{ className: "w-full md:max-w-[225px]" }}
          suffix={
            <Button {...getToggleButtonProps()}>
              {isOpen ? <FiArrowDown /> : <FiArrowUp />}
            </Button>
          }
        />
      )}
    >
      {({ focused, getItemProps, label, key }) => (
        <MenuItem key={key} focused={focused} {...getItemProps()}>
          {label}
        </MenuItem>
      )}
    </Select>
  );
}

export const ArrowSelect = forwardRef(ArrowSelectComponent) as <T>(
  props: ArrowSelectProps<T>,
  ref: ForwardedRef<HTMLInputElement>
) => ReactNode;
