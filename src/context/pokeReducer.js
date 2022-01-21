export const pokeReducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_POKEMON' : 
            return {
                ...state,
                limit : action.limit,
                listPokemon : [...state.listPokemon , ...action.result]
            };
        
        default : 
            return state;    
    }
}