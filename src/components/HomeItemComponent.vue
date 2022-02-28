<script setup>
import HomeComponent from "./HomeComponent.vue";
</script>

<template>
  <HomeComponent>
    <template #heading>Tecnologias e documentação</template>
    <hr />
    <h3>Este trabalho utilizou das seguintes tecnologias e ferramentas</h3>
    <h4>Ferramentas</h4>
    <ul>
      <li>
        <a
          target="_blank"
          href="https://visualstudio.microsoft.com/vs/community/"
          >Visual Studio 2022 Community</a
        >
      </li>
      <li>
        <a target="_blank" href="https://code.visualstudio.com/"
          >Visual Studio Code</a
        >
      </li>
      <li><a target="_blank" href="https://www.postman.com/">Postman</a></li>
      <li><a>Dev Tools (navegador)</a></li>
    </ul>
    <h4>Back-end</h4>
    <ul>
      <li>
        <a
          target="_blank"
          href="https://dotnet.microsoft.com/en-us/download/dotnet/6.0"
          >.NET 6.0</a
        >
      </li>
    </ul>
    <h4>Front-end</h4>
    <ul>
      <li><a target="_blank" href="https://vuejs.org/">Vue.js</a></li>
      <li>
        <a target="_blank" href="https://axios-http.com/docs/intro">Axios</a>
      </li>
      <li>
        <a target="_blank" href="https://www.npmjs.com/package/serve">Serve</a>
      </li>
    </ul>

    <h3>
      Uma documentação explicando como rodar a aplicação em modo de
      Desenvolvimento e Produção está disponível no arquivo README.md, na pasta
      raíz do projeto.
    </h3>
  </HomeComponent>
</template>

<style scoped>
h3 {
  margin-top: 1rem;
}
h4 {
  margin-top: 0.6rem;
}
</style>
