import type { MutableRefObject } from "react";
import { useEffect } from "react";

export function useOnClickOutside(
  ref: MutableRefObject<HTMLElement | null>,
  callback: (ev: Event) => void
) {
  useEffect(() => {
    const element: HTMLElement | null = ref?.current;
    if (!element) return () => ({});

    const handleClickOutside = (event: MouseEvent) => {
      event.preventDefault();
      const targetElement = event.target as HTMLElement;
      if (!element.contains(targetElement)) {
        callback(event);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, callback]);
}
