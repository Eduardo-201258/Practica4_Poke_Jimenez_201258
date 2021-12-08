import React from 'react';


const Navbar = (loadMore) => {
    return(
        <div className="nav-bar">
            <ul>
                <img width="150px" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"/>
                <h1 align="center">POKEDEX {loadMore.length}</h1>
            </ul>
        </div>
    );
}

export default Navbar;