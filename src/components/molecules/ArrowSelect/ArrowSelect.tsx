import { Input } from "atoms/Input";
import { Menu } from "atoms/Menu";
import { MenuItem } from "atoms/MenuItem";
import { Select } from "atoms/Select";
import { forwardRef } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import type { ArrowSelectProps } from "./types";

export const ArrowSelect = forwardRef<HTMLInputElement, ArrowSelectProps>(
  function ArrowSelect(
    {
      inputValue,
      selectedItem,
      onInputChange,
      onSelectedChange,
      items,
      ...props
    },
    ref
  ) {
    return (
      <Select
        ref={ref}
        items={items}
        onSelectedChange={onSelectedChange}
        onInputChange={onInputChange}
        inputValue={inputValue}
        selectedItem={selectedItem}
        renderInput={(inputProps, { isOpen, closeMenu, openMenu }) => (
          <Input
            hideLabel
            className="p-1"
            suffix={
              isOpen ? (
                <MdKeyboardArrowDown onClick={closeMenu} size={23} />
              ) : (
                <MdKeyboardArrowUp onClick={openMenu} size={23} />
              )
            }
            {...inputProps}
            {...props}
            containerProps={{
              className: "w-full",
              ...props.containerProps,
              ...inputProps.containerProps,
            }}
          />
        )}
        renderList={(props) => <Menu {...props} />}
      >
        {({ getItemProps, key, label }) => (
          <MenuItem key={key} {...getItemProps()}>
            {label}
          </MenuItem>
        )}
      </Select>
    );
  }
);
