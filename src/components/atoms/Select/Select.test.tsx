import { faker } from "@faker-js/faker";
import { render } from "@testing-library/react";

import { Select, type SelectProps } from ".";

describe("Select", () => {
  const itemsStringMock = Array(5).map(() => faker.person.fullName());
  const itemsObjectMock = Array(5).map(() => ({
    name: faker.person.fullName(),
  }));

  function makeSut<T>({
    items = [],
    renderList = (props) => <ul {...props} />,
    renderInput = (props, containerProps) => (
      <label {...containerProps}>
        <input {...props} />
      </label>
    ),
    ...props
  }: Partial<SelectProps<T>>) {
    return render(
      <Select
        items={items}
        renderList={renderList}
        renderInput={renderInput}
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

  it("renders string items correctly", () => {
    const { asFragment } = makeSut({
      items: itemsStringMock,
    });

    expect(asFragment).toMatchSnapshot();
  });

  it("renders object items correctly", () => {
    const { asFragment } = makeSut({
      items: itemsObjectMock,
      itemToString: (v) => v?.name ?? "",
    });

    expect(asFragment).toMatchSnapshot();
  });
});
