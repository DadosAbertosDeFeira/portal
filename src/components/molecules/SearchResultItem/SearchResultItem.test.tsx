import { render } from "@testing-library/react";

import { SearchResultItem, type SearchResultItemProps } from ".";

describe("SearchResultItem", () => {
  const SearchResultDataMock = {
    date: "Sessão Ordinária Coletado em 30/06/2020 00:01",
    description: `A qual determina que as Sessões Ordinárias dos dias dezesseis a trinta de junho do
  url: "https://www.feiradesantana.ba.leg.br > atas",
  corrente ano ocorrerão por meio de videoconferências no Google Meet em razão do
  aumento do número de casos da Covid-19 no municípioo, sendo que esta medida visa
  reduzir a possibilidade de contágio e salvaguardar a saúde dos funcionários, servidores e
  vereadores durante a pandemia`,
    id: "h",
    title: "Ata da 44ª Sessão Ordinária 24/06/2020",
    url: "https://diariooficial.feiradesantana.ba.gov.br/atos/executivo/",
  };

  const makeSut = ({
    title = SearchResultDataMock.title,
    id = SearchResultDataMock.id,
    description = SearchResultDataMock.description,
    date = SearchResultDataMock.date,
    url = SearchResultDataMock.url,
    ...props
  }: Partial<SearchResultItemProps>) => {
    return render(
      <SearchResultItem
        url={url}
        title={title}
        id={id}
        description={description}
        date={date}
        {...props}
      />
    );
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });
});
