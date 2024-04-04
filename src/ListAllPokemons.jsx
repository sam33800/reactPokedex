import PokemonCard from "./PokemonCard";

const ListAllPokemons = ({pokemons})=>{
    return(
        <section>
            <h2>10 first pokemons</h2>
            {pokemons.map((pokemon)=>{
                return(
                    <PokemonCard pokemon = {pokemon}/>
               
                )
                
                
            })}
        </section>
    )


}

export default ListAllPokemons;