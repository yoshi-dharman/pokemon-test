export const pokeReducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_POKEMON' : 
            return {
                ...state,
                limit : action.limit,
                listPokemon : [...state.listPokemon , ...action.result]
            };

        case 'ADD_MY_POKEMON' :
            return {
                ...state,
                myPokemon : [...state.myPokemon , [action.result.data]]
            };

        case 'RELEASE_MY_POKEMON' : 
            return {
                ...state,
                myPokemon : action
            }
        
        default : 
            return state;    
    }
}