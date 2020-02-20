import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const SpaceNav = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <Navbar className="container-fluid" light expand="lg" style = {{backgroundColor: "khaki"}}>
            <NavbarBrand style={{ color: "black", fontWeight: 800, fontSize: "30px", fontStyle: "italic", }}>
                <Link to="/" style={{ color: "black", fontWeight: 800, fontSize: "30px", fontStyle: "italic", }}>SpacePals</Link>
        </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar style = {{paddingLeft: "25%"}}>
                <Nav className="mr-auto" style={{fontSize: "20px"}}>
                    <NavItem>
                        <Link to="/home">Home</Link>
                    </NavItem>
                    <h3>|</h3>
                    <NavItem>
                        <Link to="/dashboard">Dashboard</Link>
                    </NavItem>
                    <h3>|</h3>
                    <NavItem>
                        <Link to="/about">About us</Link>
                    </NavItem>
                    <h3>|</h3>
                    <NavItem>
                        <Link to="/planet">Planets</Link>
                    </NavItem>
                    <h3>|</h3>
                    <NavItem>
                        <Link to="/book">Book Flights</Link>
                    </NavItem>
                    <h3>|</h3>
                    <NavItem>
                        <Link to="/registerCompany">Register a Company</Link>
                    </NavItem>
                    <h3>|</h3>
                    <NavItem>
                        <Link to="/ship">Register a Ship</Link>
                    </NavItem>
                    <h3>|</h3>
                    <NavItem>
                        <Link to="/flight">Register a Flight</Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default SpaceNav;