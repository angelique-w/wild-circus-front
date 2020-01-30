import React from "react";
import { Col, Button } from "reactstrap";

function Spectacle({ spectacle }) {
    return (
        <div>
            <Col xs={12} lg={3}>
                <h4 className="text-center py-2 mt-5 text-danger">
                    {spectacle.ville}
                </h4>
            </Col>
            <Col xs={12} lg={3}>
                <p className="text-center">{spectacle.date}</p>
            </Col>
            <Col xs={12} lg={3}>
                <p className="text-center pb-2">
                    Places restantes : {spectacle.placesRestantes}
                </p>
            </Col>
            <Col xs={12} lg={3}>
                <div className="text-center">
                    <Button color="info" size="lg">
                        Réservez une place
                    </Button>
                </div>
            </Col>
        </div>
    );
}

export default Spectacle;
