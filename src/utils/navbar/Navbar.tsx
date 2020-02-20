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

        <Navbar className="container-fluid" light expand="lg" style = {{}}>
            <NavbarBrand style={{ color: "white", fontWeight: 800, fontSize: "30px", fontStyle: "italic", }}>
                <Link to="/" style={{ color: "white", fontWeight: 800, fontSize: "30px", fontStyle: "italic", }}>SpacePals</Link>
        </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar style = {{paddingLeft: "25%"}}>
                <Nav className="mr-auto" style={{fontSize: "20px"}}>
                <NavItem>
                        <NavLink href="/home" style = {{color: "white"}}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/dashboard" style = {{color: "white"}}>Dashboard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about" style = {{color: "white"}}>About us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/planet" style = {{color: "white"}}>Planets</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/book" style = {{color: "white"}}>Book Flights</NavLink>
                    </NavItem>

                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default SpaceNav;