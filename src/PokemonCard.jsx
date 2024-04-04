const PokemonCard = ({pokemon, displayImage})=>{

        const type = document.querySelectorAll(".type")
        console.log(type)
        
        



    return(
        <article>
            <div className="id-pok"><h2> {pokemon.name}</h2></div>

            {displayImage && <img className="img-card" src={pokemon.image} alt="" />}
            
            <div className="info-pok">
                <h3>POKEMON N°{pokemon.id}</h3>
                <div className= "text-deco"  >type :</div> <p className={pokemon.type}>{pokemon.type}</p>
                <p><div className="text-deco">captured at :</div> {pokemon.capturedAt}</p>   
            </div>
            
        </article>
    )
}

export default PokemonCard;