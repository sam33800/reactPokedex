import PokemonCard from "./PokemonCard"

const FirePokemon=({pokemons})=>{
    
 
    {pokemons.sort((a,b)=>{
      return  a.id - b.id
    })}

    const filteredPok = pokemons.filter((pokemon)=>{
        return pokemon.type == "Fire"
    })  
    console.log(filteredPok)
    
    return(
        <section id="fire-pokemon">
        <h2>Fire type Pokemons</h2>
        {filteredPok.map((pokemon)=>{
                return <PokemonCard pokemon = {pokemon} displayImage={true} />

            
            
        })}
    </section>
    )
}

export default FirePokemon;