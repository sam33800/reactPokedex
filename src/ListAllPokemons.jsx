const ListAllPokemons = ({pokemons})=>{
    return(
        <section>
            <h2>10 first pokemons</h2>
            {pokemons.map((pokemon)=>{
                return(
                <article>
                    <div className="id-pok"><h2> {pokemon.name}</h2></div>
                <div className="info-pok">
                    <h3>POKEMON N°{pokemon.id}</h3>
                    <div className= "text-deco"  >type :</div> <p className={pokemon.type}>{pokemon.type}</p>
                    <p><div className="text-deco">captured at :</div> {pokemon.capturedAt}</p>   
                </div>
                </article>
                )
                
                
            })}
        </section>
    )


}

export default ListAllPokemons;