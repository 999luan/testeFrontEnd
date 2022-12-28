<template>
  <div class="row">
    <router-view></router-view>
    <ProdutoLista />
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
