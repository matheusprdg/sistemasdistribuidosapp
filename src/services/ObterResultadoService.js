import axios from "axios";

axios.interceptors.request.use((x) => {
  x.meta = x.meta || {};
  x.meta.requestStartedAt = new Date().getTime();
  return x;
});

axios.interceptors.response.use((x) => {
  x.responseTime = new Date().getTime() - x.config.meta.requestStartedAt;
  return x;
});

export default class ObterResultadoService {
  async get(uri) {
    try {
      const response = await axios.get(this.obterUrl(uri));
      return {
        resultado: response.data.resultado,
        sucesso: true,
        responseTime: response.responseTime,
      };
    } catch (error) {
      return {
        resultado: error.response.data.message,
        sucesso: false,
        responseTime: error.response.responseTime,
      };
    }
  }

  obterUrl(uri) {
    const baseUrl = import.meta.env.VITE_BASE_URL;

    return `${baseUrl}${uri}`;
  }
}
