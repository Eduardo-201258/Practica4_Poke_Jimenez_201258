import React, {Fragment, useEffect, useState} from 'react'
import AllPokemons from './components/AllPokemons'
import Navbar from "./components/NavBar";

const App = () => {

   const[allPokemons, setAllPokemons] = useState([])
   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=30')

  const getPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }

 useEffect(() => {
  getPokemons()
 }, [])

  return (
    <Fragment>
        <div className="app-contaner">
            <Navbar loadMore = {loadMore}/>
            <br/> <br/> <br/> <br/> <br/> <br/> <br/>
            <div className="pokemon-container">
                <div className="all-container">
                    {allPokemons.map( (pokemonStats, index) =>
                        <AllPokemons
                            key={pokemonStats.id}
                            pokemonStats={pokemonStats}
                            allPokemons={allPokemons}

                        />
                    )}
                </div>
                <button className="load-more" onClick={() => getPokemons()}>Cargar mas pokemones</button>
            </div>
        </div>
    </Fragment>
  );
}

export default App;
