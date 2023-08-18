# Informações do Portal de Dados Abertos

## Modelo objeto de voluntários

`assets/volunteers/*`

```json
  {
    "name": "Nome do voluntário",
    "role": "Função do voluntário",
    "picture": "https://DadosAbertosDeFeira.github.io/portal/assets/volunteers/*",
    "medias": {
      "github": "Link para rede social | null",
      "linkedin": "Link para rede social | null",
      "twitter": "Link para rede social | null",
      "instagram": "Link para rede social | null"
    },
  },
```

## Modelo de apoiadores

```json
  {
    "id": "identificador do apoiador",
    "img": "https://DadosAbertosDeFeira.github.io/portal/assets/supporters/*",
    "link": "Link para website do apoiador",
    "name": "Nome do apoiador"
  }
```

## Modelo de Projetos

`assets/projects/`

```json
  {
    "name": "Nome do Projeto",
    "type": ["tags relacionadas ao tema do projeto"],
    "description": "string",
    "link": "string",
    "img": {
      "src": "https://DadosAbertosDeFeira.github.io/portal/assets/projects/*",
      "alt": "string"
    }
  }
```
