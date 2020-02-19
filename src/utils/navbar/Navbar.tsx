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
                        <NavLink href="/home">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/dashboard">Dashboard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about">About us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/planet">Planets</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/book">Book Flights</NavLink>
                    </NavItem>

                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default SpaceNav;