import Vue from "vue";
import VueRouter from "vue-router";
import UsuarioView from "../views/UsuarioView.vue";
import ProdutoView from "../views/ProdutoView.vue";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/usuario",
    name: "Usuario",
    component: UsuarioView,
  },
  {
    path: "/produto",
    name: "Produto",
    component: ProdutoView,
  },
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
});

export default router;
