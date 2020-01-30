import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function BoSpectacleTableLign({ spectacle }) {
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
            <td className="text-center">Voir les réservations</td>
        </tr>
    );
}

export default BoSpectacleTableLign;
