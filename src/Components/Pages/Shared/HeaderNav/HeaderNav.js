import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo.png';
import { HashLink } from 'react-router-hash-link';
import './HeaderNav.css'
import useAuth from '../../../../hooks/useAuth';


const HeaderNav = () => {
    const { user, logOut } = useAuth();

    return (
        <Navbar bg="transparent" expand="lg" >
            <Container >
                <Navbar.Brand as={Link} to="/home" className='d-flex'><img src={logo} width='50' height="50" alt="" /><div className='brand'><span className='brand-one'>TINY</span><span className='brand-two'>HOUSES</span></div></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to='/home' >Home</Nav.Link>
                        <Nav.Link as={HashLink} to='/home#homes'>Houses</Nav.Link>

                        {user?.displayName &&
                            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}

                        {!user?.email && <Nav.Link as={Link} to="/login">Login</Nav.Link>}

                    </Nav>
                    {user?.email && <Nav.Link as={Link} to="/"><i className="fas fa-user-circle me-1"></i>{user?.displayName}</Nav.Link>}

                    {user?.email && <Button onClick={logOut} variant='outline-danger' className=" px-3 py-2 rounded-pill" >logOut</Button>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderNav;