<p align="center">
  <a href="#Learnings">Aprendizado</a> -
  <a href="#technology">Tecnologias</a> -
  <a href="#features">Features</a> -
  <a href="#status">Status</a>
</p>

<h1 align="center">GymPass API</h1>

<p align="center">O Gympass API é um projeto de estudo Backend em NodeJs para check-ins em academias.</p>

<hr id='Learnings'>
<h3 align="center">Aprendizado</h3>

- Alguns conceitos do SOLID;
- Design Patterns;
- Docker para inicializar o banco de dados;
- JWT e Refresh Token;
- Role Based Access Control (RBAC)
- Testes

<hr id='technology'>
<h3  align="center">Tecnologias</h3>

<p  align="center">
  <img height="48" width="48" src="https://cdn.simpleicons.org/typescript" />
  <img height="48" width="48" src="https://cdn.simpleicons.org/node.js" />
  <img height="48" width="48" src="https://cdn.simpleicons.org/fastify" />
  <img height="48" width="48" src="https://cdn.simpleicons.org/prisma" />
  <img height="48" width="48" src="https://cdn.simpleicons.org/docker" />
  <img height="48" width="48" src="https://cdn.simpleicons.org/zod" />
</p>

<hr id='features'>
<h3  align="center">Features</h3>

#### Requisitos funcionais (RFs)
- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil do usuário logado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter seu histórico de check-ins;
- [x] Deve ser possível o usuário buscar academias príximas (até 10km);
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia.

#### Regras de negócio (RNs)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [x] O check-in só pode ser valido até 20 minutos após criado;
- [x] O check-in só pode ser validado por administradores;
- [x] A academia só pode ser cadastrada por administradores.

#### Requisitos não-funcionais (RNFs)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas as listas de dados precisam estar paginadas com 20 itens por página;
- [x] O usuário deve ser identificado por um JWT (JSON Web Token).

<hr id='status'>
<h4 align="center"> 
	🚀 Status: Completo. 🚀
</h4>