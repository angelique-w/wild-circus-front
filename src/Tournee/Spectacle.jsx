import React, { useState } from "react";
import {
    Col,
    Button,
    Collapse,
    CardBody,
    Card,
    Form,
    FormGroup,
    Label,
    Input,
    Alert
} from "reactstrap";
import axios from "axios";

function Spectacle({ spectacle }) {
    const [isOpen, setIsOpen] = useState(false);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [isError, setIsError] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const handleSubmit = () => {
        axios
            .post("http://localhost:8000/users/", {
                firstName: firstname,
                lastName: lastname,
                SpectacleUuid: spectacle.uuid
            })
            .then(res => {
                console.log(res.data);
                axios
                    .put(`http://localhost:8000/spectacles/${spectacle.uuid}`, {
                        placesRestantes: spectacle.placesRestantes - 1
                    })
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
        <div>
            <Col xs={12} lg={6}>
                <h4 className="text-center py-2 mt-5 text-danger">
                    {spectacle.ville}
                </h4>
            </Col>
            <Col xs={12} lg={6}>
                <p className="text-center">{spectacle.date}</p>
            </Col>
            <Col xs={12} lg={6}>
                <p className="text-center pb-2">
                    Places restantes : {spectacle.placesRestantes}
                </p>
            </Col>
            <Col xs={12} lg={6}>
                <div className="text-center">
                    <Button color="info" size="lg" onClick={toggle}>
                        Réservez une place <br />
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
                                                    setLastname(e.target.value)
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
                                                    setFirstname(e.target.value)
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
                                            Je valide la réservation de ma place
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
        </div>
    );
}

export default Spectacle;
