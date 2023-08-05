import { useEffect, useRef } from "react";

export function useRootDocument() {
  const root = useRef<HTMLElement>();

  useEffect(() => {
    root.current = document.body;
  }, []);

  return root;
}
