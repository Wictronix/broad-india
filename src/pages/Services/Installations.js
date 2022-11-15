import React from "react";
import { Container, Tab, Row, Col, Nav, Card, Tabs } from "react-bootstrap";
import Footer from "../../components/Footer";
import NavbarComp from "../../components/NavbarComp";

export default function Installations() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <NavbarComp />
            <div
                style={{
                    width: "100%",
                    height: "72vh",
                    backgroundImage:
                        "url('https://broadusa.com/broad/wp-content/uploads/2020/04/instllation.jpg')",
                    backgroundSize: "cover",
                    backgroundOrigin: "center",
                    backgroundAttachment: "fixed",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        color: "white",
                        position: "relative",
                    }}
                >
                    <div
                        className="display-2"
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: "5rem",
                            margin: "5rem",
                            fontWeight: "700",
                        }}
                        data-aos="fade-up"
                    >
                        Installations
                    </div>
                </div>
            </div>
            <div style={{ paddingBlock: "2rem", backgroundColor: "#ccc" }}>
                <Container data-aos="fade-up">
                    <p style={{ fontSize: "1.6rem" }}>
                        We have Strategy for{" "}
                        <strong>Doing Things Right.</strong>
                    </p>
                </Container>
            </div>
            <Container style={{ marginBlock: "5rem" }}>
                <Tabs activeKey={"All"}>
                    <Tab eventKey="All" title="All">
                        <div className="row" style={{ margin: "2rem 1rem" }}>
                            <div className="col-md-4">
                                <div
                                    className="card"
                                    style={{
                                        height: "28rem",
                                        backgroundImage:
                                            "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6)), url('https://broadusa.com/broad/wp-content/uploads/2020/04/portfilio_mgm_features-400x400.jpg')",
                                        backgroundSize: "cover",
                                        position: "relative",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "absolute",
                                            bottom: "1rem",
                                            left: "2rem",
                                            fontSize: "2rem",
                                            color: "white",
                                        }}
                                    >
                                        MGM National Harbor
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div
                                    className="card"
                                    style={{
                                        height: "28rem",
                                        backgroundImage:
                                            "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6)), url('https://broadusa.com/broad/wp-content/uploads/2020/04/portfilio-Central-Valley-Water-Reclamation-Facility-_feature-pic.jpg')",
                                        backgroundSize: "cover",
                                        position: "relative",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "absolute",
                                            bottom: "1rem",
                                            left: "2rem",
                                            fontSize: "2rem",
                                            color: "white",
                                        }}
                                    >
                                        Central Valley Water Reclamation
                                        Facility
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div
                                    className="card"
                                    style={{
                                        height: "28rem",
                                        backgroundImage:
                                            "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6)), url('https://broadusa.com/broad/wp-content/uploads/2020/04/prtofilio-whole-food2.jpg')",
                                        backgroundSize: "cover",
                                        position: "relative",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "absolute",
                                            bottom: "1rem",
                                            left: "2rem",
                                            fontSize: "2rem",
                                            color: "white",
                                        }}
                                    >
                                        Whole Foods
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ margin: "2rem 1rem" }}>
                            <div className="col-md-4">
                                <div
                                    className="card"
                                    style={{
                                        height: "28rem",
                                        backgroundImage:
                                            "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6)), url('https://broadusa.com/broad/wp-content/uploads/2020/04/prtofilio-New-Starwood-Resort-400x400.jpg')",
                                        backgroundSize: "cover",
                                        position: "relative",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "absolute",
                                            bottom: "1rem",
                                            left: "2rem",
                                            fontSize: "2rem",
                                            color: "white",
                                        }}
                                    >
                                        New Starwood Resort
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div
                                    className="card"
                                    style={{
                                        height: "28rem",
                                        backgroundImage:
                                            "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6)), url('https://broadusa.com/broad/wp-content/uploads/2020/04/portfilio-ucsd-feature-400x400.jpg')",
                                        backgroundSize: "cover",
                                        position: "relative",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "absolute",
                                            bottom: "1rem",
                                            left: "2rem",
                                            fontSize: "2rem",
                                            color: "white",
                                        }}
                                    >
                                        UC San Diego
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div
                                    className="card"
                                    style={{
                                        height: "28rem",
                                        backgroundImage:
                                            "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6)), url('https://broadusa.com/broad/wp-content/uploads/2020/04/protfolio-john-waye-airport-400x400.jpg')",
                                        backgroundSize: "cover",
                                        position: "relative",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "absolute",
                                            bottom: "1rem",
                                            left: "2rem",
                                            fontSize: "2rem",
                                            color: "white",
                                        }}
                                    >
                                        John Wayne Airport
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="Airports" title="Airports"></Tab>
                    <Tab eventKey="Casino" title="Casino"></Tab>
                </Tabs>
            </Container>
            <Footer />
        </div>
    );
}
