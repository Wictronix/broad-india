import React from "react";
import {
    Card,
    Container,
    ListGroup,
    Row,
    Col,
    Tab,
    Nav,
} from "react-bootstrap";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";

export default function About() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <NavbarComp />
            <div
                style={{
                    width: "100%",
                    height: "75vh",
                    backgroundImage:
                        "url('https://broadusa.com/broad/wp-content/uploads/2020/03/hackensack.jpg')",
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
                        About
                    </div>
                </div>
            </div>
            {/* <Container
                style={{
                    marginBlock: "5rem",
                }}
            >
                <p style={{ fontSize: "1.2rem" }}>
                    BROAD U.S.A. is a privately held company headquartered in
                    New Jersey, supporting the sales and service to our
                    customers in North America. Relying on our innovative and
                    environmental-friendly technology, BROAD U.S.A commits
                    itself to optimize energy efficiency for clients in
                    Commercial, Civil and Industrial markets.
                </p>
                <div style={{ display: "flex", marginTop: "5rem" }}>
                    <div style={{ flex: 1 }}>
                        <Card>
                            <Card.Header>About</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item action active>
                                    BROAD Town
                                </ListGroup.Item>
                                <ListGroup.Item action>
                                    Our Culture
                                </ListGroup.Item>
                                <ListGroup.Item action>
                                    Core Values
                                </ListGroup.Item>
                                <ListGroup.Item action>FAQ</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                    <div style={{ flex: 3, marginLeft: "2rem" }}>
                        <h4>BROAD Town</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsam, voluptate, dolorum provident id
                            nesciunt ipsa iure quis repellendus aperiam sed
                            voluptates velit ea doloremque sapiente officiis
                            unde quia. Ex laudantium rem illo laborum, quidem,
                            culpa porro cumque neque et, ea labore ad atque
                            rerum id tempora similique assumenda hic animi!
                        </p>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsam, voluptate, dolorum provident id
                            nesciunt ipsa iure quis repellendus aperiam sed
                            voluptates velit ea doloremque sapiente officiis
                            unde quia.
                        </p>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsam, voluptate, dolorum provident id
                            nesciunt ipsa iure quis repellendus aperiam sed
                            voluptates velit ea doloremque sapiente officiis
                            unde quia. Ex laudantium rem illo laborum, quidem,
                            culpa porro cumque neque et, ea labore ad atque
                            rerum id tempora similique assumenda hic animi!
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsam, voluptate, dolorum provident id
                            nesciunt ipsa iure quis repellendus aperiam sed
                            voluptates velit ea doloremque sapiente officiis
                            unde quia. Ex laudantium rem illo laborum, quidem,
                            culpa porro cumque neque et, ea labore ad atque
                            rerum id tempora similique assumenda hic animi!
                        </p>
                        <br />
                    </div>
                </div>
            </Container> */}
            <Container
                style={{
                    marginBlock: "5rem",
                }}
            >
                <p style={{ fontSize: "1.2rem", marginBottom: "5rem" }}>
                    BROAD U.S.A. is a privately held company headquartered in
                    New Jersey, supporting the sales and service to our
                    customers in North America. Relying on our innovative and
                    environmental-friendly technology, BROAD U.S.A commits
                    itself to optimize energy efficiency for clients in
                    Commercial, Civil and Industrial markets.
                </p>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">About</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        Our Culture
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Our Values
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <h3>About Broad India</h3>
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Debitis, aut unde et
                                    officia nisi quibusdam ex illum consequatur
                                    similique magni. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Debitis, aut
                                    unde et officia nisi quibusdam ex illum
                                    consequatur similique magni. Lorem ipsum
                                    dolor sit amet consectetur adipisicing elit.
                                    Debitis, aut unde et officia nisi quibusdam
                                    ex illum consequatur similique magni. Lorem
                                    ipsum dolor sit amet consectetur adipisicing
                                    elit. Debitis, aut unde et officia nisi
                                    quibusdam ex illum consequatur similique
                                    magni.
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <h3>Our Culture</h3>
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Debitis, aut unde et
                                    officia nisi quibusdam ex illum consequatur
                                    similique magni. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Debitis, aut
                                    unde et officia nisi quibusdam ex illum
                                    consequatur similique magni. Lorem ipsum
                                    dolor sit amet consectetur adipisicing elit.
                                    Debitis, aut unde et officia nisi quibusdam
                                    ex illum consequatur similique magni. Lorem
                                    ipsum dolor sit amet consectetur adipisicing
                                    elit. Debitis, aut unde et officia nisi
                                    quibusdam ex illum consequatur similique
                                    magni.
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <h3>Our Values</h3>
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Debitis, aut unde et
                                    officia nisi quibusdam ex illum consequatur
                                    similique magni. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Debitis, aut
                                    unde et officia nisi quibusdam ex illum
                                    consequatur similique magni. Lorem ipsum
                                    dolor sit amet consectetur adipisicing elit.
                                    Debitis, aut unde et officia nisi quibusdam
                                    ex illum consequatur similique magni. Lorem
                                    ipsum dolor sit amet consectetur adipisicing
                                    elit. Debitis, aut unde et officia nisi
                                    quibusdam ex illum consequatur similique
                                    magni.
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
            <Footer />
        </div>
    );
}
