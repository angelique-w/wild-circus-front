import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Row,
    Col,
    Button,
    Collapse,
    CardBody,
    Card,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import axios from "axios";
import { orderBy } from "lodash";

import { setSpectacles } from "../reducers/actions";

function ProchaineRepresentation({ setSpectacles }) {
    const [isOpen, setIsOpen] = useState(false);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [isError, setIsError] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [spectaclesHooks, setSpectaclesHooks] = useState([]);

    const [nextSpectacle, setNextSpectacle] = useState({});

    useEffect(() => {
        axios
            .get("http://localhost:8000/spectacles/")
            .then(res => {
                const datas = res.data;
                console.log(res.data);
                const orderedSpectacles = orderBy(datas, ["date"], "asc");
                setSpectaclesHooks(orderedSpectacles);
                setSpectacles(orderedSpectacles);
                setNextSpectacle(orderedSpectacles[0]);
            })
            .catch(err => {
                console.log(err.message);
                throw err;
            });
    }, []);

    const toggle = () => setIsOpen(!isOpen);

    const handleSubmit = () => {
        axios
            .post("http://localhost:8000/users/", {
                firstName: firstname,
                lastName: lastname,
                SpectacleUuid: nextSpectacle.uuid
            })
            .then(res => {
                console.log(res.data);
                axios
                    .put(
                        `http://localhost:8000/spectacles/${nextSpectacle.uuid}`,
                        {
                            placesRestantes: nextSpectacle.placesRestantes - 1
                        }
                    )
                    .then(res => {
                        console.log(res.data);
                        setIsSubmit(true);
                        setFirstname("");
                        setLastname("");
                        setIsOpen(false);
                    })
                    .catch(err => {
                        console.log(err.message);
                        setIsError(true);
                    });
            })
            .catch(err => {
                console.log(err.message);
                setIsError(true);
            });
    };

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
                <Col xs={12} lg={{ size: 4 }} className="text-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="4x" />
                    <h3 className="text-center my-4 ">
                        En ce moment à {nextSpectacle && nextSpectacle.ville}
                    </h3>
                    <hr style={{ width: 200 }} />
                    <p className="text-center ">
                        {" "}
                        {nextSpectacle && nextSpectacle.adresse}
                    </p>
                </Col>
                <Col xs={12} lg={{ size: 4 }} className="text-center">
                    <FontAwesomeIcon icon={faClock} size="4x" />
                    <h3 className="text-center my-4 ">
                        Prochaine représentation
                    </h3>
                    <p className="text-center ">
                        Le {nextSpectacle && nextSpectacle.date}
                    </p>
                    <hr style={{ width: 200 }} />
                    <p className="text-center ">
                        {" "}
                        {nextSpectacle && nextSpectacle.adresse}
                    </p>
                    <p className="text-center pb-2">
                        Places restantes :{" "}
                        {nextSpectacle && nextSpectacle.placesRestantes}
                    </p>
                </Col>
            </Row>
            <Row
                style={{ backgroundColor: "rgb(242, 242, 242, 0.5)" }}
                className="flex-row justify-content-center align-items-center w-75 pb-5"
            >
                <Col xs={12} lg={{ size: 4 }}>
                    <div className="text-lg-right text-center my-2">
                        <Button color="primary" size="lg" onClick={toggle}>
                            Réservez une place
                            <br />
                            pour ce spectacle
                        </Button>
                        <Collapse isOpen={isOpen} className="mt-3">
                            <Card>
                                <CardBody>
                                    <Form>
                                        <FormGroup row>
                                            <Label for="exampleEmail" sm={2}>
                                                Nom
                                            </Label>
                                            <Col sm={10}>
                                                <Input
                                                    type="input"
                                                    name="nom"
                                                    id="nom"
                                                    placeholder="Saisissez votre Nom"
                                                    onChange={e =>
                                                        setLastname(
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                    value={lastname}
                                                />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="examplePassword" sm={2}>
                                                Prénom
                                            </Label>
                                            <Col sm={10}>
                                                <Input
                                                    type="input"
                                                    name="prenom"
                                                    id="prenom"
                                                    placeholder="Saisissez votre Prénom"
                                                    onChange={e =>
                                                        setFirstname(
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                    value={firstname}
                                                />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup check className="pb-5">
                                            <Label check>
                                                {firstname && lastname ? (
                                                    <Input
                                                        type="checkbox"
                                                        id="checkSecurite"
                                                    />
                                                ) : (
                                                    <Input
                                                        type="checkbox"
                                                        id="checkSecurite"
                                                        disabled
                                                    />
                                                )}
                                                Je valide la réservation de ma
                                                place
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check row>
                                            <Button
                                                color="primary"
                                                onClick={handleSubmit}
                                            >
                                                Submit
                                            </Button>
                                        </FormGroup>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Collapse>
                    </div>
                </Col>
                <Col xs={12} lg={{ size: 4 }}>
                    <div className="text-lg-left text-center my-2">
                        <Link to="/Tournee">
                            <Button color="danger" size="lg">
                                Voir toute la tournée
                            </Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        setSpectacles: spectacles => dispatch(setSpectacles(spectacles))
    };
};

// const mapStateToProps = state => ({
//     spectacles: state.spectacles
// });

export default connect(null, mapDispatchToProps)(ProchaineRepresentation);
