<template>
  <div class="form">
    <h1>Raíz Quadrada</h1>
    <input type="text" v-model="primeiroValor" />
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
        `?primeiroValor=${this.primeiroValor}&segundoValor=${this.segundoValor}&tipoOperacao=6`
      );

      this.resultado = response.resultado;
      this.sucesso = response.sucesso ? "sucesso" : "error";
      this.calculando = false;
    },
  },
};
</script>
