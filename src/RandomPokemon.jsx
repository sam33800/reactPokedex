import PokemonCard from "./PokemonCard";

const RandomPokemon = ({pokemons})=>{
    

    //   const randomPokemon = pokemons.filter((pokemon)=>{
    //     return pokemon.id ==  (Math.round((Math.random()*10)))
            
        
    // })

    const randomPokemon = pokemons[Math.round(Math.random() *( pokemons.length -1))]



    
    return(
        
       <section id="random-pokemon">
        <h2>Random Pokemon</h2>
            <PokemonCard pokemon = {randomPokemon} displayImage={true} />

        
       
       </section>
    )
}

export default RandomPokemon;