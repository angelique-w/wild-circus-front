import React, { useState } from "react";
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
                <NavbarBrand href="/">Wild Circus</NavbarBrand>
                <NavLink href="">
                    <Button color="primary" size="lg">
                        Réservez vos places
                    </Button>
                </NavLink>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="mx-4">
                            <NavLink href="/#accueil">Le cirque</NavLink>
                        </NavItem>
                        <NavItem className="mx-4">
                            <NavLink href="">Tournée</NavLink>
                        </NavItem>
                        <NavItem className="mx-4">
                            <NavLink href="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
