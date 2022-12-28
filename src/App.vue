//Aqui exibo a rota atual pelo router view, e os seletores de abas que vão
aparecer acima //** o router view do app é todo o app

<template>
  <div id="app">
    <div class="row w-auto fundo">
      <div class="container-fluid p-8 bg-transparent">
        <div class="jumbotron jumbotron-fluid bg-transparent">
          <h1 class="display-2 text-light text-left">Cadastrando Dados</h1>

          <p class="lead text-light text-center ml-4">
            O Slogan da sua marca bem aqui!
          </p>
        </div>
        <!-- O arquivo com as rotas pode ser encontrado na pasta router -->
        <div class="ml-md-4">
          <router-link
            to="/usuario"
            class="btn btn-primary mb-4 mr-2"
            active-class="active"
            >Usuário</router-link
          >

          <!-- //o bootsrap possui uma classe router-ativa chamada "active" //-->
          <router-link
            to="/produto"
            class="btn btn-primary mb-4 mr-2"
            active-class="active"
            >Todos os produtos</router-link
          >
        </div>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.slide-enter,
.slide-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
.fundo {
  background-image: url("./assets/logo.png");

  background-repeat: no-repeat;
  background-size: cover;
}
.fundoBaner {
  background-image: url("./assets/logo.png");

  background-repeat: no-repeat;
  background-size: cover;
}
</style>
