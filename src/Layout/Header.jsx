import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    NavbarText
} from "reactstrap";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Wild Circus</NavbarBrand>
                <NavLink href="">
                    <Button color="primary" size="lg" className="mx-4">
                        Réservez vos places
                    </Button>
                </NavLink>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="">Le cirque</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Tournée</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
