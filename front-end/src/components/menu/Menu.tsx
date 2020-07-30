import React from 'react';
import PageLink from "../../api/PageLInk";
import { Nav, Navbar } from 'react-bootstrap';

const Menu = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href={PageLink.HOME}>API Checker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href={PageLink.TESTURL}>Test URL</Nav.Link>
                <Nav.Link href={PageLink.RESULTS}>View Tests</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Menu;