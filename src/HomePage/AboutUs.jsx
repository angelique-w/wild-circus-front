import React from "react";
import { Row, Col } from "reactstrap";

function AboutUs() {
    return (
        <div className="min-vh-100 d-flex flex-column justify-content-around align-items-center">
            <Row className="flex-row justify-content-center align-items-center w-100">
                <Col>
                    <h1 className="text-center pt-5">
                        Découvrez le Wild Circus
                    </h1>
                </Col>
            </Row>
            <Row className="flex-row justify-content-center align-items-center w-100">
                <Col xs={12} lg={{ size: 4 }}>
                    <h2 className="text-center mb-5">Notre histoire</h2>
                    <p className="text-center">
                        Anna Wild a créé le Wild Circus en 2014. La première
                        représentation s'est déroulée à Paris et aujourd'hui le
                        cirque se produit dans plus de 19 villes d'Europe.
                    </p>
                </Col>
                <Col xs={12} lg={{ size: 4, offset: 1 }}>
                    <h2 className="text-center mb-5">Nos ambitions</h2>
                    <p className="text-center">
                        Nous souhaiton transmettre notre passion et notre
                        savoir-faire. Nous avons donc créé notre propre école
                        formant chaque jour de nouveaux gitClown.
                    </p>
                </Col>
            </Row>
        </div>
    );
}

export default AboutUs;
