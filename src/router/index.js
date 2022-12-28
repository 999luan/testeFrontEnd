// usando as rotas
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//As rotas são indexadas no arquivo App.vue no diretório principal
//Para adicionar nova rota adicione um objeto {path='',name='',component=''}dentro do array routes
//"routes" é um array que recebe os objetos com as rotas
//Objetos enviados à rota podem conter children que serão indexadas como subdiretório
//Component declara qual componente vai ser exibido na rota

//componentes exibidos
import UsuarioView from "../views/UsuarioView.vue";
import ProdutoView from "../views/ProdutoView.vue";

//componente children (subrotas)
import ProdutoDetalhe from "../views/ProdutoDetalhe.vue";

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

//scrollbehavior posiciona o scroll ao abrir um componente, ou envia para um hash especifico
const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 300 },
      };
    }
    return { x: 0, y: 600 };
  },
  routes,
});

export default router;
