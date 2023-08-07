import type { MutableRefObject } from "react";
import { useEffect, useRef } from "react";

export function useRootDocument() {
  const root = useRef<HTMLElement | null>();

  useEffect(() => {
    root.current = document.body;
  }, []);

  return root as MutableRefObject<HTMLElement>;
}
