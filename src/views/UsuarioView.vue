<template>
  <div class="home">
    <h3 class="font-weight-light">Usuario</h3>
    <PessoasLista />
  </div>
</template>

<script>
// @ is an alias to /src
import PessoasLista from "@/components/listas/PessoasLista.vue";

export default {
  name: "UsuarioView",
  components: {
    PessoasLista,
  },
};
</script>
