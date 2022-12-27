<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <h1 class="display-4">Cadastro de Usuario e Produto</h1>
      <p class="lead">
        Usando a biblioteca Axios para fazer chamadas Ajax à uma API REST.
      </p>
    </div>
    <div>
      <div class="container">
        <PessoasLista />
        <ProdutoLista />
      </div>
    </div>
  </div>
</template>

<script>
import PessoasLista from "./components/listas/PessoasLista.vue";
import ProdutoLista from "./components/listas/ProdutoLista.vue";

export default {
  components: {
    PessoasLista,
    ProdutoLista,
  },
};
</script>
