<template>
  <div class="produto">
    <ProdutoLista />
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
