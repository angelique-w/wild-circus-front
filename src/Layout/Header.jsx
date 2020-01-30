import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from "reactstrap";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="fixed-top">
            <Navbar color="light" light expand="md">
                <Link to="/">
                    <NavbarBrand>Wild Circus</NavbarBrand>
                </Link>
                <Link to="/Tournee">
                    <Button color="primary" size="lg" className="mx-2">
                        Réservez vos places
                    </Button>
                </Link>
                <Link to="/Backoffice">
                    <Button color="info" size="lg" className="mx-2">
                        Admin
                    </Button>
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="mx-4">
                            <NavLink href="/#accueil">Le cirque</NavLink>
                        </NavItem>
                        <NavItem className="mx-4">
                            <Link to="/Tournee">
                                <NavLink>Tournée</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem className="mx-4">
                            <Link to="/contact">
                                <NavLink>Contact</NavLink>
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
