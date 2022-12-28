// lista é a parte funcional do componente // Axios executa os methodos e o get
é retornado para o array " pessoa" // o array pessoa é filtrado, e enviado para
o componente de item ("PessoaListaIten") // (PessoaSalvar) executa um put
utilizando axios e se comunica com a rede //botao chama metodo de deletar
usuario, que utiliza axios para fazer um "Delet" //@criar e @editar são criados
no metodo Salvar de PessoaSalvar
<template>
  <div class="">
    <div class="row">
      <div class="col-sm-10">
        <!-- botão que chama methodo para abrir componente de novo usuario (Pessoa Salvar) -->
        <button
          class="btn btn-primary float-right"
          @click="exibirFormularioCriarUsuario"
        >
          <i class="fa fa-plus mr-2"></i>
          <span>Criar Usuário</span>
        </button>
      </div>
      <div class="col-sm-12">
        <h1 class="font-weight-light text-light pl-5">Lista de Usuários</h1>
      </div>

      <div class="container-fluid col-sm-5">
        <ul class="list-group d-flex" v-if="pessoas.length > 0">
          <!-- componente de cadastro -->
          <PessoaSalvar
            class="list-group-item"
            v-if="exibirFormulario"
            :pessoa="usuarioSelecionado"
            @criar="cadastrarUsuario"
            @editar="editarUsuario"
          />
        </ul>
      </div>
      <div class="container-fluid col-sm-5">
        <ul
          class="list-group d-flex flex-row flex-wrap"
          v-if="pessoas.length > 0"
        >
          <!-- componente de lista, recebe o array pessoa(filtrado) e cria uma lista com vfor no componente ListaItem -->
          <PessoaListaIten
            class="list-group-item"
            v-for="pessoa in pessoasOrdenadas"
            :key="pessoa.id"
            :pessoa="pessoa"
            @editar="selecionarUsuarioEditar"
            @deletar="deletarUsuario"
          />
        </ul>

        <p v-else-if="!mensagemErro">Nenhuma usuário criado.</p>
        <div class="alert alert-danger" v-else>{{ mensagemErro }}</div>
      </div>
    </div>
    <button class="btn btn-secondary float-right" @click="voltar">
      Voltar
    </button>
  </div>
</template>

<script>
import axios from "../../axios";

import PessoaSalvar from "../PessoaSalvar.vue";
import PessoaListaIten from "../items/PessoaListaIten.vue";

export default {
  components: {
    PessoaSalvar,
    PessoaListaIten,
  },
  data() {
    return {
      pessoas: [],
      exibirFormulario: false,
      usuarioSelecionado: undefined,
      mensagemErro: undefined,
    };
  },

  beforeRouteUpdate(to, pessoas, next) {
    pessoas.id = to.params.id;
    next();
  },
  created() {
    // recebe dados da api
    axios
      .get(`/pessoas`)
      .then(
        (response) => {
          this.pessoas = response.data;
        },
        (error) => {
          console.log("Erro encontrado no then", error);
          return Promisse.reject(error);
        }
      )
      .catch((error) => {
        console.log("Erro encontrado no catch", error);
        if (error.response) {
          this.mensagemErro = `Servidor retornou um error: ${error.message} ${error.response.statusText}`;
        } else if (error.request) {
          this.mensagemErro = `Erro ao tentar comunicar com o servidor: ${error.message}`;
        } else {
          this.mensagemErro = `Erro ao fazer requisição ao servidor: ${error.message}`;
        }
      });
  },
  computed: {
    //filtro simples exibe o Id mais recente de acordo com o if ternario " ?  : "
    pessoasOrdenadas() {
      return this.pessoas.slice().sort((p1, p2) => {
        return p1.id > p2.id ? -1 : p1.id < p2.id ? 1 : 0;
      });
    },
  },

  methods: {
    voltar(event) {
      this.$router.back();
    },
    cadastrarUsuario(pessoa) {
      axios.post(`/pessoas`, pessoa).then((response) => {
        this.pessoas.push(response.data);

        this.resetar();
      });
    },

    deletarUsuario(pessoa) {
      const confirmar = window.confirm(`Deseja deletar usuario?`);
      if (confirmar) {
        axios.delete(`/pessoas/${pessoa.id}`).then((response) => {
          console.log("Deletado");
          const indice = this.pessoas.findIndex((p) => p.id === pessoa.id);
          this.pessoas.splice(indice, 1);
          this.resetar();
        });
      }
    },

    editarUsuario(pessoa) {
      axios.put(`/pessoas/${pessoa.id}`, pessoa).then((response) => {
        console.log(`PUT /pessoas/${pessoa.id}`, response);
        const indice = this.pessoas.findIndex((p) => p.id === pessoa.id);
        this.pessoas.splice(indice, 1, pessoa);
        this.resetar();
      });
    },
    // fecha o formulario apos o uso
    resetar() {
      this.usuarioSelecionado = undefined;
      this.exibirFormulario = false;
    },
    exibirFormularioCriarUsuario(event) {
      if (this.usuarioSelecionado) {
        this.usuarioSelecionado = undefined;
        return;
      }
      this.exibirFormulario = !this.exibirFormulario;
    },
    selecionarUsuarioEditar(pessoa) {
      this.usuarioSelecionado = pessoa;
      this.exibirFormulario = true;
    },
  },
};
</script>
