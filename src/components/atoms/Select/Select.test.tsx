/* eslint-disable testing-library/no-unnecessary-act */
import { faker } from "@faker-js/faker";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import dynamic from "next/dynamic";

import { type SelectProps } from ".";

const Select = dynamic<SelectProps<any>>(
  () => import("atoms/Select").then((module) => module.Select),
  { ssr: false }
);

describe("Select", () => {
  let user = userEvent.setup();

  beforeEach(() => {
    user = userEvent.setup();
  });

  const itemsStringMock = Array.from(Array(5).keys()).map(() =>
    faker.person.fullName()
  );
  const itemsObjectMock = Array.from(Array(5).keys()).map(() => ({
    name: faker.person.fullName(),
  }));

  function makeSut<T>({
    items = [],
    renderList = (props) => <ul {...props} />,
    renderInput = ({ getInputProps, getLabelProps, getToggleButtonProps }) => (
      <label {...getLabelProps()}>
        <input {...getInputProps()} />
        <button {...getToggleButtonProps()} />
      </label>
    ),
    ...props
  }: Partial<SelectProps<T>>) {
    return render(
      <Select
        items={items}
        renderList={renderList}
        renderInput={renderInput === null ? undefined : renderInput}
        {...props}
      >
        {({ label, key, getItemProps }) => (
          <li key={key} {...getItemProps()}>
            {label}
          </li>
        )}
      </Select>
    );
  }

  it("renders string items correctly", async () => {
    const { asFragment } = makeSut({
      items: itemsStringMock,
    });

    await act(async () => {});

    expect(asFragment).toMatchSnapshot();
  });

  it("renders object items correctly", async () => {
    const { asFragment } = makeSut({
      itemToString: (v) => v?.name ?? "",
      items: itemsObjectMock,
    });

    await act(async () => {});

    expect(asFragment).toMatchSnapshot();
  });

  it("should render default input parameter", async () => {
    const { asFragment } = makeSut({
      renderInput: null as unknown as undefined,
      itemToString: (v) => v?.name ?? "",
      items: itemsObjectMock,
    });

    await act(async () => {});

    expect(asFragment).toMatchSnapshot();
  });

  it("should change input value", async () => {
    const onInputChange = jest.fn();

    makeSut({
      itemToString: (v) => v?.name ?? "",
      items: itemsObjectMock,
      onInputChange,
      renderInput: null as unknown as undefined,
    });

    await act(async () => {});

    const input = screen.getByRole("combobox");

    await user.type(input, "hello world");

    expect(onInputChange).toHaveBeenCalledWith("hello world");
  });

  it("should select first option", async () => {
    const onSelectedChange = jest.fn();

    makeSut({
      itemToString: (v) => v?.name ?? "",
      items: itemsObjectMock,
      onSelectedChange,
      renderInput: null as unknown as undefined,
    });

    await act(async () => {});

    const input = screen.getByRole("combobox");

    await user.click(input);
    await user.keyboard("[ArrowDown][Enter]");

    await act(async () => {});

    expect(onSelectedChange).toHaveBeenCalledWith(itemsObjectMock[0]);
  });

  it("should open when input focus", async () => {
    const onMenuChange = jest.fn();

    makeSut({
      itemToString: (v) => v?.name ?? "",
      items: itemsObjectMock,
      onMenuChange,
      renderInput: null as unknown as undefined,
    });

    await act(async () => {});

    const input = screen.getByRole("combobox");

    await user.click(input);

    expect(onMenuChange).toHaveBeenCalledWith(true);
  });

  it("should open when input blur", async () => {
    const onMenuChange = jest.fn();

    makeSut({
      itemToString: (v) => v?.name ?? "",
      items: itemsObjectMock,
      onMenuChange,
      renderInput: null as unknown as undefined,
    });

    await act(async () => {});

    const input = screen.getByRole("combobox");

    await user.click(input);
    await user.click(input);

    expect(onMenuChange).toHaveBeenCalledWith(false);
  });
});
