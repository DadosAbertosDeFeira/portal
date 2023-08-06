import { Input } from "atoms/Input";
import type { MouseEventHandler } from "react";
import { type FormEventHandler, forwardRef, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";

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

    const handleClear: MouseEventHandler<SVGElement> = (event) => {
      event.preventDefault();
      if (onClear) onClear();
    };

    return (
      <form className={className} ref={form} onSubmit={handleSubmit}>
        <Input
          ref={ref}
          name={name}
          {...props}
          className="w-full"
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
            <RiCloseFill
              className="min-w-[25px]"
              onClick={handleClear}
              fill="#0063B5"
              size={25}
            />
          }
        />
      </form>
    );
  }
);
