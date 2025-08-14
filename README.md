<h1 align="center">GYMPASS</h1>


### 📌 Sobre o Projeto

O GymPass API é um sistema back-end construído com Node.js e Fastify, projetado para simular as principais operações de um serviço de academias: cadastro de usuários, autenticação, registro de check-ins e validação de acessos.

Este projeto foi criado com foco no aprendizado prático de arquitetura limpa, princípios SOLID, testes automatizados e boas práticas de segurança, visando refletir cenários reais de desenvolvimento profissional.

---

### 🎯 Objetivos do Sistema

- Garantir segurança com autenticação JWT, refresh token e controle de acesso por papéis (RBAC).

- Assegurar consistência e performance com PostgreSQL, Prisma ORM e paginação eficiente.

- Facilitar a escalabilidade e manutenção aplicando SOLID e Design Patterns.

- Elevar a confiabilidade do sistema com testes automatizados e repositórios in-memory.

- Proporcionar um ambiente de desenvolvimento simples com Docker para subir o banco de dados rapidamente.

---

### 🛠 Tecnologias Utilizadas

- Node.js com Fastify para APIs performáticas

- TypeScript para segurança e legibilidade do código

- Prisma ORM com PostgreSQL para persistência eficiente de dados

- Docker para provisionamento do banco de dados

- Zod para validação de dados

- JWT e Refresh Token para autenticação segura

- RBAC (Role-Based Access Control) para autorização por perfil de usuário

- Testes automatizados com repositórios in-memory


---

### 📐 Arquitetura e Padrões

- Princípios SOLID: garantindo baixo acoplamento e alta coesão entre os módulos.

- Design Patterns: aplicação de padrões como Repository e Factory para organização do código.

- Camadas bem definidas:

   - Use Cases contendo a lógica de negócio

   - Repositories para abstração de persistência

   - Controllers e Middlewares para gerenciamento de rotas e autenticação

- Tratamento de erros robusto com classes personalizadas (ex.: InvalidCredentialsError).

---

### 🚀 Funcionalidades Principais
#### Requisitos Funcionais (RFs)

- Cadastro e autenticação de usuários

- Consulta ao perfil do usuário autenticado

- Registro e validação de check-ins em academias

- Busca de academias próximas (até 10km)

- Busca de academias por nome

- Consulta ao histórico e contagem de check-ins

- Cadastro de academias (somente administradores)

#### Regras de Negócio (RNs)

- E-mails duplicados não são permitidos

- Um usuário não pode realizar mais de um check-in por dia na mesma academia

- Check-ins só são válidos dentro de um raio de 100m da academia

- Check-ins expiram após 20 minutos e só podem ser validados por administradores

#### Requisitos Não-Funcionais (RNFs)

- Senhas criptografadas antes do armazenamento

- Listagens paginadas (20 itens por página)

- Autenticação e autorização baseadas em JWT

---

### 📦 Configuração com Docker

O projeto utiliza Docker para provisionar o banco de dados PostgreSQL.

Arquivo docker-compose.yml:

```ts
version: '3'
services:
  api-gym-pass-pg:
    image: bitnami/postgresql
    ports:
      - 5432:5432
    environment:
      - POSTGRESQL_USERNAME=docker
      - POSTGRESQL_PASSWORD=docker
      - POSTGRESQL_DATABASE=apigympass
```
	  
---

### 🧪 Testes Automatizados

Testes de caso de uso validam as regras de negócio (ex.: restrição de check-ins duplicados e paginação).

Repositórios in-memory permitem simulação de cenários sem dependência do banco real.

Cobertura de autenticação garantindo tratamento de erros com classes customizadas como InvalidCredentialsError.

---

<h4 align="center"> 
	🚀 Status: Completo. 🚀
</h4>
