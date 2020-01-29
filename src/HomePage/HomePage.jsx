import React from "react";

import Layout from "../Layout/Layout";
import Accueil from "./Accueil";
import AboutUs from "./AboutUs";
import ProchaineRepresentation from "./ProchaineRepresentation";

function HomePage() {
    return (
        <Layout>
            <Accueil />
            <ProchaineRepresentation />
            <AboutUs />
        </Layout>
    );
}

export default HomePage;
