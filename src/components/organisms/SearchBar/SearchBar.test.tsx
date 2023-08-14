/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import type { SearchBarSelectItem } from ".";
import { SearchBar, type SearchBarProps } from ".";

describe("SearchBar", () => {
  const itemsMock: SearchBarSelectItem[] = [
    { value: "Vereadores - Agendas", id: 1 },
    { value: "Vereadores - Atas", id: 2 },
    { value: "Vereadores - Contratos", id: 3 },
    { value: "Vereadores - Despesas", id: 4 },
    { value: "Vereadores - Licitações", id: 5 },
    { value: "Vereadores - Listas de Presença", id: 6 },
    { value: "Vereadores - Receitas", id: 7 },
    { value: "Diários Oficiais", id: 8 },
    { value: "Prefeitura - Licitações", id: 9 },
    { value: "TCM-BA - Documentos", id: 10 },
  ];

  let user = userEvent.setup();

  beforeEach(() => {
    user = userEvent.setup();
  });

  const makeSut = ({
    onSubmit = jest.fn(),
    items = itemsMock,
    ...props
  }: Partial<SearchBarProps>) => {
    return render(<SearchBar items={items} onSubmit={onSubmit} {...props} />);
  };

  it("renders correctly", async () => {
    const { asFragment } = makeSut({});

    await act(async () => {});

    expect(asFragment).toMatchSnapshot();
  }, 10000);

  it("should submit form when button clicked", async () => {
    const onSubmit = jest.fn();

    makeSut({ onSubmit });

    await act(async () => {});

    const select = screen.getByRole("combobox");
    await user.click(select);
    await user.keyboard("[ArrowDown][Enter]");

    const input = screen.getByRole("textbox");
    await user.type(input, "search");

    const button = screen.getByText("Pesquisar");
    await user.click(button);

    expect(onSubmit).toHaveBeenCalled();
  }, 10000);
});
