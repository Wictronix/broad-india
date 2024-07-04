import React from 'react';
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";

const NotFound = () => (
    <div>
        <NavbarComp />
        <div style={{
            textAlign: "center",
            marginTop: "10rem",
            height: "30rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // color: "red"
        }}>
            <h1>404</h1>
            <h3>Page Not Found</h3>
            <h4>(The page you are looking for does not exist.)</h4>
        </div>
        <Footer />
    </div>
);

export default NotFound;
