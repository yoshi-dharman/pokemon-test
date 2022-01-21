import { GetPokemonData } from '../graphql/pokeQuery';

export const fetchPokemon = (result) => {
    return {
        type: 'FETCH_POKEMON',
        result: result.data,
        limit: result.limit
    }
}


// Action

export const fetchPokemonData = (limit, offset, dispatch) => {
    return GetPokemonData(limit, offset)
    .then(result => {
        dispatch(fetchPokemon(result));
        return true;
    })
    .catch(e => {
        console.log('Error :', e);
        return false;
    });
}

export const addMyPokemonData = (data) => {
    let myPokemonLocal = [];
    if(localStorage.myPokemon){
        myPokemonLocal = JSON.parse(localStorage.myPokemon);
    }
    myPokemonLocal.push(data);
    localStorage.myPokemon = JSON.stringify(myPokemonLocal);
}