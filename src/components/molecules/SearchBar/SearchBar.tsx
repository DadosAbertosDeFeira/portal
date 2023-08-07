import { Input } from "atoms/Input";
import { type FormEventHandler, forwardRef, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";
import { twMerge } from "tailwind-merge";

import type { SearchBarProps } from "./types";

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  function SearchBar({ name, onSubmit, className, onClear, ...props }, ref) {
    const form = useRef<HTMLFormElement | null>(null);

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      const value = formData.get(name) as string;

      if (onSubmit) onSubmit(value ?? "");
    };

    const handleSearch = () => {
      form?.current?.requestSubmit();
    };

    return (
      <form ref={form} className="w-full" onSubmit={handleSubmit}>
        <Input
          ref={ref}
          name={name}
          {...props}
          className={twMerge("w-full", className)}
          type="text"
          prefix={
            <BiSearch
              className="min-w-[25px]"
              fill="#0063B5"
              onClick={handleSearch}
              size={25}
            />
          }
          suffix={
            onClear && (
              <RiCloseFill
                className="min-w-[25px]"
                onClick={onClear}
                fill="#0063B5"
                size={25}
              />
            )
          }
        />
      </form>
    );
  }
);
