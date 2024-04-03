import PokemonCard from "./PokemonCard"

const FirePokemon=({pokemons})=>{
    

    const filteredPok = pokemons.filter((pokemon)=>{
        return pokemon.type == "Fire"
    })  
    
    return(
        <section>
        <h2>Fire type Pokemons</h2>
        {filteredPok.map((pokemon)=>{
            return <PokemonCard pokemon = {pokemon} />

            
            
        })}
    </section>
    )
}

export default FirePokemon;