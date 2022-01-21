import React, { useEffect, useState, useContext } from 'react';
import { PokemonContext } from '../context/context';
import { fetchPokemonData } from '../context/pokeAction';
import tw from 'twin.macro';
import PokeItem from '../components/PokeItem';
import LoadingSpinner from '../components/LoadingSpinner';

const Container = tw.div`flex flex-col justify-center items-center pb-44`
const PokeContainer = tw.div`px-2 flex flex-wrap gap-x-2 gap-y-4 items-center justify-center`;

function Home() {
    const { pokeData, dispatch } = useContext(PokemonContext);
    const [myPokemon, setMyPokemon] = useState([]);
    const [isFetching, setIsFetching] = useState(pokeData.listPokemon.length === 0);
    const [fetchStatus, setFetchStatus] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
            if(!isFetching){
                setFetchStatus(true);
                setIsFetching(true);
            }
        }

        if(pokeData.listPokemon.length >= pokeData.limit) {
            return
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, [isFetching, pokeData]);

    useEffect(() => {
        let myPokemonLocal = JSON.parse(localStorage.myPokemon);
        setMyPokemon(myPokemonLocal);
        
        if(isFetching && fetchStatus){ 
            setFetchStatus(false);

            const offset = pokeData.listPokemon.length;
            const limit = 60;

            fetchPokemonData(limit, offset, dispatch)
            .then(res => {
                if(res) {
                    setIsFetching(false);
                }
            })
            .catch(e => {
                console.log("Error : ", e);
            })

        } else return;


    }, [isFetching, dispatch, pokeData, fetchStatus]);

    return (
        <Container>
            <PokeContainer>
                {pokeData.listPokemon.map((items, index) => {
                   return <PokeItem key={index} items={items} myPokemon={myPokemon} />
                })}

                
            </PokeContainer>
            {isFetching && (
                <LoadingSpinner text={'Get More Pokemons...'} />
            )}
        </Container>
    )
}

export default Home
