//componente criado por vfor recebe o array externamente e acessa suas propriedades
//console.log(pessoa)
//este componente recebe dados de PessoasLista

<template >

  <li class="card d-flex  col-sm-12 w-auto pr-8 bg-transparent">
    <div class="card border border-light rounded w-auto h-auto p-3 mr-2" >
      <h3 class="card-title font-weight-light">  Nome:  {{ pessoa.nome }}</h3>
      <h3 class="card-text font-weight-light" >CPF: {{ pessoa.cpf }} </h3>
      <h3 class="card-text font-weight-light">Nascimento:   {{ pessoa.dataNascimento }}</h3>
       
     
     
      <div class="card-text">
      <div class="card-link d-flex justify-content-end">
        <router-link :to="{ path: `/usuario/${pessoa.id}`, hash: '#listaParametros'} " class="btn btn-info btn-sm  ">Produtos deste cliente</router-link>   
        <button
            class="btn btn-info btn-sm float-right  "
            title="Editar"
            @click="$emit('editar', pessoa)"
          >
            <i class="fa fa-pencil-alt"></i>
          </button>
            
          
          <button
          class="btn btn-info btn-sm float-right "
            title="Deletar"
            @click="$emit('deletar', pessoa)"
          >
            <i class="fa fa-trash"></i>
          </button>
      </div>
      </div>
      </div>
    
   
  </li>
   
  
</template>

<script>
export default {
  props: {
    pessoa: {
      type: Object,
      requred: true,
    },
  },
  
};
</script>

<style scoped>
.espacar {
  flex: 1 1 auto;
}
