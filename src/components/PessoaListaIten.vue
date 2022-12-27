<template>
  <li class="list-group-item d-flex">
    <div>
      <span>Nome: {{ pessoa.nome }} | </span>
      <span>Cpf: {{ pessoa.cpf }} | </span>
      <span>Nascimento:{{ pessoa.dataNascimento }}</span>
    </div>

    <span class="espacar"></span>

    <button
      class="btn btn-primary btn-sm mr-1"
      title="Editar"
      @click="$emit('editar', pessoa)"
    >
      <i class="fa fa-pencil-alt"></i>
    </button>
    <button
      class="btn btn-danger btn-sm"
      title="Deletar"
      @click="$emit('deletar', pessoa)"
    >
      <i class="fa fa-trash"></i>
    </button>
  </li>
</template>

<script>
export default {
  props: {
    pessoa: {
      type: Object,
      requred: true,
    },
  },
  computed: {
    classeCSS() {
      return {
        "btn-secondary": !this.pessoa.concluido,
        "btn-success": this.pessoa.concluido,
      };
    },
    tituloBotaoConcluido() {
      return this.pessoa.concluido ? "Refazer Usuario" : "Concluir Usuario";
    },
  },
};
</script>

<style scoped>
.espacar {
  flex: 1 1 auto;
}
</style>
