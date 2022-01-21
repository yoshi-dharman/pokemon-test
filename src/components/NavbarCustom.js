import React from 'react';
import tw, {styled} from 'twin.macro';
import { useNavigate } from 'react-router-dom';

const Navbar = tw.div`w-screen fixed bg-red-500 text-white pt-4 pb-3 flex items-center justify-between border-black border-b-2 shadow-base top-0 z-20`;
const NavbarContainer = tw.div`w-11/12 h-full mx-auto flex items-center justify-between`;
const NavLogo = tw.div`flex items-center h-11`;
const NavLogoText = tw.h1`font-bold text-lg tracking-wider ml-2`;
const NavMyPokeBtn = styled.div`
    &:hover {
        --tw-scale-x: 1.25 !important;
        --tw-scale-y: 1.25 !important;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
    }
    ${tw`rounded-md bg-white text-red-600 flex items-center flex-col p-2`}
`;
const NavMyPokeBtnText = tw.h1`font-semibold text-xs hidden md:block`

function NavbarCustom() {
    let navigate = useNavigate();

    return (
        <Navbar>
            <NavbarContainer>
            <NavLogo onClick={() => navigate('./')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM5.07089 13C5.55612 16.3923 8.47353 19 12 19C15.5265 19 18.4439 16.3923 18.9291 13H14.8293C14.4174 14.1652 13.3062 15 12 15C10.6938 15 9.58251 14.1652 9.17068 13H5.07089ZM18.9291 11C18.4439 7.60771 15.5265 5 12 5C8.47353 5 5.55612 7.60771 5.07089 11H9.17068C9.58251 9.83481 10.6938 9 12 9C13.3062 9 14.4174 9.83481 14.8293 11H18.9291ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor" /></svg>   
                <NavLogoText>Pokédex</NavLogoText>
            </NavLogo>
            <NavMyPokeBtn onClick={() => navigate('./mypokemon')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-collection-fill" viewBox="0 0 16 16">
                    <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"/>
                </svg>
                <NavMyPokeBtnText>My Poké Bag</NavMyPokeBtnText>
            </NavMyPokeBtn>
            </NavbarContainer>
        </Navbar>
    )
}

export default NavbarCustom
