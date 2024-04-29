<template>
 <h1 v-if="!pokemon">Cargando, por 4k lo cambian a uno</h1>
 <div v-else>
  <h1>Who's that Pokemon????</h1>
  <button @click="mixPokemonArray">Iniciar Juego</button>
 </div>
</template>

<script>

import getOptions from '../public/helpers/getPokemonOptions';

export default {
  name: 'App',
  components: {
      
  },
  data() {
    return {
      pokemonArr:[],
      pokemon:null,
      showPokemon:false,
      mensaje:'' 
    };
  },
  methods:{
    async mixPokemonArray(){
      this.pokemonArr = await getOptions();
      this.pokemon = this.pokemonArr[Math.floor(Math.random() * this.pokemonArr.length)];
    }
  },
  mounted(){
    this.mixPokemonArray();
  }
}
</script>

<style>

</style>
