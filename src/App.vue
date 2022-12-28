<template>
  <div id="app">
    <div class="row w-80">
      <div class="container-fluid p-8 fundo">
        <div class="jumbotron jumbotron-fluid fundo">
          <h1 class="display-1 text-white">Gerenciador de Estoque</h1>

          <p class="lead text-light text-justify">O Slogan da sua marca</p>
          <div class="col-sm-12 container text-right bg-transparent">
            <input
              type="text"
              class="form-control-sm"
              placeholder="Busque aqui"
            />
            <button class="btn btn-primary ml-2">Busca</button>
          </div>
        </div>
        <div class="ml-md-4">
          <router-link
            to="/usuario"
            class="btn btn-primary mb-4 mr-2"
            active-class="active"
            >Usuario</router-link
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
</style>
