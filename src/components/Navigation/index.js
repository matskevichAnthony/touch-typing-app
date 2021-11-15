import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { StyledLink } from './style';


const Navigation = () => {

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand >TypeApp</Navbar.Brand>
                <Nav className="me-auto">
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/Training">Training</StyledLink>
                </Nav>
            </Container>
        </Navbar>
    )

}

export default Navigation