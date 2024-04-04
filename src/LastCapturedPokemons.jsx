import PokemonCard from "./PokemonCard"

const LastCapturedPokemons = ({pokemons, displayImage})=>{
    
    

      const sortedArr = pokemons.sort((a,b)=>{
        return new Date(b.capturedAt) - new Date(a.capturedAt)
    })

    const lastCapturedPokemons = sortedArr.slice(0,3)
    
    return(
        
        <section id="last-pokemon">
            <h2>Last Pokemons captured</h2>
            {lastCapturedPokemons.map((pokemon)=>{
                return <PokemonCard pokemon = {pokemon} displayImage={true} />
            })}
        </section>

        

    )
}

export default LastCapturedPokemons;