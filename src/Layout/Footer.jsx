import React from "react";
import { Row, Col } from "reactstrap";

function Footer() {
    return (
        <footer>
            <hr />
            <Row>
                <Col>
                    <h4 className="container-fluid ml-5">Wild Circus</h4>
                </Col>
                <Col>
                    <div className="ml-5">Réalisation : Angélique Wons</div>
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;
