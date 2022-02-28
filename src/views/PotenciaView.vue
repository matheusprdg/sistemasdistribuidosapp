<template>
  <div class="form">
    <h1>Potência</h1>
    <input type="number" v-model="primeiroValor" />
    <p>^</p>
    <input type="number" v-model="segundoValor" />
    <button @click="calcular" :class="classeBotao">Calcular</button>
    <p v-if="resultado || resultado === 0" :class="sucesso">
      Resultado: {{ resultado }}
    </p>
  </div>
</template>

<script>
import ObterResultadoService from "../services/ObterResultadoService";
const service = new ObterResultadoService();

export default {
  data() {
    return {
      primeiroValor: 0,
      segundoValor: 0,
      resultado: "",
      sucesso: "none",
      calculando: false,
      classeBotao: "botaoAtivo",
    };
  },
  methods: {
    async calcular() {
      this.calculando = true;
      const response = await service.get(
        `?primeiroValor=${this.primeiroValor}&segundoValor=${this.segundoValor}&tipoOperacao=5`
      );

      this.resultado = response.resultado;
      this.sucesso = response.sucesso ? "sucesso" : "error";
      this.calculando = false;
    },
  },
};
</script>
