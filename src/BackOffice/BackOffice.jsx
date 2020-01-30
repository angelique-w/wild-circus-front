import React, { useState, useEffect } from "react";
import { Row, Table } from "reactstrap";
import { connect } from "react-redux";
import axios from "axios";
import { orderBy } from "lodash";

import { setSpectacles } from "../reducers/actions";
import Layout from "../Layout/Layout";
import BoSpectacleTableLign from "./BoSpectacleTableLign";

function BackOffice({ spectacles, setSpectacles }) {
    const [spectaclesHooks, setSpectaclesHooks] = useState([]);

    const fetchSpectacles = () => {
        axios
            .get("http://localhost:8000/spectacles/")
            .then(res => {
                const datas = res.data;
                const orderedSpectacles = orderBy(datas, ["date"], "asc");
                setSpectaclesHooks(orderedSpectacles);
                setSpectacles(orderedSpectacles);
                setTimeout(() => {
                    fetchSpectacles();
                }, 1000);
            })
            .catch(err => {
                console.log(err.message);
                throw err;
            });
    };

    useEffect(() => {
        fetchSpectacles();
    }, []);

    // useEffect(() => {
    //     fetchSpectacles();
    // }, [spectacles]);

    return (
        <Layout>
            <div
                style={{ paddingTop: 150 }}
                className="min-vh-100 d-flex flex-column justify-content-center align-items-center"
            >
                <Row>
                    <h1 style={{ paddingBottom: 90 }}>
                        Programmation des spectacles
                    </h1>
                </Row>
                <Row>
                    <Table responsive striped>
                        <thead>
                            <tr>
                                <th>Lieu</th>
                                <th>Date</th>
                                <th>Adresse</th>
                                <th>Places Totales</th>
                                <th>Places Restantes</th>
                                <th>Modifier</th>
                                <th>Supprimer</th>
                                <th>Réservations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {spectacles &&
                                spectacles.map(spectacle => {
                                    return (
                                        <BoSpectacleTableLign
                                            spectacle={spectacle}
                                        />
                                    );
                                })}
                        </tbody>
                    </Table>
                </Row>
            </div>
        </Layout>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        setSpectacles: spectacles => dispatch(setSpectacles(spectacles))
    };
};

const mapStateToProps = state => ({
    spectacles: state.spectacles
});

export default connect(mapStateToProps, mapDispatchToProps)(BackOffice);
