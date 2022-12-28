// A children recebe por padrão o componente que vai ser exibido e o
router-view.
<template>
  <div class="">
    <ProdutoLista id="listaParametros" />
    <router-view></router-view>
  </div>
</template>

<script>
import ProdutoLista from "@/components/listas/ProdutoLista.vue";

export default {
  name: "ProdutoDetalhe",
  components: {
    ProdutoLista,
  },
};
</script>
