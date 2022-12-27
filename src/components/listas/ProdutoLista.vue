<template>
  <div>
    <div class="row">
      <div class="col-sm-10">
        <h1 class="font-weight-light">Lista de Usuarios</h1>
      </div>
      <div class="col-sm-2">
        <button
          class="btn btn-primary float-right"
          @click="exibirFormularioCriarProduto"
        >
          <i class="fa fa-plus mr-2"></i>
          <span>Criar Usuario</span>
        </button>
      </div>

      <ul class="list-group" v-if="produtos.length > 0">
        <ProdutoListaIten
          v-for="produto in produtos"
          :key="produto.id"
          :produto="produto"
          @editar="selecionarUsuarioEditar"
          @deletar="deletarProduto"
        />
      </ul>

      <p v-else-if="!mensagemErro">Nenhuma usuario criado.</p>
      <div class="alert alert-danger" v-else>{{ mensagemErro }}</div>
      <!-- a variavel foi criada em  emit: ProdutoSalvar -->
      <ProdutoSalvar
        v-if="exibirFormulario"
        :produto="produtoSelecionado"
        @criar="cadastrarProduto"
        @editar="editarProduto"
      />
    </div>
  </div>
</template>

<script>
import axios from "../../axios";

import ProdutoSalvar from "../ProdutoSalvar.vue";
import ProdutoListaIten from "../ProdutoListaIten.vue";

export default {
  components: {
    ProdutoSalvar,
    ProdutoListaIten,
  },
  data() {
    return {
      produtos: [],
      exibirFormulario: false,
      produtoSelecionado: undefined,
      mensagemErro: undefined,
    };
  },
  created() {
    // recebe dados da api
    axios
      .get(`/produtos`)
      .then(
        (response) => {
          this.produtos = response.data;
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
    cadastrarProduto(produto) {
      axios.post(`/produtos`, produto).then((response) => {
        this.produtos.push(response.data);

        this.resetar();
      });
    },

    deletarProduto(produto) {
      const confirmar = window.confirm(`Deseja deletar usuario?`);
      if (confirmar) {
        axios.delete(`/produtos/${produto.id}`).then((response) => {
          console.log("Deletado");
          const indice = this.produtos.findIndex((p) => p.id === produto.id);
          this.produtos.splice(indice, 1);
          this.resetar();
        });
      }
    },

    editarProduto(produto) {
      axios.put(`/produtos/${produto.id}`, produto).then((response) => {
        console.log(`PUT /produtos/${produto.id}`, response);
        const indice = this.produtos.findIndex((p) => p.id === produto.id);
        this.produtos.splice(indice, 1, produto);
        this.resetar();
      });
    },
    resetar() {
      this.produtoSelecionado = undefined;
      this.exibirFormulario = false;
    },
    exibirFormularioCriarProduto(event) {
      if (this.produtoSelecionado) {
        this.produtoSelecionado = undefined;
        return;
      }
      this.exibirFormulario = !this.exibirFormulario;
    },
    selecionarUsuarioEditar(produto) {
      this.produtoSelecionado = produto;
      this.exibirFormulario = true;
    },
  },
};
</script>
