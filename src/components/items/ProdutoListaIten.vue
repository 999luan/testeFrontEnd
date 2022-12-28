<template>
  <li class="card d-flex col-sm-12 w-auto pr-8 bg-transparent">
    <div class="card border border-light rounded w-auto h-auto p-3 mr-2">
      <span class="card-title text-right mr-20"
        >Nome: {{ produto.descricao }}
      </span>
      <span class="card-text">ID: {{ produto.id }} </span>
      <span class="card-text">valor Unitario:{{ produto.valoUnitario }}</span>

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
