import React from "react";
import { Row, Col, Button } from "reactstrap";

function ProchaineRepresentation() {
    return (
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
            <Row
                style={{ backgroundColor: "rgb(242, 242, 242, 0.5)" }}
                className="flex-row justify-content-center align-items-center w-75"
            >
                <Col>
                    <h1 className="text-center m-5 ">
                        Prochaine représentation
                    </h1>
                </Col>
            </Row>
            <Row
                style={{ backgroundColor: "rgb(242, 242, 242, 0.5)" }}
                className=" flex-row justify-content-center align-items-center w-75"
            >
                <Col xs={12} lg={{ size: 4 }}>
                    <h3 className="text-center mb-4 ">En ce moment à VILLE</h3>
                    <p className="text-center ">Du date au date</p>
                    <hr style={{ width: 200 }} />
                    <p className="text-center "> LIEU</p>
                </Col>
                <Col xs={12} lg={{ size: 4 }}>
                    <h3 className="text-center mb-4 ">
                        Prochaine représentation
                    </h3>
                    <p className="text-center ">Le date</p>
                    <hr style={{ width: 200 }} />
                    <p className="text-center "> LIEU</p>
                </Col>
            </Row>
            <Row
                style={{ backgroundColor: "rgb(242, 242, 242, 0.5)" }}
                className="flex-row justify-content-center align-items-center w-75 pb-5"
            >
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
