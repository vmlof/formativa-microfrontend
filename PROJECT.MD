# Prompt para Geração de Frontend com Microfrontends

## Contexto

Quero criar um frontend utilizando **React**, **Vite**, **Tailwind CSS** e **Module Federation**, adotando a abordagem de **microfrontends**.

O sistema a ser desenvolvido é o seguinte:

**Nome do sistema:** Sistema SaaS de Gestão de Documentos de RH
**Objetivo do sistema:** Digitalizar e automatizar o ciclo de vida de documentos de RH, garantindo rastreabilidade, segurança e eficiência operacional
**Público-alvo:** Funcionários, administradores de RH e organizações clientes
**Problema que o sistema resolve:** Processos manuais, descentralizados e pouco rastreáveis na gestão de documentos de RH, com riscos de perda de informações, baixa eficiência e dificuldades de conformidade (ex.: LGPD)

---

## Requisitos funcionais principais

1. Disponibilizar documentos para funcionários
2. Permitir upload de documentos pelos funcionários
3. Realizar assinatura eletrônica de documentos
4. Permitir aprovação ou rejeição de documentos pelo RH
5. Acompanhar status de documentos e solicitações
6. Registrar histórico e auditoria de ações
7. Enviar notificações sobre pendências, aprovações e vencimentos

---

## Requisitos não funcionais

1. Usabilidade: Interface simples, intuitiva e responsiva (web/mobile)
2. Desempenho: Respostas rápidas da API, uso de processamento assíncrono para tarefas pesadas
3. Segurança: Autenticação, autorização por perfil, criptografia de dados e proteção de documentos sensíveis
4. Escalabilidade: Arquitetura SaaS multi-tenant, baseada em serviços e preparada para Kubernetes
5. Manutenibilidade: Separação por domínios, arquitetura orientada a serviços, uso de mensageria (RabbitMQ)

---

## Domínios de negócio/informação

O sistema deve possuir **no mínimo dois domínios de negócio/informação**, que serão separados em microfrontends.

### Domínio 1

- **Nome do domínio:** Gestão de Documentos
- **Responsabilidades:** Gerenciar ciclo de vida dos documentos (criação, envio, armazenamento e consulta)
- **Funcionalidades principais:**
  - Upload de documentos
  - Armazenamento em storage seguro (MinIO)
  - Versionamento e organização
  - Consulta de documentos

- **Entidades ou informações principais:**
  - Documento
  - Arquivo
  - Tipo de documento
  - Metadados

### Domínio 2

- **Nome do domínio:** Fluxo de Aprovação e Assinatura
- **Responsabilidades:** Controlar processos de assinatura eletrônica e aprovação de documentos
- **Funcionalidades principais:**
  - Solicitação de assinatura
  - Assinatura eletrônica interna
  - Aprovação/rejeição de documentos
  - Controle de status

- **Entidades ou informações principais:**
  - Assinatura
  - Status do documento
  - Aprovação
  - Usuário (funcionário/RH)

---

## Requisitos de arquitetura

Crie a solução considerando:

- Um **microfrontend host/shell**
- Microfrontends separados por domínio
- Uso de **Module Federation** para integração entre os microfrontends
- Uso de **React + Vite**
- Estilização com **Tailwind CSS**
- Organização de projeto clara e escalável
- Componentização adequada
- Roteamento entre telas
- Separação entre layout compartilhado e funcionalidades específicas de cada domínio

---

## O que eu quero que você gere

Com base nas informações acima, gere uma proposta completa de frontend contendo:

1. **Arquitetura da solução**
   - explicação da arquitetura de microfrontends
   - papel do host/shell
   - papel de cada microfrontend
   - como o Module Federation será aplicado

2. **Estrutura de pastas dos projetos**
   - host
   - microfrontend do domínio 1
   - microfrontend do domínio 2
   - microfrontend opcional

3. **Definição dos microfrontends**
   - nome de cada microfrontend
   - responsabilidade
   - telas principais
   - componentes principais
   - rotas principais

4. **Tecnologias utilizadas**
   - React
   - Vite
   - Tailwind CSS
   - Module Federation
   - outras bibliotecas sugeridas, se necessário

5. **Exemplo de implementação**
   - configuração inicial do host
   - configuração inicial dos remotes
   - exemplo de `vite.config.ts`
   - exemplo de carregamento federado
   - exemplo de rotas

6. **Sugestão de layout**
   - menu
   - cabeçalho
   - dashboard inicial
   - navegação entre domínios

7. **Boas práticas**
   - organização por domínio
   - compartilhamento de componentes
   - comunicação entre microfrontends
   - tratamento de autenticação
   - estratégia para evolução do projeto

8. **Resultado esperado**
   - apresentar o código inicial ou esqueleto do projeto
   - explicar como executar localmente
   - explicar como os microfrontends se conectam

---

## Restrições importantes

- O frontend deve ser criado com **React**
- O build tool deve ser **Vite**
- O CSS deve usar **Tailwind CSS**
- A integração entre partes independentes deve usar **Module Federation**
- O sistema deve possuir **no mínimo dois domínios de negócio/informação**
- A solução deve refletir os **requisitos do sistema informados**
- A resposta deve ser organizada, técnica e didática

---

## Formato desejado da resposta

Quero que a resposta seja apresentada nesta ordem:

1. Visão geral da solução
2. Arquitetura proposta
3. Divisão dos microfrontends por domínio
4. Estrutura de pastas
5. Tecnologias e justificativas
6. Exemplos de configuração
7. Exemplo inicial de código
8. Orientações para execução
9. Boas práticas e próximos passos

EXEMPLO --

**Nome do sistema:** Sistema de Gestão de Clínica  
**Objetivo do sistema:** Gerenciar pacientes, consultas e faturamento  
**Público-alvo:** recepcionistas, médicos e administradores  
**Problema que o sistema resolve:** centralizar o atendimento e a gestão financeira da clínica

### Domínio 1

- **Nome do domínio:** Pacientes e Consultas
- **Responsabilidades:** cadastro de pacientes, agenda, consultas
- **Funcionalidades principais:** listar pacientes, agendar consulta, visualizar agenda
- **Entidades ou informações principais:** paciente, consulta, agenda, médico

### Domínio 2

- **Nome do domínio:** Financeiro
- **Responsabilidades:** pagamentos, cobranças, relatórios
- **Funcionalidades principais:** registrar pagamento, emitir relatório
- **Entidades ou informações principais:** fatura, pagamento, convênio
