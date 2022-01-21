import React, { useState, useEffect } from 'react';
import tw, { styled } from 'twin.macro';
import LoadingSpinner from '../components/LoadingSpinner';
import PokeImage from '../components/PokeImage';
import CloseBtn from '../components/CloseBtn';

const Container = tw.div`px-2 flex justify-center`;
const Card = tw.div`bg-gray-700 p-5 rounded-md w-full flex flex-col items-center justify-center md:w-4/6 lg:w-6/12 gap-4`;
const Title = tw.h1`font-bold capitalize text-white`;
const ListContainer = tw.div`border-t-2 py-4 w-full flex flex-col items-center justify-center gap-4`;
const ListItem = tw.div`bg-gray-300/[0.3] py-2 px-4 rounded-md text-white w-full flex items-center justify-between gap-2`;
const ListImage = tw.div`w-1/5`;
const ListText = tw.div`capitalize flex flex-col flex-grow gap-1`;
const ListTextNickname = tw.div`font-bold text-white text-xs md:text-xl`;
const ListTextName = tw.div`text-xs md:text-lg`;
const ListBtn = styled.div`
&:hover {
    --tw-scale-x: 1.10 !important;
    --tw-scale-y: 1.10 !important;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}
${tw`bg-red-400 py-1 px-2 rounded-full text-center text-white w-auto hover:scale-125`}`;

function MyPoke() {
    const [myPokemon, setMyPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let myPokemonLocal = JSON.parse(localStorage.myPokemon);
        setMyPokemon(myPokemonLocal);
        setIsLoading(false);

    }, []);
    
    const releasePokemon = (nickname) => {
        let newMyPokemon = myPokemon.filter(item => item.nickname !== nickname);
        localStorage.myPokemon = JSON.stringify(newMyPokemon);
        setMyPokemon(newMyPokemon);
    }

    return (
        <Container>
            {isLoading ?
            <LoadingSpinner text={"Loading My Pokemon Data..."} />
            :
            <>
            <Card>
                <CloseBtn />
                <Title>My Pokemon</Title>
                <ListContainer>
                    {myPokemon.map((items, index) => (
                        <ListItem key={index}>
                            <ListImage>
                                <PokeImage image={items.image} alt={items.name} hover={false} />
                            </ListImage>
                            <ListText>
                                <ListTextNickname>{items.nickname}</ListTextNickname>
                                <ListTextName>{items.name}</ListTextName>
                            </ListText>
                            <ListBtn onClick={() => releasePokemon(items.nickname)}>Release</ListBtn>
                        </ListItem>
                    ))};
                </ListContainer>
            </Card>
            </>
            }
        </Container>
    );
}

export default MyPoke;
