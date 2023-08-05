import { useEffect, useRef } from "react";

export function useRootDocument() {
  const root = useRef<HTMLElement>(document.createElement("div"));

  useEffect(() => {
    root.current = document.body;
  }, []);

  return root;
}
