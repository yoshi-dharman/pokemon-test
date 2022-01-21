import React, { createContext, useReducer } from 'react';
import { pokeReducer } from './pokeReducer';

export const PokemonContext = createContext();

const PokemonProvider = (props) => {
    const [pokeData, dispatch] = useReducer(pokeReducer, {
        listPokemon : [],
        myPokemon : [],
        limit : 1,
    });

    return (
        <PokemonContext.Provider value={{pokeData, dispatch}}>
            {props.children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider;
