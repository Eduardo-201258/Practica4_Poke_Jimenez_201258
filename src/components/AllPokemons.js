import React from 'react';
import PokeInfo from "./PokeInfo";


const AllPokemons = ({pokemonStats, allPokemons }) => {
    const style = pokemonStats.types[0].type.name + " thumb-container";

    return (
        <div>
            <div className={style}>
                <PokeInfo
                    key={pokemonStats.id}
                    name={pokemonStats.name}
                    img={pokemonStats.sprites.front_default}
                    type={pokemonStats.types[0].type.name}
                />
            </div>
        </div>
    );
}

export default AllPokemons;
