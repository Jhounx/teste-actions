# Teste Actions

Aplicação Express simples com GitHub Actions configurado para pull requests.

## Como executar

```bash
# Instalar dependências
npm install

# Executar aplicação
npm start

# Executar testes
npm test
```

## Rota disponível

- `GET /` - Retorna uma mensagem de boas-vindas em JSON

## GitHub Actions

O workflow é executado automaticamente em cada pull request para a branch `main` e realiza:
- Checkout do código
- Instalação do Node.js
- Instalação das dependências
- Execução dos testes
- Verificação de sintaxe
