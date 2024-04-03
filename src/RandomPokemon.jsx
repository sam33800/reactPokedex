import PokemonCard from "./PokemonCard";

const RandomPokemon = ({pokemons})=>{
    

    //   const randomPokemon = pokemons.filter((pokemon)=>{
    //     return pokemon.id ==  (Math.round((Math.random()*10)))
            
        
    // })

    const randomPokemon = pokemons[Math.round(Math.random()*9)]



    
    return(
        
       <section>
        <h2>Random Pokemon</h2>
        <PokemonCard pokemon = {randomPokemon} />

        
       
       </section>
    )
}

export default RandomPokemon;