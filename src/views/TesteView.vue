<template>
  <div class="form">
    <h1>Teste da API</h1>
    <div class="testeInput">
      <label for="quantidadeRequisicoes">Quantidade de Requisições:</label>
      <input
        type="number"
        id="quantidadeRequisicoes"
        v-model="quantidadeRequisicoes"
      />
    </div>
    <button :disabled="testando" @click="test" :class="classeBotao">
      Testar
    </button>
    <div :class="classeTabela" v-if="resultados.length > 0">
      <div class="spinner" v-if="testando"></div>
      <table v-else>
        <tr>
          <th>Operação</th>
          <th>Resultado</th>
          <th>Tempo total</th>
        </tr>
        <tr v-for="(value, name, index) in resultados" :key="index">
          <td v-if="value.tipoOperacao !== '√'">
            {{ value.primeiroValor }} {{ value.tipoOperacao }}
            {{ value.segundoValor }}
          </td>
          <td v-else>{{ value.tipoOperacao }} {{ value.primeiroValor }}</td>
          <td :class="value.class">
            {{ value.resultado }}
          </td>
          <td>
            {{
              value.responseTime && value.responseTime != ""
                ? `${value.responseTime} ms`
                : ""
            }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import ObterResultadoService from "../services/ObterResultadoService";
const service = new ObterResultadoService();

export default {
  data() {
    return {
      quantidadeRequisicoes: 0,
      contadorRequisicoes: 0,
      testando: false,
      resultados: [],
      escalar: false,
    };
  },
  computed: {
    classeBotao() {
      return this.testando ? "botaoInativo" : "botaoAtivo";
    },
    classeTabela() {
      return this.testando ? "tabelaLoader" : "tabela";
    },
  },
  methods: {
    async test() {
      if (this.quantidadeRequisicoes == 0) {
        return;
      }

      this.contadorRequisicoes = 0;
      this.resultados = [];
      this.testando = true;

      const interval = setInterval(async () => {
        const that = this;
        that.contadorRequisicoes++;

        if (
          that.contadorRequisicoes == that.quantidadeRequisicoes ||
          that.contadorRequisicoes > that.quantidadeRequisicoes
        ) {
          clearInterval(interval);
        }

        const valores = that.getRandomInt(100);
        const response = await service.get(
          `?primeiroValor=${valores.primeiroValor}&segundoValor=${valores.segundoValor}&tipoOperacao=${valores.tipoOperacao}`
        );

        that.sucesso = response.sucesso ? "sucesso" : "error";

        that.resultados.push({
          ...response,
          class: response.sucesso ? "sucesso" : "error",
          primeiroValor: valores.primeiroValor,
          segundoValor: valores.segundoValor,
          tipoOperacao: that.translate(valores.tipoOperacao),
        });

        if (that.resultados.length == that.quantidadeRequisicoes) {
          that.testando = false;
        }
      }, 0);
    },
    getRandomInt(max) {
      const primeiroValor = Math.floor(Math.random() * max);
      const segundoValor = Math.floor(Math.random() * max);
      const tipoOperacao = Math.floor(Math.random() * (6 - 1 + 1) + 1);

      return { primeiroValor, segundoValor, tipoOperacao };
    },
    translate(tipoOperacao) {
      switch (tipoOperacao) {
        case 1:
          return "+";
        case 2:
          return "-";
        case 3:
          return "X";
        case 4:
          return "/";
        case 5:
          return "^";
        case 6:
          return "√";
        default:
          break;
      }
    },
  },
};
</script>
