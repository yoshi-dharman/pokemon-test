import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function NavbarCustom() {
    return (
        <Navbar fixed="bottom" bg="dark" variant="dark">
            <Container>
            {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
            <Nav className="d-flex justify-content-evenly w-100 h-4">
            <Nav.Link className='d-flex flex-column' href="#home">
                <div className='d-flex justify-content-center mb-2 w-75'><img className='w-50' src="https://img.icons8.com/ios/50/ffffff/red-team--v1.png"/></div>
                <div className=''>Pokemon List</div>
            </Nav.Link>
            <Nav.Link className='d-flex flex-column' href="#features">
                <div className='d-flex justify-content-center mb-2 w-75'><img className='w-50' src="https://img.icons8.com/ios/50/ffffff/pokedex.png"/></div>
                <div>My Pokemon</div>
            </Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarCustom
