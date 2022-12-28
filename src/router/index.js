import Vue from "vue";
import VueRouter from "vue-router";
import UsuarioView from "../views/UsuarioView.vue";
import ProdutoView from "../views/ProdutoView.vue";

import ProdutoDetalhe from "../views/ProdutoDetalhe.vue";
import UsuarioHome from "../views/UsuarioHome.vue";

UsuarioHome;

Vue.use(VueRouter);

//objeto com as rotas
//para adicionar nova rota adicione um objeto {path='',name='',component=''}dentro do array routes
const routes = [
  {
    path: "/usuario",
    name: "usuario",
    children: [
      {
        path: ":id",
        component: ProdutoDetalhe,
      },
    ],
    component: UsuarioView,
  },

  {
    path: "/produto",
    name: "Produto",
    component: ProdutoView,
  },
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  routes,
});

export default router;
