import React, {Fragment} from 'react';
import PokeInfo from "./PokeInfo";

const AllPokemons = ({pokemonStats, allPokemons }) => {
    const style = pokemonStats.types[0].type.name + " thumb-container";

    const viewAbility = () => {

    }

    return (
       <Fragment>
           <div className="desvanecer">
               <div className={style}>
                   <button onClick={viewAbility}>
                       <PokeInfo
                           id={pokemonStats.id}
                           name={pokemonStats.name}
                           img={pokemonStats.sprites.front_default}
                           type={pokemonStats.types[0].type.name}
                           heigth={pokemonStats.height}
                           weight={pokemonStats.weight}
                       />
                   </button>

               </div>

           </div>
       </Fragment>
    );
}


export default AllPokemons;
