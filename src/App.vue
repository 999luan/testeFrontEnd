<template>
  <div id="app">
    <div class="jumbotron">
      <h1 class="display-4">TEste front End</h1>
      <p class="lead">o texto da sua marca aqui</p>
    </div>
    <div class="container">
      <nav>
        <router-link
          to="/"
          class="btn btn-primary mb-2 mr-2"
          active-class="active"
          exact
          >Home</router-link
        >
        <router-link
          to="/usuario"
          class="btn btn-primary mb-2 mr-2"
          active-class="active"
          >Usuario</router-link
        >
        <!-- //o bootsrap possui uma classe router-ativa chamada "active" //-->
        <router-link
          to="/produto"
          class="btn btn-primary mb-2 mr-2"
          active-class="active"
          >Produto</router-link
        >
      </nav>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  box-sizing: border-box;
}
</style>
