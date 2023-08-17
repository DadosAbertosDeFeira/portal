/* istanbul ignore file */
import { Button } from "atoms/Button";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { RiCloseFill } from "react-icons/ri";
import { twMerge } from "tailwind-merge";

import type { ModalProps } from "./types";

const showScrollBar = () => {
  window.document.body.style.overflowY = "initial";
};
const hideScrollBar = () => {
  window.document.body.style.overflowY = "hidden";
};

export function Modal({
  children,
  isOpen,
  handleClose,
  className,
  ...props
}: ModalProps) {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    root.current = window.document.body;
  }, []);

  useEffect(() => {
    if (isOpen) return hideScrollBar();
    return showScrollBar();
  }, [isOpen]);

  if (!isOpen) return null;
  if (!document.body) return null;

  return createPortal(
    <div
      onClick={handleClose}
      role="presentation"
      data-testid="modal-layer"
      className="absolute inset-0 z-10 flex items-center justify-center bg-black/70 transition-all"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="presentation"
        data-testid="modal"
        className="relative flex max-h-[80vh] max-w-[90vw] rounded-md bg-white shadow-md"
      >
        <Button onClick={handleClose} className="absolute right-1 top-1 p-2">
          <RiCloseFill />
        </Button>
        <div {...props} className={twMerge("grow overflow-hidden", className)}>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
