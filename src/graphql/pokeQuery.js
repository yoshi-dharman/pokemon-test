import { gql } from '@apollo/client';
import client from './client';

// Query
const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        id
        name
        image
      }
    }
  }
`;

const GET_POKEMON_DETAILS = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
      front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;


// Action

export const GetPokemonData = (limit, offset) => {
    return client.query({
        query : GET_POKEMONS,
        variables : {
            limit,
            offset
        },
    })
    .then(result => {
        const pokemonData = result.data.pokemons.results.map((items) => {
            return {
                id : items.id,
                name : items.name,
                image : items.image
            }
        });

        return {
            status : true,
            data : pokemonData,
            limit : result.data.pokemons.count,
        }
    })
    .catch(e => {
        console.log('Error : ', e);
        return {
            status : false
        }
    });
}

export const GetPokemonDetailsData = (name) => {
    return client.query({
        query : GET_POKEMON_DETAILS,
        variables : {
            name
        }
    })
    .then(result => {
        return result.data
    })
    .catch(e => {
        console.log('Error : ', e);
        return {
            status : false
        }
    })
}