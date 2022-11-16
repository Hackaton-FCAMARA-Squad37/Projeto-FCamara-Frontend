# Orange Evolution: a plataforma de estudos guiados que você não sabia que precisava!

A Orange Evoluiton é uma plataforma SPA de estudos para os usuários finais, e de cadastro de novos conteúdos e temas para os administradores, foi imaginada e desenvolvida como o projeto final do Hackathon do Programa de Formação da FCamara/Orange Juice. Criada com um front-end composto por React.js e librarys que ajudaram em seu desenvolvimento, além de consumir uma API Rest desenvolvida em Node.js.

![tela home](https://user-images.githubusercontent.com/95655990/202057140-716aa79f-68fd-4f2e-bf06-b05cbd12645e.png)

## Tecnologias e ferramentas utilizadas

 - React.js
 - Npm
 - Insomnia/Postman
 - Hooks personalizados
 - Material UI
 - React Router Dom
 - react-burger-menu
 - react-loading-spin
 - React Router Hash Link
 - Yup
 - Axios
 - Figma
 - Heroku
 - Netlify
 - Vite
 - React Hook Form

## Inicialização da aplicação via terminal (local)

No terminal de sua escolha, clone o repositório:

```bash
git clone https://github.com/Hackaton-FCAMARA-Squad37/Projeto-FCamara-Frontend.git
```

Vá até o diretório do projeto:

```bash
cd Projeto-FCamara-Frontend
```

Instale as dependências:

```bash
npm install 
```

Inicie o servidor local:

```bash
npm run dev
```

### Deploy da aplicação
O site em funcionamento pode ser acessado [aqui](https://orangeevolutionsquad37.netlify.app/).

### Dados de login

Para entrar na plataforma como Administrador, utilize os seguintes dados de login:

>E-mail: admin@email.com
>
>Senha: squad37

## Endpoints e funcionalidades

A aplicação será inicializada na URL `http://localhost:5173/` na página de Onboarding, e as rotas de cada página foram definidas através do `react-router-dom`, limitando a acessibilidade à estas dependendo do estado de logado do usuário ou se este é Administrador. As entidades utilizadas da API Orange Evolution foram a de `Conteúdo`, `Tema`, `Usuário`, `Nível`, `Usuário-Tema` os endpoints da API podem ser acessados na [documentação da API](https://github.com/Hackaton-FCAMARA-Squad37/Projeto-FCamara-Backend) e na [documentação do swagger](https://orange-evolution-squad37.herokuapp.com/api-docs/#/).

### Onboarding/Home

A página inicial é a de rota `/`, nesta página há uma landing page que fala sobre o nosso produto, seus objetivos e a porta de entrada para outras páginas`.


### Tela de login

```
  /login
```

### Tela de cadastro

```
  /signin
```

### Painel do Usuário (rota bloqueada caso o usuário não esteja logado)

```
 /painel
```

### Página de escolha da área de estudo, são elas: "UX/UI Designer", "QA(Quality Assurance)" e "Desenvolvimento" (rota bloqueada caso o usuário não esteja logado)

```
 /areas
```

### Páginas das àreas especificadas (rota bloqueada caso o usuário não esteja logado)

```
 /caminhouxui
```
```
 /caminhodev
```
```
 /caminhoqa
```
Aqui é onde é apresentado os níveis de conhecimento para ter um estudo direcionado


### Páginas das trilhas de níveis especificadas (rota bloqueada caso o usuário não esteja logado)

```
 /caminhouxui/semear
```

```
 /caminhouxui/regar
```

```
 /caminhouxui/coletar
```

```
 /caminhoqa/semear
```

```
 /caminhoqa/regar
```

```
 /caminhoqa/coletar
```

```
 /caminhodev/semear
```

```
 /caminhodev/regar
```

```
 /caminhodev/coletar
```

Aqui é onde o usuário terá a disponabilidade dos conteúdos de cada trilha, e onde o Admin terá acesso à criação de conteúdo e exclusão.


### Página de adicionar conteúdos (rota bloqueada caso o usuário não esteja logado e caso o usuário não seja o admin)

```
 /adicionar-conteudos
```

### Página de atualização do usuário (rota bloqueada caso o usuário não esteja logado e caso ele seja o admin)

```
 /atualizar-usuario
```


## Referências 

 - [Vite](https://vitejs.dev/) - Ferramenta front-end utlizada na inicialização do projeto React.
 - [React.js](https://reactjs.org/) - Biblioteca javascript utlizada para interface do projeto.
 - [React Router](https://reactrouter.com/en/main) - Pacote para auxiliar na navegação entre as páginas com rotas.
 - [Material UI](https://mui.com/pt/) - Library utilizada para criação de componentes
 - [Axios](https://axios-http.com/docs/intro) - Cliente HTTP utilizado para fazer as requisições da API.
 - [Node.js](https://nodejs.org/pt-br/) - Ambiente de execução JavaScript.
 - [API Orange Evolution](https://github.com/Hackaton-FCAMARA-Squad37/Projeto-FCamara-Backend) - API REST utilizada no back-end do projeto.
 
 
## Contato dos desenvolvedores

 - [Vitor Augusto](https://www.linkedin.com/in/vitor-aam/)
 - [Guilherme Silveira](https://www.linkedin.com/in/guilherme-silveira-coutinho/)
