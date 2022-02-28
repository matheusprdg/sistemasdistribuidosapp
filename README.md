# sistemasdistribuidosapp

Tutorial de como rodar a aplicação front-end.

## Recomendação para SETUP e IDE

IDE: <ul><li>VSCode</li></ul>

Extensões recomendadas:

<ul>
    <li>Vue Language Features (Volar)</li>
    <li>TypeScript Vue Plugin (Volar)</li>
    <li>Bracket Pair Colorizer 2</li>
    <li>Auto Rename Tag</li>
    <li>ESLint</li>
    <li>Material Icon Theme</li>
    <li>Prettier - Code formatter</li>
</ul>

## Instalação das dependências

Instale o [node.js](https://nodejs.org/en/) em sua máquina. De preferência, a versão estável (LTS)

```sh
Versão mínima: 16.14.0
```

Após instalar o Node, na raíz do projeto, abra o terminal e digite o comando.

```sh
npm install
```

## Rodando o projeto em modo Desenvolvimento

Para rodar o projeto em modo de Desenvolvimento, abra o VSCode na pasta raíz do projeto, abra o terminal e execute o comando

```sh
npm run dev
```

Aparecerão 2 mensagens no console, estas significam que o build para desenvolvimento está sendo feito.

```sh
> sistemasdistribuidosapp@0.0.0 dev
> vite
```

Após o build terminar, aparecerá outras mensagens no console

```sh
 vite v2.8.4 dev server running at:

  > Local: http://localhost:3000/
  > Network: use `--host` to expose

  ready in 366ms.
```

Agora, basta clicar no link que apareceu 'http://localhost:3000' e a página principal da aplicação irá ser carregada no navegador.

Ao fazer alguma alteração no código e salvar, a página automaticamente vai ser recarregada com as novas alterações.

## Rodando o projeto em modo Produção

Na raíz do projeto, execute o comando

```sh
npm run build
```

Este comando irá gerar a versão de produção da aplicação, que ficarão na pasta 'dist', na raíz do projeto.

Para acessar a aplicação, é necessário servir os arquivos gerados em um servidor. O servidor pode ser tanto local, quanto aberto para o público. Neste caso, iremos usar um servidor local.

Para iniciar o servidor e servir os arquivos, na raíz do projeto, abra o terminal e execute o comando

```sh
npm run serve
```

As seguintes mensagens aparecerão no console

```sh
> sistemasdistribuidosapp@0.0.0 serve
> serve ./dist


   ┌──────────────────────────────────────────────────┐
   │                                                  │
   │   Serving!                                       │
   │                                                  │
   │   - Local:            http://localhost:3000      │
   │   - On Your Network:  http://192.168.15.6:3000   │
   │                                                  │
   │   Copied local address to clipboard!             │
   │                                                  │
   └──────────────────────────────────────────────────┘
```

Após isso, basta clicar em um dos links disponibilizados.
