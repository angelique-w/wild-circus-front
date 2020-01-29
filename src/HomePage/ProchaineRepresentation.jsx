import React from "react";
import { Row, Col, Button } from "reactstrap";

function ProchaineRepresentation() {
    return (
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
            <Row className=" bg-secondary flex-row justify-content-center align-items-center w-50">
                <Col>
                    <h1 className="text-center m-5 text-light">
                        Prochaine représentation
                    </h1>
                </Col>
            </Row>
            <Row className=" bg-secondary flex-row justify-content-center align-items-center w-50">
                <Col xs={12} lg={{ size: 4 }}>
                    <h3 className="text-center mb-4 text-light">
                        En ce moment à VILLE
                    </h3>
                    <p className="text-center text-light">Du date au date</p>
                    <hr style={{ width: 200 }} />
                    <p className="text-center text-light"> LIEU</p>
                </Col>
                <Col xs={12} lg={{ size: 4 }}>
                    <h3 className="text-center mb-4 text-light">
                        Prochaine représentation
                    </h3>
                    <p className="text-center text-light">Le date</p>
                    <hr style={{ width: 200 }} />
                    <p className="text-center text-light"> LIEU</p>
                </Col>
            </Row>
            <Row className="bg-secondary flex-row justify-content-center align-items-center w-50 pb-5">
                <Col xs={12} lg={{ size: 4 }}>
                    <div className="text-lg-right text-center my-2">
                        <Button color="primary" size="lg">
                            Réservez vos places
                        </Button>
                    </div>
                </Col>
                <Col xs={12} lg={{ size: 4 }}>
                    <div className="text-lg-left text-center my-2">
                        <Button color="danger" size="lg">
                            Voir toute la tournée
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default ProchaineRepresentation;
