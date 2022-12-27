<template>
  <li class="list-group-item d-flex">
    <div>
      <span>Nome: {{ produto.id }} | </span>
      <span>descricao: {{ produto.descricao }} | </span>
      <span>valor Unitario:{{ produto.valoUnitario }}</span>
    </div>

    <span class="espacar"></span>

    <button
      class="btn btn-primary btn-sm mr-1"
      title="Editar"
      @click="$emit('editar', produto)"
    >
      <i class="fa fa-pencil-alt"></i>
    </button>
    <button
      class="btn btn-danger btn-sm"
      title="Deletar"
      @click="$emit('deletar', produto)"
    >
      <i class="fa fa-trash"></i>
    </button>
  </li>
</template>

<script>
export default {
  props: {
    produto: {
      type: Object,
      requred: true,
    },
  },
  // computed: {
  //   classeCSS() {
  //     return {
  //       "btn-secondary": !this.produto.concluido,
  //       "btn-success": this.produto.concluido,
  //     };
  //   },
  //   tituloBotaoConcluido() {
  //     return this.produto.concluido ? "Refazer Produto" : "Concluir Produto";
  //   },
  // },
};
</script>

<style scoped>
.espacar {
  flex: 1 1 auto;
}
</style>
