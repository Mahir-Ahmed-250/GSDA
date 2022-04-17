import { Button, ThemeProvider } from '@mui/material';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './logo.png';
import './StickyNav.css'
import { createTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

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
        <Navbar bg="light" expand="lg">
            <Container >
                <NavLink to="/"><img className='logo' src={logo} alt="" /></NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                    <NavLink className='nav-link' to="/home">Home</NavLink>
                    <NavLink className='nav-link' to="/elearning_courses">E-learning Courses</NavLink>
                    <NavLink className='nav-link' to="/classroom_courses">Classroom Courses</NavLink>
                    <NavLink className='nav-link' to="/heros">Heros</NavLink>
                    <NavLink className='nav-link' to="/digital_services">Digital Services</NavLink>
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