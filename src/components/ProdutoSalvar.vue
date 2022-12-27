<template>
  <div class="mt-4">
    <hr />
    <h2 class="font-weight-light">Salvar Usuario</h2>
    <form @submit.prevent="salvar">
      <div class="row">
        <div :class="classeColuna">
          <div class="form-group">
            <label>id:</label>
            <input
              type="text"
              class="form-control"
              placeholder="ID"
              v-model="produtoLocal.id"
            />
            <label>descrição:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Descrição"
              v-model="produtoLocal.descricao"
            />
            <label>valor unitario:</label>
            <input
              type="text"
              class="form-control"
              placeholder="valor unitario"
              v-model="produtoLocal.valoUnitario"
            />
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Salvar</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    produto: {
      type: Object,
      default: undefined,
    },
  },
  data() {
    return {
      produtoLocal: Object.assign(
        {},
        { id: "", descricao: "", valoUnitario: "" },
        this.produto
      ),
    };
  },
  computed: {
    classeBotao() {
      return {};
    },
    classeColuna() {
      return this.produto ? "col-sm-10" : "col-sm-12";
    },
  },
  watch: {
    produto(produtoNovo, produtoAntigo) {
      this.produtoLocal = Object.assign({}, this.produto);
    },
  },
  methods: {
    salvar(event) {
      const operacao = !this.produto ? "criar" : "editar";
      this.$emit(operacao, this.produtoLocal);
      this.produtoLocal = {
        id: "",
        descricao: "",
        valoUnitario: "",
      };
    },
  },
};
</script>
