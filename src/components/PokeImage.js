import React from 'react';
import tw, {styled} from 'twin.macro';

const Image = tw.img`object-cover bg-gray-200 rounded-full `;

function PokeImage(props) {
    const ImageContainer = styled.div`
    ${props.hover && `&:hover {
        --tw-scale-x: 1.1!important;
        --tw-scale-y: 1.1 !important;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
    }`}
    ${tw`w-full flex justify-center relative`}
    `;

    return (
        <ImageContainer>
            <Image src={props.image} alt={props.alt} />
        </ImageContainer>
    );
}

export default PokeImage;
