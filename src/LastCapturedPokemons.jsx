import PokemonCard from "./PokemonCard"

const LastCapturedPokemons = ({pokemons})=>{
    
    

      const sortedArr = pokemons.sort((a,b)=>{
        return new Date(b.capturedAt) - new Date(a.capturedAt)
    })

    const lastCapturedPokemons = sortedArr.slice(0,3)
    
    return(
        
        <section>
            <h2>Last Pokemons captured</h2>
            {lastCapturedPokemons.map((pokemon)=>{
                return <PokemonCard pokemon = {pokemon} />
            })}
        </section>

        

    )
}

export default LastCapturedPokemons;