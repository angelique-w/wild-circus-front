import React from "react";
import { Row } from "reactstrap";

import "./homepage.css";

function Accueil() {
    return (
        <Row className="min-vh-100 bg-img-accueil justify-content-center align-items-center">
            <h1 className="text-white fontAccueil">Wild Circus</h1>
        </Row>
    );
}

export default Accueil;
