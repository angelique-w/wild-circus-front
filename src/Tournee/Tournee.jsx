import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardImg } from "reactstrap";
import { connect } from "react-redux";

import Layout from "../Layout/Layout";
import Spectacle from "./Spectacle";

function Tournee({ spectacles }) {
    return (
        <Layout>
            <div
                style={{ paddingTop: 150 }}
                className="min-vh-100 d-flex flex-column justify-content-center align-items-center"
            >
                <Row className="pb-5">
                    <h1>Tournée</h1>
                </Row>
                <Row className="pb-5">
                    <Col xs={12} className="text-center pb-5">
                        <h2>Le programme</h2>
                    </Col>
                    <Col
                        xs={12}
                        lg={{ size: 3, offset: 3 }}
                        className="text-center pb-3"
                    >
                        <Card style={{ width: "50%", margin: "auto" }}>
                            <CardImg
                                width="100%"
                                src="https://image.freepik.com/vecteurs-libre/affiche-retro-du-festival-du-cirque_1284-18543.jpg"
                                alt="affiche cirque"
                            />
                        </Card>
                        <a href="https://fr.freepik.com/photos-vecteurs-libre/prospectus">
                            Affiche by ...
                        </a>
                    </Col>

                    <Col xs={12} lg={{ size: 3 }} className="text-center pb-5">
                        <div>
                            <p>
                                Le Wild Circus vous propose une moment
                                inoubliable. Venez découvrir tous nos artistes
                                qui ont fait le déplacement pour vous ravir.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="vw-100">
                    <Col xs={12} className="text-center pb-3">
                        <h2>Les dates</h2>
                    </Col>
                    <Col
                        xs={12}
                        lg={{ size: 8, offset: 2 }}
                        className="text-center pb-5"
                    >
                        {spectacles.map(spectacle => {
                            return <Spectacle spectacle={spectacle} />;
                        })}
                    </Col>
                </Row>
            </div>
        </Layout>
    );
}

const mapStateToProps = state => ({
    spectacles: state.spectacles
});

export default connect(mapStateToProps)(Tournee);
