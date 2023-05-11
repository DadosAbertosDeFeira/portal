# Portal do Dados Abertos de Feira

[![Netlify Status](https://api.netlify.com/api/v1/badges/7ba794b1-3a2d-49ff-bcc5-533510d7710d/deploy-status)](https://app.netlify.com/sites/dadosabertosdefeira/deploys)

Frontend do Portal do Dados Abertos de Feira.
Coleta e APIs no [Maria Quitéria](https://github.com/DadosAbertosDeFeira/maria-quiteria/).

## Contribuindo para o projeto

Contribuições são muito bem-vindas. Veja como contribuir no nosso [Guia de Contribuição](CONTRIBUTING.md).

Toda a comunicação e demais interações do Dados Abertos de Feira estão sujeitas
ao nosso [Código de Conduta](CODE_OF_CONDUCT.md).

### Configurando seu ambiente

Você precisará do [Yarn Classic](https://classic.yarnpkg.com/lang/en/) para rodar o projeto.

#### Instale as dependências e prepare os serviços

```bash
yarn
```

Após a instalação das dependências crie os arquivos com as variáveis de ambiente de acordo com os arquivos de exemplo do projeto:

```bash
.env.development # para rodar em ambiente local
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

### Node

Para rodar o projeto na sua maquina, o projeto requer que você tenha a mesma versão do node.js que roda no ambiente de produção:

Se você precisa rodar o projeto em versões diferentes do Node.js você pode alterar para a versão requerida no package.json:

```json
  "engines": {
    "node": "16.19.0", // versão do node requerida para rodar o projeto.
  }
```

A versão de produção do node.js pode ser configurada através da variável de ambiente no `netlify.toml`:

```toml
[build.environment]
  NODE_VERSION = "16.19.0"
```

:warning: **É recomendado que o ambiente de desenvolvimento contenha a mesma versão do node.js que roda em produção. Isso pode ajudar a evitar bugs que surgem devido a diferenças nas versões.**

### Rodando lint

```bash
yarn lint
```

### Rodando os testes

```bash
yarn test
```

Se deseja rodar com coverage:

```bash
yarn test:coverage
```

### Storybook

O [Storybook](https://storybook.js.org/) é uma ferramenta que permite documentar interfaces, por enquanto, todo nosso styleguide e tarefas de front em geral poderão ser visualizadas com a ferramenta.

```bash
yarn storybook
```

Inicia um servidor na porta `6006`, navegue até `http://localhost:6006` para visualizar os componentes da interface.

### Design das páginas

Os designs das páginas do projeto podem ser encontrados [aqui](https://www.figma.com/file/XNfcVKFQLMcw4WzYB9srDs/DadosFeira?node-id=155%3A537).
