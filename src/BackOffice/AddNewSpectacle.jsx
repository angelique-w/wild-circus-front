import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
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
import axios from "axios";

function AddNewSpectacle() {
    const [isOpen, setIsOpen] = useState(false);
    const [ville, setVille] = useState("");
    const [dateSpec, setDateSpec] = useState("");
    const [adresse, setAdresse] = useState("");
    const [places, setPlaces] = useState("");

    const toggle = () => setIsOpen(!isOpen);

    const handleSubmit = () => {
        axios
            .post("http://localhost:8000/spectacles/", {
                ville: ville,
                date: dateSpec,
                adresse: adresse,
                placesTotales: places,
                placesRestantes: places
            })
            .then(res => {
                console.log(res.data);
                setVille("");
                setDateSpec("");
                setAdresse("");
                setPlaces("");
                setIsOpen(false);
            })
            .catch(err => {
                console.log(err.message);
            });
    };

    return (
        <>
            <Col xs={12} className="text-center mb-3">
                <FontAwesomeIcon
                    icon={faPlus}
                    style={{ cursor: "pointer" }}
                    size={"4x"}
                    onClick={toggle}
                />
            </Col>
            <Col xs={12} className="text-center">
                <p>Ajouter un nouveau spectacle</p>
            </Col>
            <Col xs={12} className="text-center mb-3">
                <Collapse isOpen={isOpen} className="mt-3">
                    <Card>
                        <CardBody>
                            <Form>
                                <FormGroup row>
                                    <Label for="ville" sm={2}>
                                        Ville
                                    </Label>
                                    <Col sm={10}>
                                        <Input
                                            type="input"
                                            name="ville"
                                            id="ville"
                                            onChange={e =>
                                                setVille(e.target.value)
                                            }
                                            required
                                            value={ville}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="date" sm={2}>
                                        Date
                                    </Label>
                                    <Col sm={10}>
                                        <Input
                                            type="date"
                                            name="date"
                                            id="date"
                                            onChange={e =>
                                                setDateSpec(e.target.value)
                                            }
                                            required
                                            value={dateSpec}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="adresse" sm={2}>
                                        Adresse
                                    </Label>
                                    <Col sm={10}>
                                        <Input
                                            type="input"
                                            name="adresse"
                                            id="adresse"
                                            onChange={e =>
                                                setAdresse(e.target.value)
                                            }
                                            required
                                            value={adresse}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="placestotales" sm={2}>
                                        Nombre de places
                                    </Label>
                                    <Col sm={10}>
                                        <Input
                                            type="number"
                                            name="placestotales"
                                            id="placestotales"
                                            onChange={e =>
                                                setPlaces(e.target.value)
                                            }
                                            required
                                            value={places}
                                        />
                                    </Col>
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
            </Col>
        </>
    );
}

export default AddNewSpectacle;
