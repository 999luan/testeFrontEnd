// O Produto view recebe por padrão o componente que vai ser exibido, e o router
view.

<template>
  <div class="row">
    <ProdutoLista />
    <router-view></router-view>
  </div>
</template>

<script>
import ProdutoLista from "@/components/listas/ProdutoLista.vue";

export default {
  name: "ProdutoView",
  components: {
    ProdutoLista,
  },
};
</script>
