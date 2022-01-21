import React, { useEffect, useState } from 'react'
import tw, { styled } from 'twin.macro';
import { useParams } from 'react-router-dom';
import { GetPokemonDetailsData } from '../graphql/pokeQuery';
import { addMyPokemonData } from '../context/pokeAction';
import LoadingSpinner from '../components/LoadingSpinner';
import PokeImage from '../components/PokeImage';
import CloseBtn from '../components/CloseBtn';

const Container = tw.div`px-2 flex justify-center`;
const Card = tw.div`bg-gray-700 p-5 rounded-md w-full flex flex-col items-center justify-center md:w-4/6 lg:w-6/12 gap-4`;
const PokeName = tw.h1`font-bold capitalize text-white`;

const PokeDetailsCard = tw.div`text-white font-semibold flex flex-col justify-between py-4 border-t-2 w-full md:w-1/2`;
const PokeDetailData = tw.div`flex capitalize`;
const PokeDetailTitle = tw.div`whitespace-nowrap`;
const PokeDetailValue = tw.div``;
const CatchBtn = styled.div`
&:hover {
    --tw-scale-x: 1.10 !important;
    --tw-scale-y: 1.10 !important;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}
${tw`bg-red-400 px-7 py-2 rounded-full text-center text-white font-bold text-lg hover:scale-125`}`;
const Modal = tw.div`fixed h-screen w-screen top-0 bg-gray-900/[0.8] z-30 flex items-center justify-center overflow-hidden`;
const ModalContainer = tw.div`bg-gray-300/[0.3]  max-w-md rounded-md relative overflow-hidden shadow-lg py-6 px-5 flex flex-col items-center`;
const ModalTitle = tw.div`font-bold text-white text-3xl p-10 capitalize text-center`;
const ModalBtn = tw(CatchBtn)`w-min mt-4`;
const ModalLabel = tw.div`text-white pb-3`;
const ModalInput = tw.input`py-2 px-4 rounded-md text-xl font-semibold`;
const ModalAlert = tw.div`py-1 px-2 rounded-md bg-red-400 text-white mt-1`;

function PokeDetails() {
    const params = useParams();
    const [pokemonDetailsData, setPokemonDetailsData] = useState({});
    const [myPokemon, setMyPokemon] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [catchModal, setCatchModal] = useState(false);
    const [catchResult, setCatchResult] = useState(false);
    const [nickname, setNickname] = useState("");
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        let myPokemonLocal = JSON.parse(localStorage.myPokemon);
        setMyPokemon(myPokemonLocal);
        setIsFetching(true);
        GetPokemonDetailsData(params.name)
        .then(result => {
            setPokemonDetailsData(result.pokemon);
            setIsFetching(false);
        })
        .catch(e => console.log("Error : ", e));

        return () => {
            
        };
    }, [params.name]);

    const gachaCatch = () => {
        setCatchResult(Math.random() < 0.5);
        setCatchModal(true);
    }

    const sendToMyPokemon = () => {
        if(nickname === ""){
            setAlert(true);
        } if(myPokemon.filter(item => item.nickname === nickname).length >= 1 ){
            setAlert(true);
        }
        else{
            let data = {
                id : pokemonDetailsData.id,
                name : pokemonDetailsData.name,
                image : pokemonDetailsData.sprites.front_default,
                nickname
            }
            addMyPokemonData(data);
            setAlert(false);
            setCatchModal(false);
        }
    }

    return (
        <Container>
            {isFetching ?
            <LoadingSpinner text={"Loading Pokemon Data..."} />
            :
            <>
            <Card>
                <CloseBtn />
                <PokeImage image={pokemonDetailsData.sprites.front_default} alt={pokemonDetailsData.name} hover={false} />
                <PokeName>{params.name}</PokeName>
                <PokeDetailsCard>
                    <PokeDetailData>
                        <PokeDetailTitle>Type : &nbsp;</PokeDetailTitle>
                        <PokeDetailValue>
                            {pokemonDetailsData.types.map(item => {
                                return item.type.name
                            }).join(", ")}
                        </PokeDetailValue>
                    </PokeDetailData>
                    <PokeDetailData>
                        <PokeDetailTitle>Moves : &nbsp;</PokeDetailTitle>
                        <PokeDetailValue>
                            {pokemonDetailsData.moves.slice(0,3).map(item => {
                                return item.move.name
                            }).join(", ")}
                        </PokeDetailValue>
                    </PokeDetailData>
                </PokeDetailsCard>
                <CatchBtn onClick={()=>gachaCatch()}>Catch</CatchBtn>
            </Card>

            { catchModal &&
            <Modal>
                <ModalContainer>
                    <ModalTitle>{ catchResult ? `Success Catch ${params.name}!` : 'Failed To Catch!'}</ModalTitle>

                    { catchResult ? 
                        <>
                            <ModalLabel>Give Nickname</ModalLabel>
                            <ModalInput type={'text'} value={nickname} onChange={(e) => setNickname(e.target.value)} />
                            {alert && <ModalAlert>Nickname already use or cannot null!</ModalAlert>}
                            <ModalBtn onClick={()=>sendToMyPokemon()}>Ok</ModalBtn>
                        </>
                    :
                        <ModalBtn onClick={()=>setCatchModal(false)}>Close</ModalBtn>
                    }
                </ModalContainer>
            </Modal>
            }
            </>
            }
        </Container>
    )
}

export default PokeDetails
