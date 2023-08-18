import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Modal, type ModalProps } from ".";

const div = document.createElement("div");
div.id = "app";

describe("Modal", () => {
  const user = userEvent.setup();
  const makeSut = ({ isOpen = true, ...props }: Partial<ModalProps>) => {
    return render(<Modal isOpen={isOpen} {...props} />, {
      container: document.body.appendChild(div),
    });
  };

  it("expect modal to be open", () => {
    makeSut({ isOpen: true });

    const modal = screen.getByTestId("modal");

    expect(modal).toBeVisible();
  });

  it("expect modal to not render", () => {
    makeSut({ isOpen: false });

    const modal = screen.queryByTestId("modal");

    expect(modal).not.toBeInTheDocument();
  });

  it("expect close modal when click in layer", async () => {
    const handleClose = jest.fn();

    makeSut({ isOpen: true, handleClose });

    const layer = screen.getByTestId("modal-layer");

    await user.click(layer);

    expect(handleClose).toHaveBeenCalled();
  });
});
