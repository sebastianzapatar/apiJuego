import axios from "axios";
const pokemonAPI=axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon"
});
export const getPokemonOptions = () => {
    const pokemonsArray = Array.from(Array(650));
    return pokemonsArray.map((_, index) => index + 1);
}
const getPokemonNames=async([a,b,c,d]=[])=>{
    const promiseArra=[
        pokemonAPI.get(`/${a}`),
        pokemonAPI.get(`/${b}`),
        pokemonAPI.get(`/${c}`),
        pokemonAPI.get(`/${d}`)
    ];
    const [p1,p2,p3,p4]=await Promise.all(promiseArra);
    return [
        {name:p1.data.name,id:p1.data.id},
        {name:p2.data.name,id:p2.data.id},
        {name:p3.data.name,id:p3.data.id},
        {name:p4.data.name,id:p4.data.id}
    ];
}
 const getOptions=async()=>{
    const mixedPokemon=getPokemonOptions().sort(()=>Math.random()-0.5);
    const options=await getPokemonNames(mixedPokemon.slice(0,4));
    console.log('Los opciones',options);
    return options;
 }

 export default getOptions;