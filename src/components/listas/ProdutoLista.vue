//lista é a parte funcional do componente //as requisições são feitas e é criado
o array "produto" dentro de data. // lista é a parte funcional do componente //
Axios executa os methodos e o get é retornado para o array " produto" // o array
produto é filtrado, e enviado para o componente de item ("ProdutoListaIten") //
(ProdutoSalvar) executa um put utilizando axios e se comunica com a rede //botao
chama metodo de deletar usuario, que utiliza axios para fazer um "Delet"//@criar
e @editar são criados no metodo Salvar de ProdutoSalvar
<template>
  <div class="bg-transparent">
    <div class="row">
      <div class="container">
        <!-- botão que chama methodo para abrir componente de novo produto (Produto Salvar) -->
        <button
          class="btn btn-primary float-right"
          @click="exibirFormularioCriarProduto"
        >
          <i class="fa fa-plus mr-12"></i>
          <span>Criar Produto</span>
        </button>
      </div>
      <div class="col-sm-12">
        <h1 class="font-weight-light text-light pl-5">Lista de Produtos</h1>
      </div>

      <div class="col-sm-12">
        <ul class="list-group d-flex" v-if="produtos.length > 0">
          <!-- componente de cadastro -->
          <ProdutoSalvar
            class="list-group-item"
            v-if="exibirFormulario"
            :produto="produtoSelecionado"
            @criar="cadastrarProduto"
            @editar="editarProduto"
          />
        </ul>
        <!-- componente de lista, recebe o array produto, e cria uma lista com vfor no componente ListaItem-->
        <div class="col-sm-12">
          <ul
            class="list-group d-flex flex-row flex-wrap"
            v-if="produtos.length > 0"
          >
            <ProdutoListaIten
              class="list-group-item"
              v-for="produto in produtos"
              :key="produto.id"
              :produto="produto"
              @editar="selecionarUsuarioEditar"
              @deletar="deletarProduto"
            />
          </ul>

          <p v-else-if="!mensagemErro">Nenhuma produto registrado.</p>
          <div class="alert alert-danger" v-else>{{ mensagemErro }}</div>
          <!-- a variavel foi criada em  emit: ProdutoSalvar -->
        </div>
      </div>
    </div>
    <button class="btn btn-secondary float-right" @click="voltar">
      Voltar
    </button>
  </div>
</template>

<script>
import axios from "../../axios";

import ProdutoSalvar from "../ProdutoSalvar.vue";
import ProdutoListaIten from "../items/ProdutoListaIten.vue";

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
  computed: {
    produtosFiltrados() {
      const busca = this.busca;
      return !busca
        ? this.produtos
        : this.produtos.filter((c) =>
            c.descricao.toLowerCase().includes(busca.toLowerCase())
          );
    },
  },

  methods: {
    voltar(event) {
      this.$router.back();
    },
    cadastrarProduto(produto) {
      axios.post(`/produtos`, produto).then((response) => {
        this.produtos.push(response.data);

        this.resetar();
      });
    },

    deletarProduto(produto) {
      const confirmar = window.confirm(`Deseja deletar produto?`);
      if (confirmar) {
        axios
          .delete(`/produtos/${produto.id}`)
          .then((response) => {
            console.log("Deletado");
            const indice = this.produtos.findIndex((p) => p.id === produto.id);
            this.produtos.splice(indice, 1);
            this.resetar();
          })
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
      }
    },

    editarProduto(produto) {
      axios
        .put(`/produtos/${produto.id}`, produto)
        .then((response) => {
          console.log(`PUT /produtos/${produto.id}`, response);
          const indice = this.produtos.findIndex((p) => p.id === produto.id);
          this.produtos.splice(indice, 1, produto);
          this.resetar();
        })
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
    // fecha o formulario apos o uso
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
