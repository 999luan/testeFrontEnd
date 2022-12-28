<template>
  <div class="row">
    <PessoasLista />
    <router-view></router-view>
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
