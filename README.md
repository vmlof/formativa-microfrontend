# SaaS RH - Gestão de Documentos (Microfrontends)

Este projeto é uma prova de conceito de um sistema de gestão de documentos de RH utilizando arquitetura de microfrontends com React, Vite, Tailwind CSS e Module Federation.

## Estrutura do Projeto

- `host/`: O shell da aplicação, responsável pelo layout global, navegação e orquestração dos microfrontends. (Porta 5000)
- `mfe-documents/`: Microfrontend responsável pelo domínio de Gestão de Documentos. (Porta 5001)
- `mfe-approvals/`: Microfrontend responsável pelo domínio de Fluxo de Aprovação e Assinatura. (Porta 5002)

## Como Executar

Para rodar o projeto localmente, siga os passos abaixo em cada diretório:

### 1. Instalar Dependências

Execute o comando em cada uma das pastas (`host`, `mfe-documents`, `mfe-approvals`):

```bash
npm install
```

### 2. Iniciar os Microfrontends (Remotes)

Para que o Module Federation funcione com o plugin do Vite, é recomendado realizar o build e preview dos remotes:

**MFE Documents:**
```bash
cd mfe-documents
npm run build
npm run preview
```

**MFE Approvals:**
```bash
cd mfe-approvals
npm run build
npm run preview
```

### 3. Iniciar o Host

Após os remotes estarem rodando em suas respectivas portas (5001 e 5002), inicie o host:

```bash
cd host
npm run dev
```

Acesse `http://localhost:5000` para visualizar a aplicação integrada.

## Tecnologias Utilizadas

- **React**: Biblioteca principal para construção da UI.
- **Vite**: Build tool rápido para desenvolvimento moderno.
- **Tailwind CSS**: Framework CSS utilitário para estilização.
- **Module Federation (@originjs/vite-plugin-federation)**: Permite a composição de múltiplas aplicações independentes em tempo de execução.
- **React Router Dom**: Gerenciamento de rotas.
