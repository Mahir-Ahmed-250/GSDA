import { Button, ThemeProvider } from '@mui/material';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './logo.png';
import './StickyNav.css'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0971f1',
            darker: '#053e85',
        },
        neutral: {
            main: '#ca2128',
            contrastText: '#fff',
        },
    },
});

const StickyNav = () => {


    return (
        <Navbar sticky='top' bg="light" expand="lg">
            <Container >
                <Navbar.Brand href="#"><img className='logo' src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                    <Nav.Link className='nav-link'>Home</Nav.Link>
                    <Nav.Link className='nav-link'>E-learning Courses</Nav.Link>
                    <Nav.Link className='nav-link'>Classroom Courses</Nav.Link>
                    <Nav.Link className='nav-link'>Heros</Nav.Link>
                    <Nav.Link className='nav-link'>Digital Services</Nav.Link>
                    <NavDropdown title="More Pages" id="navbarScrollingDropdown" style={{ textDecoration: "none" }}>
                        <NavDropdown.Item className='nav-link-drop' >About Us</NavDropdown.Item>
                        <NavDropdown.Item className='nav-link-drop'>FAQ's</NavDropdown.Item>
                        <NavDropdown.Item className='nav-link-drop'>Contact Us</NavDropdown.Item>
                        <NavDropdown.Item className='nav-link-drop'>Privacy Policy's</NavDropdown.Item>
                        <NavDropdown.Item className='nav-link-drop'>Blog's</NavDropdown.Item>
                    </NavDropdown>
                    <ThemeProvider theme={theme}>
                        <Button onClick={() => {
                            alert('hello')
                        }}
                            variant="contained" size="large" color="neutral">
                            Login
                        </Button>
                        <Button className="ms-4" onClick={() => {
                            alert('hello')
                        }}
                            variant="contained" size="large" color="neutral">
                            Register
                        </Button>
                    </ThemeProvider>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default StickyNav;