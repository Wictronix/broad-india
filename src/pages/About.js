import React from "react";
import { Container, Row, Col, Tab, Nav, Accordion } from "react-bootstrap";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";

// import bg from "../assets/images/aboutBG.jpg";
import rollAbso from "../assets/images/rolling_absorbers.jpg";
// import cchp from "../assets/images/cchp.png";
import bti from "../assets/images/broad_town_intro3.jpg";

import logo from "../assets/images/logo.png";
import bg from "../assets/images/broadIndGrp.jpeg";

import awards1 from "../assets/images/awards1.jpeg";
import awards2 from "../assets/images/awards2.jpeg";
import awards3 from "../assets/images/awards3.jpeg";

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
          backgroundImage: `url(${bg})`,
          // backgroundOrigin: "initial",
          // backgroundAttachment: "fixed",
          backgroundPosition: "top",
          backgroundSize: "cover",
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
      <Container
        style={{
          marginBlock: "5rem",
        }}
      >
        <div className="row">
          <div className="col-md-8">
            <h2>BROAD Air conditioning India Pvt. Ltd.</h2>
            <br />
            <ul>
              <li>Subsidised Company of BROAD group, China.</li>
              <li>BROAD has been serving India market for last 22 years.</li>
              <li>
                BROAD India has more than 200 VAM installations, Service and O&M
                in India.
              </li>
              <li>Operating Asia's biggest CHP project in DLF, Gurugram</li>
              <li>
                Broad chillers installed in industries: Petrochemical, Food,
                Textile, Hospital and office
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <img
              src={logo}
              alt="logo"
              style={{ width: "80%", height: "auto" }}
            />
          </div>
        </div>
        <br />
        <br />
        <Tab.Container id="left-tabs-example" defaultActiveKey="about">
          <Row>
            <Col sm={3}>
              <div
                // className="card"
                style={{
                  backgroundColor: "rgba(0, 110, 253, 0.2)",
                  borderRadius: "0.5rem",
                }}
              >
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="about">About</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="awards">
                      Awards and Recognition
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="history">Broad History</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="culture">Our Culture</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="values">Core Values</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="bthq">BROAD Town HQ</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="FAQ">FAQ</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="about">
                  <h2>About BROAD India</h2>
                  <br />
                  <h4>
                    BROAD India is committed to the Absorption Marketplace - It
                    is our primary business since we started in 2001
                  </h4>
                  <br />
                  <p>
                    BROAD is dedicated and focused on ensuring our owners can
                    always find proper training, service and after sales support
                    with replacement parts and or units. BROAD is committed to
                    the inherent value and flexible solutions that thermally
                    driven absorption plays in our modern world.
                  </p>
                  <br />
                  <h4>We Roll Our Own - Absorbers</h4>
                  <br />
                  <div className="d-flex flex-column flex-md-row">
                    <img
                      src={rollAbso}
                      alt="rolling absorber"
                      className="me-2"
                    />
                    Absorption design is our core competency and primary focus.
                    Unlike many current players in the absorption market, BROAD
                    designed and created its first absorber in 1988 with its own
                    human capital, hard work, the desire to be the best. This
                    homegrown approach has allowed BROAD to continue to innovate
                    and lead as the worldwide customer base has grown to over 80
                    plus counties.
                  </div>
                  <br />
                </Tab.Pane>
                <Tab.Pane eventKey="bthq">
                  <h2>A Brief Introduction of BROAD Town</h2>
                  <br />
                  <p>
                    BROAD Town is the headquarters of BROAD Group. It is located
                    in the eastern suburbs of Changsha City, 16 Km from downtown
                    12km from the airport. Named as BROAD Tech Park” in 1997, it
                    was the first tech park named after a company in China. It
                    is home to dozens of technological inventions that have
                    impacted the whole world, for instance, the world's first
                    noe-electric exhaust air conditioning, the world's first
                    fresh air purification machine, the world's first
                    factory-made sustainable buildings…
                  </p>
                  <img
                    src={bti}
                    alt="BROAD town intro"
                    className="w-100 my-2"
                  />
                  <p>
                    BROAD Town covers an area of 1km², 0.68km² is reserved as
                    ecological protection zone and organic farm. it is a factory
                    with the least factory features. All residential buildings
                    at 0.25 million m² on the campus have adopted 15-20 cm
                    thermal insulation, 3-4 paned windows, external solar
                    shading and fresh air heat recovery machine. BROAD exports
                    air conditioning to more than 80 countries, yet it seldom
                    uses air conditioning itself. At BROAD Town Organic
                    food,self -processed cerels and edible oils, and reverse
                    osmosis water is all available. Staff have no desires to buy
                    vehicles are awarded monthly, and garbage is classified
                    before recycling, What's more, the grocery here is
                    unattended, dinning-table and floor is so clean that you
                    will not spot a single grain of rice or piece of paper. All
                    rooms enjoy 100% fresh air with PM2.5 be filtered by 99.9%.
                    Theatre, gym,yoga studio, boutique hotel and 44 statues of
                    the most influential are scattered on the campus, marking
                    BROAD Town a harmonious community between the environmental
                    valve and human value.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="culture">
                  <h3>BROAD Mission</h3>
                  <p>
                    For Humanity's Future BROAD's Unique Building Energy
                    Conservation Technology Protects the Earth BROAD's Unique
                    Clean Air Technology Protects Mankind
                  </p>
                  <br />
                  <h3>BROAD Vision</h3>
                  <p>
                    Only develop unique technologies Only provide products and
                    services beneficial to the earth and humanity
                  </p>
                  <br />
                  <h3>BROAD Faith</h3>
                  <p>
                    The Farming Law. Farming matches reaping and farming
                    precedes reaping. To reap every year, one must farm every
                    year.
                  </p>
                  <br />
                  <h3>BROAD Tenet</h3>
                  <p>
                    Perfect oneself and be outstanding, restrain oneself and be
                    absolutely obedient
                  </p>
                  <br />
                  <h3>BROAD Moral Line</h3>
                  <p>
                    7 ”Nos” & 1 ”Without” <br />
                    No environmental pollution, No technology plagiarism No
                    customers cheating, No vicious competition, no chain debts,
                    No tax dodging, no bribery, and Without malicious conscience{" "}
                  </p>
                  <br />
                </Tab.Pane>
                <Tab.Pane eventKey="values">
                  <p>
                    The core values of BROAD include responsibility to our
                    environment which nurtures us, responsibility to humanity
                    which inspires us, responsibility to our customers who
                    support us, and responsibility to our employees who dedicate
                    their energy and creativity for all of us.
                  </p>
                  <p>
                    For the environment, everything we do is from the
                    perspective of sustainability: Increasing energy efficiency,
                    reducing energy consumption, reducing energy costs, and
                    reducing consumption of materials.
                  </p>
                  <p>
                    For humanity, sustainability is wired into the DNA of the
                    full spectrum of BROAD's diverse product lines: Non-electric
                    chillers, sustainable structural material, clean air
                    machines, prefabricated negative pressure rooms, and many
                    other products. BROAD reduces our customers' carbon
                    footprint, and charts the way to a future of sustainable
                    cooling and heating, building construction, and air
                    purification.
                  </p>
                  <p>
                    For our customers, we aim to be an enterprise one is proud
                    to do business with. For many companies, perhaps profit is
                    most valued. At BROAD, our aim is to be distinguished by
                    excellence in products and service: to conceive of and make
                    products no one else can make, and to offer a level of
                    service no one else can provide. So what sort of enterprise
                    does that make us?
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="history">
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th className="col-4 col-md-2">Year</th>
                        <th className="col-8 col-md-10">Events</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1992</td>
                        <td>
                          {" "}
                          Invented China's first CFC-free direct-fired
                          non-electric air conditioning
                        </td>
                      </tr>
                      <tr>
                        <td>1997</td>
                        <td>
                          {" "}
                          Invented the world's first plate heat exchanger for
                          non-electric air conditioning with energy efficiency
                          increased by 40%
                        </td>
                      </tr>
                      <tr>
                        <td>1998</td>
                        <td>
                          {" "}
                          Release the BROAD Declaration , advocating “fighting
                          against low energy efficiency and material waste to
                          the fullest, extending product lifespan to the
                          longest” Pesticide and fertilizer prohibited in BROAD
                          Town Implemented the water and electricity metering
                          systems for BROAD staff
                        </td>
                      </tr>
                      <tr>
                        <td>1999</td>
                        <td>
                          {" "}
                          Invented the world's first non-electric zero emission
                          air conditioning powered by exhaust gas from turbine
                          Recommended low-load design to customers in product
                          brochures to advocate energy conservation even at the
                          risk of receiving complaints
                        </td>
                      </tr>
                      <tr>
                        <td>2002</td>
                        <td>
                          {" "}
                          BROAD Organic Farm was developed to provide organic
                          food to staff
                        </td>
                      </tr>
                      <tr>
                        <td>2003</td>
                        <td>
                          {" "}
                          Released the BROAD Values to advocate “environmental
                          protection is more important than profit”
                        </td>
                      </tr>
                      <tr>
                        <td>2004</td>
                        <td>
                          {" "}
                          Invented the world's first Packaged Water Distribution
                          System with operational energy decreased by 70-85% for
                          cooling water and chilled water Initiated the annual
                          energy consumption check policy for all customers with
                          open reports The world's first company to take dispute
                          risk by showing energy efficiency on chiller's control
                          panel
                        </td>
                      </tr>
                      <tr>
                        <td>2005</td>
                        <td>
                          {" "}
                          Translated and published 250,000 copies of
                          YouthXchange , an environment guideline of UNEP
                        </td>
                      </tr>
                      <tr>
                        <td>2006</td>
                        <td>
                          {" "}
                          Translated & published the 780-page Living in the
                          Environment , an English environment encyclopedia
                        </td>
                      </tr>
                      <tr>
                        <td>2008</td>
                        <td>
                          {" "}
                          China's first thoroughly-renovated community with all
                          buildings at BROAD Town retrofitted with 15cm thermal
                          insulation, 3-paned windows, external solar shading
                          and heat recovery fresh air Invented the world's first
                          clean fresh air machine, recovering exhaust heat by
                          80% and filtering PM2.5 by 99.9%
                        </td>
                      </tr>
                      <tr>
                        <td>2009</td>
                        <td>
                          {" "}
                          Invented the world's first factory-made sustainable
                          building (BSB) that saves energy by 80% Invented the
                          world's first Life Phone (Air Monitor) to detect
                          PM2.5, CO2, etc. Completely replaced detergent with
                          caustic soda and adopted reverse osmosis water as
                          drinking water at BROAD Town
                        </td>
                      </tr>
                      <tr>
                        <td>2010</td>
                        <td>
                          {" "}
                          Provided central air conditioning system and operation
                          services to all 250 pavilions at World Expo Shanghai,
                          cutting 73,000 tons of CO2 emissions, which equals to
                          planting 4 million trees Built a sustainable building
                          demo for The United Nations Framework Convention on
                          Climate Change (COP16, Cancun)
                        </td>
                      </tr>
                      <tr>
                        <td>2011</td>
                        <td>
                          {" "}
                          BROAD chairman was awarded the “Champions of the
                          Earth” by the UN for his contributions to energy
                          conservation
                        </td>
                      </tr>
                      <tr>
                        <td>2012</td>
                        <td>
                          {" "}
                          UN Secretary General cited BROAD as the only energy
                          conservation case in the “RIO +20 Declaration” The
                          Oval Mountain Organic Farm was built in Xiangyin
                          County, gradually increase the food organic rate of
                          staff to 80% Launched the 8-catergory garbage sorting
                          system. Low Carbon Commute Incentives for Staff was
                          carried out to encourage car-free staff
                        </td>
                      </tr>
                      <tr>
                        <td>2013</td>
                        <td>
                          {" "}
                          BSB was awarded the CTBUH (Council on Tall Buildings
                          and Urban Habitat) Innovation Award for its
                          contribution to innovative environmental conservation
                          Installed solar panels for all factory roofs (230,000
                          m2) in BSB factory
                        </td>
                      </tr>
                      <tr>
                        <td>2014</td>
                        <td>
                          {" "}
                          BROAD chairman was awarded the World's Top 25
                          Eco-Innovators by Fortune Magaine BROAD Recycled Oil
                          Company obtained the qualification to utilize 30% of
                          national waste mineral oil
                        </td>
                      </tr>
                      <tr>
                        <td>2015</td>
                        <td>
                          {" "}
                          To make building an eternal wealth, BROAD started the
                          invention of core tubular stainless steel slab and
                          stopped production of steel structure during the same
                          year
                        </td>
                      </tr>
                      <tr>
                        <td>2016</td>
                        <td>
                          {" "}
                          To extend the lifespan of air-conditioning to 60 years
                          and extend the lifespan of heat exchange tube to
                          unlimited , BROAD replaced brass heat exchange tubes
                          and stainless steel heat exchange tubes with titanium
                          tubes
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Tab.Pane>
                <Tab.Pane eventKey="awards">
                  <h2>Awards and Recognitions</h2>
                  <br />
                  <br />
                  <img src={awards1} alt="coe" style={{ width: "100%" }} />
                  <br />
                  <br />
                  <img src={awards2} alt="ch" style={{ width: "100%" }} />
                  <br />
                  <br />
                  <img src={awards3} alt="100" style={{ width: "100%" }} />
                </Tab.Pane>
                <Tab.Pane eventKey="FAQ">
                  <h2>FAQ</h2>
                  <Accordion>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        What kind of energy sources do BROAD chillers use ?
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            Natural Gas, Diesel, Heavy oil, biogas, shell gas,
                            Engine/Turbine Exhaust, Hot(Jacke) water, solar,
                            etc.
                          </li>
                          <li>
                            400F~572F exhaust, single stage chiller
                            BDE(66~331Rt)
                          </li>
                          <li>
                            572F~1110F exhaust, two-stage chiller. BE(66~3307Rt)
                          </li>
                          <li>
                            175F~265F Hot water, single stage chiller
                            BDH(58~1746Rt)
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        What is the minimum chilled and condensed water
                        temperature
                      </Accordion.Header>
                      <Accordion.Body>
                        39F min. for chilled water and 50F min. for condenser
                        water inlet.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        What is the chilled and condensed water flow rate
                        temperature
                      </Accordion.Header>
                      <Accordion.Body>
                        50~120% for chilled water flow rate.
                        <br /> 30~110% for condenser water, <br />
                        BROAD control panel provides flow vary control signal.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        What is the chiller load adjustable range
                      </Accordion.Header>
                      <Accordion.Body>
                        10~115% .
                        <br />
                        Chiller load automatically vary with load, controlled by
                        PLC.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        Do you use ammonia absorbers ?{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        No, BROAD manufacture the absorption chiller with LiBr
                        solution. No plan to make ammonia absorbers.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
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
