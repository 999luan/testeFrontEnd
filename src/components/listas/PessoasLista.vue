<template>
  <div>
    <div class="row">
      <div class="col-sm-10">
        <h1 class="font-weight-light">Lista de Usuarios</h1>
      </div>
      <div class="col-sm-2">
        <button
          class="btn btn-primary float-right"
          @click="exibirFormularioCriarUsuario"
        >
          <i class="fa fa-plus mr-2"></i>
          <span>Criar Usuario</span>
        </button>
      </div>

      <ul class="list-group" v-if="pessoas.length > 0">
        <PessoaListaIten
          v-for="pessoa in pessoas"
          :key="pessoa.id"
          :pessoa="pessoa"
          @editar="selecionarUsuarioEditar"
          @deletar="deletarUsuario"
        />
      </ul>

      <p v-else-if="!mensagemErro">Nenhuma usuario criado.</p>
      <div class="alert alert-danger" v-else>{{ mensagemErro }}</div>
      <!-- a variavel foi criada em  emit: pessoaSalvar -->
      <PessoaSalvar
        v-if="exibirFormulario"
        :pessoa="usuarioSelecionado"
        @criar="cadastrarUsuario"
        @editar="editarUsuario"
      />
    </div>
  </div>
</template>

<script>
import axios from "../../axios";

import PessoaSalvar from "../PessoaSalvar.vue";
import PessoaListaIten from "../PessoaListaIten.vue";

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

  methods: {
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
