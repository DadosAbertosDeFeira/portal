# Dados Abertos de Feira

Portal dos dados abertos de Feira de Santana (frontend).
Coleta e APIs no [Maria Quitéria](https://github.com/DadosAbertosDeFeira/maria-quiteria/).

## Contribuindo para o projeto

Contribuições são muito bem-vindas. Veja como contribuir no nosso [Guia de Contribuição](CONTRIBUTING.md).

Toda a comunicação e demais interações do Dados Abertos de Feira estão sujeitas
ao nosso [Código de Conduta](CODE_OF_CONDUCT.md).

### Configurando seu ambiente

Você precisará do [Yarn](https://yarnpkg.com/) para rodar o projeto.

#### Instale as dependências e prepare os serviços

```bash
yarn
```

### Acessando o site

Rode o servidor com:

```bash
yarn dev
```

### Acessando a versão de produção

```bash
yarn build
yarn start
```

### Rodando lint

```bash
yarn lint
```

### Storybook

O [Storybook](https://storybook.js.org/) é uma ferramenta que permite documentar interfaces, por enquanto, todo nosso styleguide e tarefas de front em geral poderão ser visualizadas com a ferramenta.

```bash
yarn storybook
```

Inicia um servidor na porta `6006`, navegue até `http://localhost:6006` para visualizar os componentes da interface.

### Design das páginas

Os designs das páginas do projeto podem ser encontrados [aqui](https://www.figma.com/file/XNfcVKFQLMcw4WzYB9srDs/DadosFeira?node-id=155%3A537).
