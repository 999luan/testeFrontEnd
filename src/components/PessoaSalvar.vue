//os formularios desta area enviam o objeto "pessoaLocal" no metodo salvar
//metodo salvar pode receber os parametro "criar", e " editar", o metodo é usado
no componente principal de lista
<template>
  <div class="mt-4">
    <hr />
    <h2 class="font-weight-light">Salvar Usuário</h2>
    <form @submit.prevent="salvar">
      <div class="row">
        <div :class="classeColuna">
          <div class="form-group">
            <label>Nome:</label>
            <input
              title="Insira um Nome"
              type="text"
              class="form-control"
              placeholder="Nome"
              v-model="pessoaLocal.nome"
              required
            />

            <label>CPF:</label>
            <input
              type="number"
              pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
              class="form-control"
              placeholder="CPF"
              v-model="pessoaLocal.cpf"
              oninvalid="this.setCustomValidity('Insira um CPF com 11 digitos')"
              required
            />
            <label>Data de Nascimento:</label>
            <input
              type="date"
              class="form-control"
              placeholder="Data de nascimento"
              v-model="pessoaLocal.dataNascimento"
              oninvalid="this.setCustomValidity('Insira sua data de Nascimento')"
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
    pessoa: {
      type: Object,
      default: undefined,
    },
  },
  data() {
    return {
      pessoaLocal: Object.assign(
        {},
        { nome: "", cpf: "", dataNascimento: "" },
        this.pessoa
      ),
    };
  },
  computed: {
    classeBotao() {
      return {};
    },
    classeColuna() {
      return this.pessoa ? "col-sm-10" : "col-sm-12";
    },
  },
  watch: {
    pessoa(pessoaNova, pessoaAntiga) {
      this.pessoaLocal = Object.assign({}, this.pessoa);
    },
  },
  methods: {
    salvar(event) {
      const operacao = !this.pessoa ? "criar" : "editar";
      this.$emit(operacao, this.pessoaLocal);
      this.pessoaLocal = {
        nome: "",
        cpf: "",
        dataNascimento: "",
      };
    },
  },
};
</script>
