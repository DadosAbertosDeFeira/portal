import { render } from "@testing-library/react";
import { Input } from "atoms/Input";
import { Menu } from "atoms/Menu";
import { MenuItem } from "atoms/MenuItem";

import { GroupSelect, type GroupSelectProps } from ".";

describe("GroupSelect", () => {
  const makeSut = ({ ...props }: Partial<GroupSelectProps<string>>) => {
    return render(
      <GroupSelect
        items={[]}
        renderInput={(props, containerProps) => (
          <Input
            label="nome"
            name="name"
            {...props}
            containerProps={containerProps}
          />
        )}
        renderItem={(props) => <MenuItem {...props} />}
        renderList={(props) => <Menu {...props} />}
        renderSectionHeader={(title) => <MenuItem>{title}</MenuItem>}
        {...props}
      />
    );
  };

  // eslint-disable-next-line jest/expect-expect
  it("renders correctly", () => {
    const { asFragment } = makeSut({});
    expect(asFragment).toMatchSnapshot();
  });
});
