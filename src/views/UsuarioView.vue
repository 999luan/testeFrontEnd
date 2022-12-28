// O Usuario view recebe por padrão o componente que vai ser exibido, e o router
view

<template>
  <div class="row">
    <PessoasLista />
    <router-view></router-view>
  </div>
</template>

<script>
import PessoasLista from "@/components/listas/PessoasLista.vue";

export default {
  name: "UsuarioView",
  components: {
    PessoasLista,
  },
};
</script>
