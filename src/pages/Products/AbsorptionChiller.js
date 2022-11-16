import React from "react";
import { Container, Tab, Row, Col, Nav, Card } from "react-bootstrap";
import Footer from "../../components/Footer";
import NavbarComp from "../../components/NavbarComp";

export default function AbsorptionChiller() {
  const [isMobile, setIsMobile] = React.useState(true);
  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
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
            "url('https://broadusa.com/broad/wp-content/uploads/2020/04/broadusa-products.jpg')",
          backgroundOrigin: "center",
          backgroundSize: "cover",
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
              left: isMobile ? "-1rem" : "5rem",
              margin: isMobile ? "2rem" : "5rem",
              fontWeight: "700",
            }}
          >
            Absorption Chillers
          </div>
        </div>
      </div>
      <div style={{ paddingBlock: "2rem", backgroundColor: "#ccc" }}>
        <Container>
          <p style={{ fontSize: "1.2rem" }}>
            <strong>Absorption Chillers</strong> are Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dicta qui quae perspiciatis dolore
            omnis voluptatum atque assumenda ratione nisi velit.
          </p>
        </Container>
      </div>
      <Container style={{ marginBlock: "5rem" }}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="twoStage">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="twoStage">Two Stage</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="singleStage">Single State</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Multi Energy</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Package Chillers</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="twoStage">
                  <h2 className="mb-4">Two Stage</h2>
                  <Row className="mb-4">
                    <Col md={10}>
                      <Card>
                        <Card.Header>BZ Model, Hot Water Driven </Card.Header>
                        <Card.Body className="d-flex">
                          <img
                            src="https://broadusa.com/broad/wp-content/uploads/2020/03/bzmodel-300x222-1-200x148.jpg"
                            alt="bzmodel"
                            style={{
                              objectFit: "contain",
                            }}
                          />
                          <Card.Text
                            style={{
                              fontSize: "1rem",
                              marginInline: "2rem",
                              color: "#666",
                            }}
                          >
                            <div
                              style={{
                                fontWeight: "600",
                                fontSize: "1.2rem",
                                color: "#444",
                                marginLeft: "0.6rem",
                                marginBottom: "0.8rem",
                              }}
                            >
                              Features
                            </div>
                            <ul>
                              <li>Capacity: 30-3300 ton</li>
                              <li>Gas Pressure: 2.3-7.3 Psi (Standard)</li>
                              <li>
                                Dual Fuel Burner (Gas and Oil, Low NOx,
                                &lt;10ppm)
                              </li>
                              <li>Cooling / Heating / Domestic Hot Water</li>
                            </ul>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col md={10}>
                      <Card>
                        <Card.Header>BS Model, Steam Driven</Card.Header>
                        <Card.Body className="d-flex">
                          <img
                            src="https://broadusa.com/broad/wp-content/uploads/2020/03/bsmodel-300x189-1-200x126.jpg"
                            alt="bzmodel"
                            style={{
                              objectFit: "contain",
                            }}
                          />
                          <Card.Text
                            style={{
                              fontSize: "1rem",
                              marginInline: "2rem",
                              color: "#666",
                            }}
                          >
                            <div
                              style={{
                                fontWeight: "600",
                                fontSize: "1.2rem",
                                color: "#444",
                                marginLeft: "0.6rem",
                                marginBottom: "0.8rem",
                              }}
                            >
                              Features
                            </div>
                            <ul>
                              <li>Capacity: 30-3300 ton</li>
                              <li>Gas Pressure: 2.3-7.3 Psi (Standard)</li>
                              <li>
                                Dual Fuel Burner (Gas and Oil, Low NOx,
                                &lt;10ppm)
                              </li>
                              <li>Cooling / Heating / Domestic Hot Water</li>
                            </ul>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col md={10}>
                      <Card>
                        <Card.Header>BE Model, Exhaust Driven</Card.Header>
                        <Card.Body className="d-flex">
                          <img
                            src="https://broadusa.com/broad/wp-content/uploads/2020/03/bemodel-300x202-1-200x135.png"
                            alt="bzmodel"
                            style={{
                              objectFit: "contain",
                            }}
                          />
                          <Card.Text
                            style={{
                              fontSize: "1rem",
                              marginInline: "2rem",
                              color: "#666",
                            }}
                          >
                            <div
                              style={{
                                fontWeight: "600",
                                fontSize: "1.2rem",
                                color: "#444",
                                marginLeft: "0.6rem",
                                marginBottom: "0.8rem",
                              }}
                            >
                              Features
                            </div>
                            <ul>
                              <li>Capacity: 30-3300 ton</li>
                              <li>Gas Pressure: 2.3-7.3 Psi (Standard)</li>
                              <li>
                                Dual Fuel Burner (Gas and Oil, Low NOx,
                                &lt;10ppm)
                              </li>
                              <li>Cooling / Heating / Domestic Hot Water</li>
                            </ul>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col md={10}>
                      <Card>
                        <Card.Header>BH Model, Hot Water Driven </Card.Header>
                        <Card.Body className="d-flex">
                          <img
                            src="https://broadusa.com/broad/wp-content/uploads/2020/03/BH-Model.jpg"
                            alt="bzmodel"
                            style={{
                              objectFit: "contain",
                            }}
                          />
                          <Card.Text
                            style={{
                              fontSize: "1rem",
                              marginInline: "2rem",
                              color: "#666",
                            }}
                          >
                            <div
                              style={{
                                fontWeight: "600",
                                fontSize: "1.2rem",
                                color: "#444",
                                marginLeft: "0.6rem",
                                marginBottom: "0.8rem",
                              }}
                            >
                              Features
                            </div>
                            <ul>
                              <li>Capacity: 30-3300 ton</li>
                              <li>Gas Pressure: 2.3-7.3 Psi (Standard)</li>
                              <li>
                                Dual Fuel Burner (Gas and Oil, Low NOx,
                                &lt;10ppm)
                              </li>
                              <li>Cooling / Heating / Domestic Hot Water</li>
                            </ul>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="singleStage">
                  <h2 className="mb-4">Single Stage</h2>
                  <Row className="mb-4">
                    <Col md={10}>
                      <Card>
                        <Card.Header>
                          BDH Model, Single Stage Hot Water Driven{" "}
                        </Card.Header>
                        <Card.Body className="d-flex">
                          <img
                            src="https://broadusa.com/broad/wp-content/uploads/2020/03/single-stage-300x157-1-200x105.png"
                            alt="bdhmodel"
                            style={{
                              objectFit: "contain",
                            }}
                          />
                          <Card.Text
                            style={{
                              fontSize: "1rem",
                              marginInline: "2rem",
                              color: "#666",
                            }}
                          >
                            <div
                              style={{
                                fontWeight: "600",
                                fontSize: "1.2rem",
                                color: "#444",
                                marginLeft: "0.6rem",
                                marginBottom: "0.8rem",
                              }}
                            >
                              Features
                            </div>
                            <ul>
                              <li>Capacity: 30-1800 ton</li>
                              <li>
                                Hot Water Temperature: 160-220 F (Standard)
                              </li>
                              <li>Hot water Valve</li>
                              <li>Cooling only</li>
                            </ul>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col md={10}>
                      <Card>
                        <Card.Header>
                          BDE Model, Single Stage Exhaust Drivenn
                        </Card.Header>
                        <Card.Body className="d-flex">
                          <img
                            src="https://broadusa.com/broad/wp-content/uploads/2020/03/bde_s-300x252-1-200x168.jpg"
                            alt="bdemodel"
                            style={{
                              objectFit: "contain",
                            }}
                          />
                          <Card.Text
                            style={{
                              fontSize: "1rem",
                              marginInline: "2rem",
                              color: "#666",
                            }}
                          >
                            <div
                              style={{
                                fontWeight: "600",
                                fontSize: "1.2rem",
                                color: "#444",
                                marginLeft: "0.6rem",
                                marginBottom: "0.8rem",
                              }}
                            >
                              Features
                            </div>
                            <ul>
                              <li>Capacity:30-1163 ton</li>
                              <li>Exhaust Temperature: 450 - 600 F</li>
                              <li>Cooling only</li>
                            </ul>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col md={10}>
                      <Card>
                        <Card.Header>
                          BDS Model, Single Stage Steam Driven
                        </Card.Header>
                        <Card.Body className="d-flex">
                          <img
                            src="https://broadusa.com/broad/wp-content/uploads/2020/03/BDS-model.jpg"
                            alt="bdsmodel"
                            style={{
                              objectFit: "contain",
                            }}
                          />
                          <Card.Text
                            style={{
                              fontSize: "1rem",
                              marginInline: "2rem",
                              color: "#666",
                            }}
                          >
                            <div
                              style={{
                                fontWeight: "600",
                                fontSize: "1.2rem",
                                color: "#444",
                                marginLeft: "0.6rem",
                                marginBottom: "0.8rem",
                              }}
                            >
                              Features
                            </div>
                            <ul>
                              <li>Capacity: 30-2000 ton</li>
                              <li>Steam Pressure: 6.0-60 Psi (Standard)</li>
                              <li>Offer Steam Valve</li>
                              <li>Cooling only</li>
                            </ul>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
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
