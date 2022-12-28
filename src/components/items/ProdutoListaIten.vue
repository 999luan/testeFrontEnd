//componente criado por vfor recebe o array externamente e acessa suas
propriedades //console.log(produto) //este componente recebe dados de
ProdutoLista
<template>
  <li class="card d-flex col-sm-12 w-auto pr-8 bg-transparent">
    <div class="card border border-light rounded w-auto h-auto p-3 mr-2">
      <h4 class="card-title font-weight-light">
        Nome: {{ produto.descricao }}
      </h4>
      <h4 class="card-text font-weight-light">ID: {{ produto.id }}</h4>
      <h4 class="card-text font-weight-light">
        Valor Unitário: {{ produto.valoUnitario }}
      </h4>

      <span class="espacar"></span>
      <div>
        <button
          class="btn btn-info btn-sm float-right"
          title="Editar"
          @click="$emit('editar', produto)"
        >
          <i class="fa fa-pencil-alt"></i>
        </button>
        <button
          class="btn btn-info btn-sm float-right"
          title="Deletar"
          @click="$emit('deletar', produto)"
        >
          <i class="fa fa-trash"></i>
        </button>
      </div>
    </div>
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
};
</script>

<style scoped>
.espacar {
  flex: 1 1 auto;
}
</style>
