# DSCommerce 🛒

DSCommerce é uma aplicação **e-commerce completa** desenvolvida para fins educacionais e de portfólio, baseada nos requisitos do projeto proposto pela **DevSuperior (Prof. Dr. Nelio Alves)**.

Este repositório corresponde ao **frontend** da aplicação, construído com **React + TypeScript + Vite**, consumindo uma API REST para gerenciamento de usuários, produtos, categorias, carrinho e pedidos.

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![React](https://img.shields.io/badge/React-18+-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Yes-blue)
![Vite](https://img.shields.io/badge/Vite-Frontend-yellow)
![Java](https://img.shields.io/badge/Java-17+-red)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen)

---

## 📌 Visão geral

O sistema permite que usuários naveguem por um catálogo de produtos, gerenciem um carrinho de compras, realizem pedidos e acompanhem seu histórico. Além disso, usuários administradores possuem acesso a uma área administrativa para manutenção de produtos, categorias e usuários.

A aplicação foi projetada para simular um fluxo real de e-commerce, aplicando conceitos fundamentais de desenvolvimento web moderno.

---

## 🚀 Projeto em Produção

A aplicação **DSCommerce** está disponível online e pode ser acessada através do link abaixo:

🔗 **Acesse o sistema:**  
👉 https://wagnerdf-dscommerce.netlify.app/

### 🔐 Credenciais para teste

Utilize as credenciais abaixo para explorar as funcionalidades do sistema:

#### 👑 Administrador (ROOT)
- **Email:** alex@gmail.com
- **Senha:** 123456

#### 👤 Cliente
- **Email:** maria@gmail.com
- **Senha:** 123456

> ⚠️ As credenciais são apenas para fins de demonstração.

---

## 🖥️ Telas do Sistema

Abaixo estão algumas telas da aplicação em funcionamento, demonstrando as principais funcionalidades do sistema.

### 📦 Catálogo de Produtos
![Catálogo de Produtos](https://i.imgur.com/FVPvTSC.png)

### 🛒 Carrinho de Compras
![Carrinho de Compras](https://i.imgur.com/QMwqNsj.png)

### 📄 Detalhes do Produto
![Detalhes do Produto](https://i.imgur.com/Jwbw22f.png)

### 📊 Área Administrativa
![Área Administrativa](https://i.imgur.com/row4yxg.png)

### 📊 Área Administrativa Editar
![Área Administrativa](https://i.imgur.com/yh2MQBF.png)

---

## 🚀 Funcionalidades

### Área pública
- Listagem paginada de produtos
- Filtro de produtos por nome
- Visualização de detalhes do produto
- Gerenciamento de carrinho de compras
- Cadastro de usuário (sign up)
- Login com autenticação

### Área do cliente (usuário autenticado)
- Atualização do perfil
- Registro de pedidos
- Visualização do histórico de pedidos

### Área administrativa (Admin)
- CRUD de produtos
- CRUD de categorias
- CRUD de usuários
- Relatórios de pedidos

---

## 🛠️ Tecnologias e Conceitos Aplicados

O projeto **DSCommerce** foi desenvolvido aplicando conceitos fundamentais e avançados de desenvolvimento front-end e integração com API REST, conforme descrito abaixo:

| Camada / Tema | Tecnologias / Conceitos | Aplicação no projeto |
|---------------|-------------------------|----------------------|
| **Layout & Estilização** | HTML5, CSS3, Flexbox, Grid, Responsividade | Construção das telas de catálogo, detalhes do produto, carrinho, login e área administrativa, com layout responsivo |
| **Componentização** | React Components, JSX | Criação de componentes reutilizáveis como Header, ProductCard, ProductDetails, CartItem, entre outros |
| **Tipagem** | TypeScript | Tipagem de props, estados, modelos de dados (Product, Order, User, etc.) |
| **Roteamento** | React Router DOM | Navegação entre páginas, rotas protegidas, rotas dinâmicas e tratamento de rotas não encontradas |
| **Estado Local** | useState, useEffect | Controle de estados de componentes, efeitos colaterais e carregamento de dados |
| **Estado Global** | Context API | Gerenciamento global do carrinho de compras, usuário autenticado e payload do token |
| **Requisições HTTP** | Axios | Consumo da API REST para catálogo, autenticação, pedidos e área administrativa |
| **Autenticação** | OAuth2, JWT | Login de usuários, controle de sessão e autorização baseada em roles |
| **Controle de Acesso** | PrivateRoute, Roles (CLIENT / ADMIN) | Proteção de rotas e componentes conforme o perfil do usuário |
| **Persistência Local** | localStorage | Armazenamento do carrinho de compras e token de autenticação |
| **Formulários** | Formulários controlados, validações | Criação e edição de produtos, login, validações e exibição de erros |
| **CRUD Administrativo** | Listagem, criação, edição e exclusão | Gerenciamento completo de produtos, categorias e usuários |
| **Build & Tooling** | Vite | Ambiente de desenvolvimento rápido e build otimizado |
| **Deploy & CI/CD** | Netlify | Implantação contínua do frontend em ambiente de produção |

---

## 📂 Estrutura do projeto (resumo)

```
src/
 ├─ assets/
 ├─ components/
 ├─ contexts/
 ├─ models/
 ├─ routes/
 ├─ services/
 ├─ utils/
 └─ main.tsx
```
---

## 🧩 Modelo Conceitual

O modelo conceitual do sistema **DSCommerce** representa as principais entidades do domínio e seus relacionamentos, simulando um cenário real de e-commerce.

### Considerações principais

- Um **Usuário (User)** pode possuir um ou mais **perfis de acesso (Roles)**, como `CLIENT` e `ADMIN`.
- Cada **Usuário** pode realizar vários **Pedidos (Order)**, sendo que cada pedido pertence a um único usuário.
- Um **Pedido (Order)** é composto por um ou mais **Itens de Pedido (OrderItem)**.
- Cada **OrderItem** está associado a um **Produto (Product)** e armazena:
  - a **quantidade**
  - o **preço no momento da compra**, garantindo o histórico mesmo que o preço do produto seja alterado futuramente.
- Um **Pedido** pode possuir **zero ou um Pagamento (Payment)**, que registra o instante em que o pagamento foi realizado.
- Produtos podem estar associados a **uma ou mais Categorias (Category)**, e categorias podem conter vários produtos.
- O status do pedido é controlado por um **enumerador (OrderStatus)**, com estados como:
  - `WAITING_PAYMENT`
  - `PAID`
  - `SHIPPED`
  - `DELIVERED`
  - `CANCELED`

### Diagrama do modelo conceitual

![Modelo Conceitual DSCommerce](https://raw.githubusercontent.com/wagnerdf/dscommerce-frontend/76794000a9d5c6fa54356860514774edf59761a5/src/assets/modeloConceitual.png)

---

## 📌 Casos de Uso e Atores

O diagrama abaixo apresenta os principais **casos de uso do sistema DSCommerce**,
destacando as funcionalidades disponíveis para cada tipo de usuário.

### Diagrama de Casos de Uso

![Casos de Uso DSCommerce](https://raw.githubusercontent.com/wagnerdf/dscommerce-frontend/f659bc329e3a3074993ef96a977df0c793ecf467/src/assets/casoDeUso.png)

### Atores do sistema

| Ator            | Responsabilidade |
|-----------------|------------------|
| **Usuário anônimo** | Pode acessar as áreas públicas do sistema, como consulta ao catálogo, gerenciamento do carrinho de compras, login e cadastro (sign up). |
| **Cliente** | Responsável por manter seus próprios dados pessoais no sistema, registrar pedidos e visualizar o histórico de seus pedidos. Todo usuário cadastrado é, por padrão, um cliente. |
| **Admin** | Responsável por acessar a área administrativa do sistema, realizando cadastros, manutenções e relatórios. O administrador possui todas as permissões de um cliente. |

---

## 📌 Endpoints

### 🔓 Públicos

| Método | Rota               | Descrição                              |
|-------:|--------------------|----------------------------------------|
| POST   | `/oauth2/token`    | Autenticação e geração do token         |
| GET    | `/products`        | Lista produtos                          |
| GET    | `/products/{id}`   | Busca produto por ID                   |
| GET    | `/categories`      | Lista categorias                       |

### 🔒 Protegidos (JWT)

| Método | Rota               | Descrição                              |
|-------:|--------------------|----------------------------------------|
| GET    | `/users/me`        | Retorna o usuário autenticado          |
| POST   | `/orders`          | Cria um novo pedido                    |
| GET    | `/orders/{id}`     | Consulta pedido por ID                 |
| POST   | `/products`        | Cria produto                           |
| PUT    | `/products/{id}`   | Atualiza produto                       |
| DELETE | `/products/{id}`   | Remove produto                         |

---

## ⚙️ Como executar o projeto localmente

### Pré-requisitos
- Node.js (versão recomendada: 24)
- Gerenciador de pacotes yarn

### Passos

```bash
# Clone o repositório
git clone https://github.com/wagnerdf/dscommerce-frontend

# Acesse a pasta do projeto
cd dscommerce-frontend

# Instale as dependências
yarn install

# Execute o projeto
yarn dev
```

A aplicação estará disponível em:
```
http://localhost:5173
```

---

## 🔗 Protótipos de tela

Os protótipos da aplicação estão disponíveis no Figma:

👉 https://www.figma.com/file/ZrGNVNG0kZL6txDv4G8P6s/DSCommerce

---

## 🧠 Observações

- Projeto desenvolvido com foco em **aprendizado e portfólio**
- Implementa boas práticas de componentização, tipagem e organização de código
- Backend desenvolvido separadamente (API REST)

---

## 👨‍💻  Autor

<p align="left">
  <img src="https://avatars.githubusercontent.com/u/52794588?v=1" width="120" alt="WagnerDf"/>
</p>

| **Wagner Andrade (WagnerDf)** |
</br>
| Desenvolvedor Fullstack Java/React/PHP.... |
</br>
| [LinkedIn](https://www.linkedin.com/in/wagner-andrade-876b6460) |
</br> 
| [GitHub](https://github.com/WagnerDf) |

> 📘 Projeto baseado no curso da **[DevSuperior](https://devsuperior.com.br)**.

---
