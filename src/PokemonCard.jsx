const PokemonCard = ({pokemon})=>{
    return(
        <article>
            <img src={pokemon.image} alt="" />
            <h3>{pokemon.name}</h3>
            <p>type : {pokemon.type}</p>
            <p>captured at {pokemon.capturedAt}</p>
        </article>
    )
}

export default PokemonCard;