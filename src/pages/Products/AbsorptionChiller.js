import React from "react";
import { Container, Tab, Row, Col, Nav, Card } from "react-bootstrap";
import ContactForm from "../../components/ContactForm";
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
            Better <strong>Absorption Chillers</strong> for a better world.
          </p>
        </Container>
      </div>
      <Container style={{ marginBlock: "5rem" }}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="twoStage">
          <Row>
            <Col sm={3}>
              <div
                style={{
                  backgroundColor: "rgba(0, 110, 253, 0.2)",
                  borderRadius: "0.5rem",
                }}
              >
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="twoStage">Two Stage</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="singleStage">Single State</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="multiEnergy">Multi Energy</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="packageChillers">
                      Package Chillers
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="solarDriven">Solar Driven</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
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
                            as="div"
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
                            as="div"
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
                            as="div"
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
                            as="div"
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
                            as="div"
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
                            as="div"
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
                            as="div"
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

                <Tab.Pane eventKey="multiEnergy">
                  <h2 className="mb-4">Multi Energy</h2>
                  <Row className="mb-4">
                    <Col md={10}>
                      <Card>
                        <Card.Header>
                          BZE Model, Exhaust and Direct Fired
                        </Card.Header>
                        <Card.Body className="d-flex">
                          <img
                            src="https://broadusa.com/broad/wp-content/uploads/2020/03/bze-300x201-1-200x134.jpg"
                            alt="bzemodel"
                            style={{
                              objectFit: "contain",
                            }}
                          />
                          <Card.Text
                            as="div"
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
                              <li>Capacity: 30-300 ton</li>
                              Gas Pressure: 2.3-7.3 Psi (Standard)
                              <li>
                                Dual Fuel Burner (Gas and Oil, Low NOx, &lt;
                                10ppm)
                              </li>
                              <li>Exhaust Pressure Drop : 3 - 8 Inch W.C.</li>
                              <li>Exhaust Temperature: 560-990 F</li>
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
                        <Card.Header>
                          BHE Model, Hot (Jacket) Water and Exhaust
                        </Card.Header>
                        <Card.Body className="d-flex">
                          <img
                            src="https://broadusa.com/broad/wp-content/uploads/2020/03/bhe-300x203-1-200x135.png"
                            alt="bdemodel"
                            style={{
                              objectFit: "contain",
                            }}
                          />
                          <Card.Text
                            as="div"
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
                              <li>
                                Hot Water Temperature: 160-220 F (Standard)
                              </li>
                              <li>Exhaust Pressure Drop: 3 - 8 Inch W.C.</li>
                              <li>Exhaust Temperature: 580-1200 F</li>
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
                          BZHE Model, Hot (Jacket) Water and Exhaust + Direct
                          Gas Fire
                        </Card.Header>
                        <Card.Body className="d-flex">
                          <img
                            src="https://broadusa.com/broad/wp-content/uploads/2020/03/bzhe1_s-300x204-1-200x136.jpg"
                            alt="bzhemodel"
                            style={{
                              objectFit: "contain",
                            }}
                          />
                          <Card.Text
                            as="div"
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
                                Dual Fuel Burner (Gas and Oil, Low NOx, &lt;
                                10ppm)
                              </li>
                              <li>Exhaust Pressure Drop : 3 - 8 Inch W.C.</li>
                              <li>Exhaust Temperature: 580-1200 F</li>
                              <li>
                                Hot Water Temperature: 190-220 F (Standard)
                              </li>
                            </ul>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="packageChillers">
                  <h2 className="mb-4">Package Chillers</h2>
                  <Row className="mb-4">
                    <Col md={10}>
                      <Card>
                        <Card.Header>
                          Package Chiller (Enclosure, Pump System and Cooling
                          Tower included)
                        </Card.Header>
                        <Card.Body className="d-flex">
                          <img
                            src="https://broadusa.com/broad/wp-content/uploads/2020/03/package_chiller-300x279-1-200x186.jpg"
                            alt="pkgchiller"
                            style={{
                              objectFit: "contain",
                            }}
                          />
                          <Card.Text
                            as="div"
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
                              <li>Direct Fire/Hot water/Steam/Exhaust</li>
                              <li>Capacity: 40-2200 ton</li>
                              <li>Gas Pressure: 2.3-7.3 Psi (Standard)</li>
                              <li>
                                Dual Fuel Burner (Gas and Oil, Low NOx, &lt;
                                10ppm)
                              </li>
                              <li>Cooling / Heating / Domestic Hot Water</li>
                            </ul>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="solarDriven">
                  <h2 className="mb-4">Solar Driven</h2>
                  <Row className="mb-4">
                    <Col md={10}>
                      <Card>
                        <Card.Header>
                          Solar Driven (Solar Driven with Gas Burner back up)
                        </Card.Header>
                        <Card.Body className="d-flex">
                          <img
                            src="https://broadusa.com/broad/wp-content/uploads/2020/03/solar-driven-200x161.png"
                            alt="pkgchiller"
                            style={{
                              objectFit: "contain",
                            }}
                          />
                          <Card.Text
                            as="div"
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
                              <li>Capacity: 40-1000 ton</li>
                              <li>Hot Water: 160-350F</li>
                              <li>Gas Pressure:2.3-7.3 Psi (Standard)</li>
                              <li>Dual Fuel Burner</li>
                              <li>Cooling Only</li>
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
        <br />
        <br />
        <ContactForm />
      </Container>
      <Footer />
    </div>
  );
}
