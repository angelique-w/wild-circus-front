import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faPhone,
    faEnvelopeOpen
} from "@fortawesome/free-solid-svg-icons";

import Layout from "../Layout/Layout";
import { Row, Col } from "reactstrap";

function Contact() {
    return (
        <Layout>
            <div
                style={{ paddingTop: 150 }}
                className="min-vh-100 d-flex flex-column justify-content-center align-items-center"
            >
                <Row>
                    <h1>Contactez-nous</h1>
                </Row>
                <Row className="w-100">
                    <Col
                        lg={3}
                        style={{ backgroundColor: "rgb(242, 242, 242, 0.5)" }}
                        className="text-center my-4 mx-auto p-4"
                    >
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="4x" />
                        <h3 className="mt-2">Adresse</h3>
                        <p>
                            27 route de Pitoys <br /> 64600 ANGLET
                        </p>
                    </Col>
                    <Col
                        lg={3}
                        style={{ backgroundColor: "rgb(242, 242, 242, 0.5)" }}
                        className="text-center my-4 mx-auto p-4"
                    >
                        <FontAwesomeIcon icon={faPhone} size="4x" />

                        <h3 className="mt-2">Téléphone</h3>
                        <p>07-06-05-04-03</p>
                    </Col>
                    <Col
                        lg={3}
                        style={{ backgroundColor: "rgb(242, 242, 242, 0.5)" }}
                        className="text-center my-4 mx-auto p-4"
                    >
                        <FontAwesomeIcon icon={faEnvelopeOpen} size="4x" />

                        <h3 className="mt-2">Mail</h3>
                        <p>contact@wildcircus.com</p>
                    </Col>
                </Row>
            </div>
        </Layout>
    );
}

export default Contact;
