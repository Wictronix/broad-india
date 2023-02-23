import React from "react";
import { Container, Row, Col, Tab, Nav, Accordion } from "react-bootstrap";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";

// import bg from "../assets/images/aboutBG.jpg";
// import rollAbso from "../assets/images/rolling_absorbers.jpg";
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
            <h2>BROAD Air Conditioning India Pvt. Ltd.</h2>
            <br />
            <ul>
              <li>Subsidised Company of BROAD group, China.</li>
              <li>BROAD has been serving India market since 2001.</li>
              <li>
                BROAD Air Conditioning India Pvt. Ltd. (BROAD India) has more than 200
                VAM installations, Service and O&M in India.
              </li>
              <li>Operating Asia's biggest CHP project in DLF, Gurugram</li>
              <li>
                BROAD chillers installed in industries: Petrochemical, Food,
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
                    <Nav.Link eventKey="history">BROAD History</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="culture">Our Culture</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="declaration">
                      BROAD Declaration
                    </Nav.Link>
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
                  <h2>About BROAD Air Conditioning India Pvt. Ltd. (BROAD India)</h2>
                  <br />
                  <h4>
                    BROAD Air Conditioning India Pvt. Ltd. (BROAD India) is committed
                    to the Absorption Marketplace - It is our primary business
                    since we started in 2001
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
                    noe-electric exhaust Air Conditioning, the world's first
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
                    Air Conditioning to more than 80 countries, yet it seldom
                    uses Air Conditioning itself. At BROAD Town Organic
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
                  <h3>Core Values</h3>
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
                        <td>1988</td>
                        <td>
                          The brothers, Zhang Yue and Zhang Jian, registered the
                          private company BROAD Thermal Research Institute in
                          Chenzhou, Hunan with a capital of RMB 30,000
                        </td>
                      </tr>
                      <tr>
                        <td>1990</td>
                        <td>
                          Successively assigned the patents and drawings of
                          pressure-free hot water boiler for 7 times with a
                          collective income of nearly RMB 1 Million
                        </td>
                      </tr>
                      <tr>
                        <td>1992 </td>
                        <td>
                          The direct-fired non-electric chiller was invented.
                          BROAD relocated to Changsha and renamed as BROAD Air
                          Conditioning, staff totaling 43
                        </td>
                      </tr>
                      <tr>
                        <td>1994</td>
                        <td>
                          Started setting up sales and service offices in key
                          provinces around China The Advertisement of
                          BROAD·Opening a New Era of Central Air Conditioning
                          was broadcasted at CCTV prime time
                        </td>
                      </tr>
                      <tr>
                        <td>1995 </td>
                        <td>
                          Built up the first phase of BROAD Town and the
                          assembly line for non-electric air conditioning, staff
                          totaling 433
                        </td>
                      </tr>
                      <tr>
                        <td>1996</td>
                        <td>
                          The world's No.1 seller of non-electric air
                          conditioning and China's No.1 seller of central air
                          conditioning by sales volume
                        </td>
                      </tr>
                      <tr>
                        <td>1997 </td>
                        <td>
                          Founded BROAD USA and started international sales A
                          corporate jet and helicopter were purchased, marking
                          BROAD the first company in China to own private
                          aircraft (5 more aircrafts were purchased afterwards.
                          However, with increased environmental consciousness,
                          BROAD stopped using corporate jets 10 years later)
                        </td>
                      </tr>
                      <tr>
                        <td>1998</td>
                        <td>
                          The two brothers separated. Zhang Yue took over BROAD
                          Group. Zhang Jian operated the Sino-Japanese joint
                          venture BROAD Beltecno and the later BROAD Homes. The
                          two shared the brand of BROAD and operational
                          management resources
                        </td>
                      </tr>
                      <tr>
                        <td>2000</td>
                        <td>
                          BROAD Town expanded to 0.7km2 after 5 land
                          acquisitions, and the construction of the new
                          millennium area was completed
                        </td>
                      </tr>
                      <tr>
                        <td>2002</td>
                        <td>
                          BROAD was rated China's No.1 taxpayer among private
                          companies by the State Administration of Taxation
                        </td>
                      </tr>
                      <tr>
                        <td>2003</td>
                        <td>
                          The BROAD Values was released, with BROAD positioned
                          as a "social enterprise"{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>2005</td>
                        <td>
                          China's first company to implement Energy Management
                          Contract of Central Air Conditioning The Premier and
                          the NPC chairman of China visited BROAD Town and spoke
                          highly of BROAD innovations and environmental
                          protection endeavors Launched the transparent sales
                          model with the Product Price List and the Fair Pricing
                          Policy disclosed to the public
                        </td>
                      </tr>
                      <tr>
                        <td>2006</td>
                        <td>
                          China's first company to invent clean air products{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>2007</td>
                        <td>
                          BROAD Town expanded to 1km2 after 12 land
                          acquisitions, staff totaling 1829{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>2010 </td>
                        <td>
                          BROAD Group was established, consisting 6 subsidiaries
                          covering air conditioning, clean air technology,
                          energy service, sustainable building, building energy
                          efficiency, recycling fuel oil as well as 2 other
                          located in Tianjin and USA
                        </td>
                      </tr>
                      <tr>
                        <td>2012 </td>
                        <td>
                          BSB Town reached 1.3 km2 with factory area covering
                          230,000m2 BROAD products have been sold to more than
                          80 countries
                        </td>
                      </tr>
                      <tr>
                        <td>2015 </td>
                        <td>
                          The 57-floor Mini Sky City was constructed within 19
                          days and was selected as one of "the 40 influential
                          innovations in the world" BROAD hosted the annual
                          meeting of the Mountain Tai Club Staff of BROAD Group
                          totaling 3992
                        </td>
                      </tr>
                      <tr>
                        <td>2016 </td>
                        <td>
                          BSB case was listed in the Annual report of global
                          construction development by the World Economic Forum
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Tab.Pane>
                <Tab.Pane eventKey="declaration">
                  <h3>BROAD Declaration</h3>
                  Any enterprise in the world that is defined only by its
                  organizational system will have limited vitality, and will
                  expire due to market, social or political factors, or the
                  enterprise's own internal factors. To give an enterprise
                  unlimited vitality, we must build another system around the
                  organizational system; this is the cultural system.
                  <br />
                  <br />
                  It is invisible, yet it is infinite. It transcends the
                  concepts of time and geography, and the concepts of
                  individuals, groups and races.
                  <br />
                  <br />
                  The BROAD cultural system will connect us with each other,
                  closely linking our feelings together, coordinating our
                  behavior and allowing us to complement each other's knowledge.
                  The BROAD cultural system will make us an indestructible
                  spiritual unity.
                  <br />
                  <br />
                  The BROAD cultural system will be established on the laws of
                  nature, and reveal the principle - centered corporate
                  philosophy. It will inspire our infinite wisdom and realize
                  human aspiration to pursue a higher quality life, and will not
                  fail the best company name in the world - BROAD!
                  <br />
                  <br />
                  <ol>
                    <li>
                      We must address the complacency and humbleness that
                      undermine our mental health, and always embrace the
                      brightness, and the twists and turns of the company' s
                      future.
                    </li>
                    <li>
                      We must set aside short-term interests along with
                      temporary gains and losses, which can hinder our vision.
                      We reject any short - term action, and always clearly see
                      the long - term goals of the company and individuals.{" "}
                    </li>
                    <li>
                      We must reject speculative behaviors that violate our
                      values and always believe in the “farming law” of equal
                      pay and return.{" "}
                    </li>
                    <li>
                      We must avoid the hedonism that can distort our view of
                      life, and firmly believe that working is a necessity and a
                      source of happiness.{" "}
                    </li>
                    <li>
                      We respect each person's right - to - work and labor
                      achievements, and always advocate the life - time
                      employment policy, pursuing the "5 High Policy": high
                      quality, high responsibility, high workload, high
                      performance and high income.
                    </li>
                    <li>
                      We promote a rational work attitude, always advocating
                      process-oriented and regulation-guided management
                      principles, and strictly implement a 6-point quality
                      problem-solving system, discouraging rash actions, and
                      never underestimating any slight incident.{" "}
                    </li>
                    <li>
                      We abide by the credit principle of “Keep Promises”, and
                      always regard credit as the cornerstone of a company's
                      survival and development. We never break any promise
                      internally or externally.{" "}
                    </li>
                    <li>
                      We adhere to our corporate ethical policy, “7 Nos and 1
                      Without”, sticking always to: no environmental pollution,
                      no technology plagiarism, no deceiving customers, no
                      vicious competition, no chain debts, no tax evasion, no
                      bribery, without malicious conscience.{" "}
                    </li>
                    <li>
                      We adhere to the employees' morality policy of “10 Nos and
                      1 Without”, sticking always to: no dereliction of duty, no
                      indolence, no promise-breaking, no lying, no cliques, no
                      betrayal, no bribery, no greed, no waste, no pollution,
                      without sourness.{" "}
                    </li>
                    <li>
                      We give top priority to environment protection, and only
                      develop products that can essentially reduce environmental
                      pollution. We prioritize pollution reduction and health
                      improvement in all aspects of corporate activities, and
                      embed environmental protection concepts into every
                      employee's genes.{" "}
                    </li>
                    <li>
                      We challenge the limits of technology, focusing on
                      disruptive innovations and unique products and services
                      with which others cannot compete or better. We will always
                      adhere to the principle of "Perfect Oneself to be
                      Outstanding" and always fulfill the mission, "For
                      Humanity's Future". We must encourage the progression of
                      our employees' morality, knowledge, teamwork and work
                      efficiency every day. To bring our various products which
                      people desperately need to benefit the whole world, we
                      must increase our profits year by year, ensuring that our
                      corporate life can be sustained, our ambitious dreams not
                      become a fantasy, and our name will shine forever.
                    </li>
                  </ol>
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
