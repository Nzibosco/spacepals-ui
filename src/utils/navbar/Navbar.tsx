import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

const SpaceNav = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <Navbar className="container-fluid" light expand="lg" style = {{}}>
            <NavbarBrand style={{ color: "white", fontWeight: 800, fontSize: "30px", fontStyle: "italic", }}>
                <Link to="/" style={{ color: "white", fontWeight: 800, fontSize: "30px", fontStyle: "italic", }}>SpacePals</Link>
        </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar style = {{paddingLeft: "25%"}}>
                <Nav className="mr-auto" style={{fontSize: "20px"}}>

                    <NavItem>
                        <Link to="/home" style = {{color: "white"}}>Home</Link>

                    </NavItem>
                    <h3>|</h3>
                    <NavItem>

                        <Link to="/dashboard" style = {{color: "white"}}>Dashboard</Link>

                    </NavItem>
                    <h3>|</h3>
                    <NavItem>

                        <Link to="/about" style = {{color: "white"}}>About us</Link>
                    </NavItem>
                    <h3>|</h3>
                    <NavItem>
                        <Link to="/planet" style = {{color: "white"}}>Planets</Link>

                    </NavItem>
                    <h3>|</h3>
                    <NavItem>
                        <Link to="/book" style = {{color: "white"}}>Book Flights</Link>
                    </NavItem>
                    <h3>|</h3>
                    <NavItem>
                        <Link to="/registerCompany" style = {{color: "white"}}>Register a Company</Link>
                    </NavItem>
                    <h3>|</h3>
                    <NavItem>
                        <Link to="/ship" style = {{color: "white"}}>Register a Ship</Link>
                    </NavItem>
                    <h3>|</h3>
                    <NavItem>
                        <Link to="/flight" style = {{color: "white"}}>Register a Flight</Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default SpaceNav;