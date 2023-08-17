import type { ComponentPropsWithRef } from "react";

export type ModalProps = ComponentPropsWithRef<"div"> & {
  isOpen: boolean;
  handleClose?: () => {};
  showClosingButton?: boolean;
};
