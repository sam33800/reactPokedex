const PokemonCard = ({pokemon})=>{
    return(
        <article>
            <div className="id-pok"><h2>POKEMON N°{pokemon.id}</h2></div>
            <img className="img-card" src={pokemon.image} alt="" />
            <div className="info-pok">
                <h3>{pokemon.name}</h3>
                <p><div className="text-deco">type :</div> {pokemon.type}</p>
                <p><div className="text-deco">captured at :</div> {pokemon.capturedAt}</p>   
            </div>
            
        </article>
    )
}

export default PokemonCard;