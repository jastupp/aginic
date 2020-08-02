import React from 'react';
import PageLink from "../../api/PageLInk";
import { Nav, Navbar } from 'react-bootstrap';

/**
 * The Menu component
 */
const Menu = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href={PageLink.HOME}>Server Checker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href={PageLink.TESTURL}>Test Server</Nav.Link>
                <Nav.Link href={PageLink.RESULTS}>Results</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Menu;