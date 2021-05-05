import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Manu = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><b style={{ color: 'blue', fontSize: '36px' }}>T</b>RAVEL-<b style={{ color: 'blue', fontSize: '36px' }}>A</b>GENCY</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
                    <Nav.Link><Link to='/destination'>Destination</Link></Nav.Link>
                    <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
                    <Nav.Link><Link to='/contact'>Contact</Link></Nav.Link>
                    <Nav.Link><Link className={styles.loginBtn} to='/login'>Login</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Manu;