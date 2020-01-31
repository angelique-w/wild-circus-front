import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { setSpectacles } from "../reducers/actions";

function BoSpectacleTableLign({ spectacle, buttonLabel, className }) {
    const [modal, setModal] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(spectacle.Users);
    }, []);

    const deleteASpectacle = () => {
        console.log("delete ok");
        axios
            .delete(`http://localhost:8000/spectacles/${spectacle.uuid}`)
            .then(res => {
                console.log(res);
                // fetchSpectacles();
            })
            .catch(err => {
                console.log(err.message);
                throw err;
            });
    };

    const toggle = () => {
        setModal(!modal);
    };

    return (
        <tr>
            <th scope="row" className="text-center">
                {spectacle.ville}
            </th>
            <td className="text-center">{spectacle.date}</td>
            <td className="text-center">{spectacle.adresse}</td>
            <td className="text-center">{spectacle.placesTotales}</td>
            <td className="text-center">{spectacle.placesRestantes}</td>
            <td className="text-center">
                <FontAwesomeIcon icon={faEdit} style={{ cursor: "pointer" }} />
            </td>
            <td className="text-center">
                <FontAwesomeIcon
                    icon={faTrashAlt}
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteASpectacle()}
                />
            </td>
            <td className="text-center">
                <span style={{ cursor: "pointer" }} onClick={toggle}>
                    Voir les réservations
                </span>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>
                        Réservations - Spectacle de {spectacle.ville} le{" "}
                        {spectacle.date}
                    </ModalHeader>
                    <ModalBody>
                        <Table responsive striped>
                            <thead>
                                <tr>
                                    <th>Prénom</th>
                                    <th>Nom</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users[0] ? (
                                    <>
                                        {users.map(user => {
                                            return (
                                                <tr>
                                                    <th
                                                        scope="row"
                                                        className="text-center"
                                                    >
                                                        {user.firstName}
                                                    </th>
                                                    <td className="text-center">
                                                        {user.lastName}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </>
                                ) : (
                                    <p className="text-center mt-4">
                                        Aucune réservation pour ce spectacle
                                    </p>
                                )}
                            </tbody>
                        </Table>
                    </ModalBody>
                </Modal>
            </td>
        </tr>
    );
}

export default BoSpectacleTableLign;
