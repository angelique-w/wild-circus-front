import React from "react";
import { Row, Col, Button } from "reactstrap";

function ProchaineRepresentation() {
    return (
        <div className="min-vh-100 d-flex flex-column justify-content-around align-items-center">
            <Row className="flex-row justify-content-center align-items-center w-100">
                <Col>
                    <h1 className="text-center pt-5">
                        Prochaine représentation
                    </h1>
                </Col>
            </Row>
            <Row className="flex-row justify-content-center align-items-center w-100">
                <Col xs={12} lg={{ size: 4 }}>
                    <h3 className="text-center mb-5">En ce moment à VILLE</h3>
                    <p className="text-center">Du date au date</p>
                    <hr style={{ width: 200 }} />
                    <p className="text-center"> LIEU</p>
                </Col>
                <Col xs={12} lg={{ size: 4 }}>
                    <h3 className="text-center mb-5">
                        Prochaine représentation
                    </h3>
                    <p className="text-center">Le date</p>
                    <hr style={{ width: 200 }} />
                    <p className="text-center"> LIEU</p>
                </Col>
            </Row>
            <Row className="flex-row justify-content-center align-items-center w-100">
                <Col xs={12} lg={{ size: 4 }}>
                    <div className="text-lg-right text-center my-2">
                        <Button color="info" size="lg">
                            Réservez vos places
                        </Button>
                    </div>
                </Col>
                <Col xs={12} lg={{ size: 4 }}>
                    <div className="text-lg-left text-center my-2">
                        <Button color="info" size="lg">
                            Voir toute la tournée
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default ProchaineRepresentation;
