//os formularios desta area enviam o objeto "produtoLocal" no metodo salvar
//metodo salvar pode receber os parametro "criar", e " editar", o metodo é usado
no componente principal de lista
<template>
  <div class="mt-4 bg-warning">
    <hr />
    <h2 class="font-weight-light">Salvar Produto</h2>
    <form @submit.prevent="salvar">
      <div class="row bg-warning">
        <div :class="classeColuna">
          <div class="form-group bg-warning">
            <input
              type="number"
              class="form-control invisible"
              placeholder="ID"
              v-model="produtoLocal.lenght"
            />
            <label>Nome:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Nome do produto"
              v-model="produtoLocal.descricao"
              oninvalid="this.setCustomValidity('Insirar um Nome no produto')"
              required
            />
            <label>valor unitario:</label>
            <input
              type="number"
              class="form-control"
              placeholder="valor unitario"
              v-model="produtoLocal.valoUnitario"
              oninvalid="this.setCustomValidity('Insira um valor')"
              required
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
