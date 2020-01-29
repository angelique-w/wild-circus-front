import React from "react";
import { Row, Col } from "reactstrap";

function Footer() {
    return (
        <footer>
            <hr />
            <Row>
                <Col xs="6">
                    <h4 className="text-center container-fluid ml-5">
                        Wild Circus
                    </h4>
                </Col>
                <Col xs="6">
                    <div className="text-center ml-5">
                        Réalisation : Angélique Wons
                    </div>
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;
