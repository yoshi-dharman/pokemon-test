import React from 'react';
import tw from 'twin.macro';
import { useNavigate } from "react-router-dom";
import PokeImage from './PokeImage';

const PokeItemContainer = tw.div`mx-2 w-3/12 lg:w-normal md:w-1/6 flex flex-col gap-4 relative justify-center`;
const PokeText = tw.div`capitalize w-full text-center`;
const PokeOwned = tw.div`absolute px-1 right-0 top-0 bg-red-400 rounded-full z-10 text-white text-sm font-semibold`

function PokeItem(props) {
    let navigate = useNavigate();
    let owned = props.myPokemon.filter(item => item.id === props.items.id).length;

    return (
        <PokeItemContainer onClick={() => navigate(`./pokemon/${props.items.name}`)}>
            {owned > 0 &&
                <PokeOwned>x{owned}</PokeOwned>
            }
            <PokeImage image={props.items.image} alt={props.items.name} hover={true}/>
            <PokeText >{props.items.name}</PokeText>
        </PokeItemContainer>
    );
}

export default PokeItem;
