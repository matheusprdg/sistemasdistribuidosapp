import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/adicao",
      name: "adicao",
      component: () => import("../views/AdicaoView.vue"),
    },
    {
      path: "/subtracao",
      name: "subtracao",
      component: () => import("../views/SubtracaoView.vue"),
    },
    {
      path: "/multiplicacao",
      name: "multiplicacao",
      component: () => import("../views/MultiplicacaoView.vue"),
    },
    {
      path: "/divisao",
      name: "divisao",
      component: () => import("../views/DivisaoView.vue"),
    },
    {
      path: "/potencia",
      name: "potencia",
      component: () => import("../views/PotenciaView.vue"),
    },
    {
      path: "/raizQuadrada",
      name: "raizQuadrada",
      component: () => import("../views/RaizQuadradaView.vue"),
    },
    {
      path: "/teste",
      name: "teste",
      component: () => import("../views/TesteView.vue"),
    },
  ],
});

export default router;
