import React from "react";

import Layout from "../Layout/Layout";
import Accueil from "./Accueil";
import AboutUs from "./AboutUs";

function HomePage() {
    return (
        <Layout>
            <Accueil />
            <AboutUs />
        </Layout>
    );
}

export default HomePage;
