import React from "react";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";

import bg from "../assets/images/bgbg.jpg";
import { Container } from "react-bootstrap";

export default function BroadGroup() {
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
          height: "60vh",
          backgroundImage: `url(${bg})`,
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
              left: isMobile ? "2rem" : "5rem",
              margin: isMobile ? "2rem" : "5rem",
              fontWeight: "700",
            }}
            data-aos="fade-up"
          >
            BROAD Group{" "}
          </div>
        </div>
      </div>
      <Container className="my-5">
        <div className="row">
          <div className="col-md-6">
            BROAD Group is a privately-owned enterprise founded in 1988 with RMB
            30,000. The company has developed hundreds of hi-tech products and
            has never copied any technology of its peers since inception. The
            mission of BROAD Group is “For Humanity's Future: Using original low
            carbon & durable technology for the earth. Using original clean &
            safe technology for humans.”Headquartered in Changsha, BROAD Group
            has exported products to over 80 countries. BROAD subsidiaries are
            listed below:
            <ol>
              <li>
                BROAD Air Conditioning Co., Ltd., registered in 1988,
                manufactures non-electric air conditioning systems and district
                heating and cooling systems powered by industrial waste heat,
                power exhaust gas and natural gas with the mission of
                “continuously deepening research, development and service,
                leading the world's direction in energy efficiency”
              </li>

              <li>
                BROAD Clean Air Technology Co., Ltd., established in 2005,
                produces Fresh Air Machines with 80% heat recovery, filtering
                PM2.5 by 99.9% and bringing in 100% fresh air. The company also
                produces commercial, household and portable air purifiers and
                air monitor with the mission of “clean air shared by all humans”
              </li>

              <li>
                BROAD Nearly Zero Energy Building Co., Ltd., started in 2005,
                specializes in the design and construction of retrofitted
                buildings, energy conservation sharing and carbon credit trading
                with the mission of “recoating existing buildings and reducing
                carbon footprint by 10 times, for warm winter and cool summer”
              </li>

              <li>
                BROAD Energy Ser vice Co., Ltd., founded in 2009, provides
                clients with investment consulting, design, implementation and
                operational ser vice of large central air conditioning systems
                and industrial heating and cooling systems by means of BROAD low
                carbon technologies, products and energy management contract
                (EMC), with the mission of “optimizing resources, being
                worry-free, money-saving and low carbon”
              </li>
            </ol>
          </div>
          <div className="col-md-6">
            <ol start="4">
              <li>
                BROAD Renewable Resources Co., Ltd., established in 2008,
                produces clean oil from industrial and transportation waste
                mineral oils as raw materials with the mission of “eradicating
                waste oil pollution for the world”
              </li>

              <li>
                BROAD Sustainable Building Co., Ltd. set up in 2009, supplies
                ultra-strong and ultra-light stainless steel B-CORE slab series
                of products which transform the world's construction and
                transportation industries from the foundation. The mission is
                “building an everlasting civilization.” It owns the following
                subsidiaries:
              </li>
            </ol>
            <ol>
              <li>
                BROAD Holon Co., Ltd. manufactures factory-made stainless steel
                B-CORE Holon buildings with the mission of “providing all humans
                with truly superb housing”
              </li>
              <li>
                BROAD Wind Power Co., Ltd. produces breeze power generation
                system with the mission of “letting wind power spread across
                every corner of the earth, benefiting all humans”
              </li>
              <li>
                BROAD B-CORE Road and Bridge Co., Ltd. develops elevated B-CORE
                expressway, bridges and vertical factories with the mission of
                “preventing expressways from cutting apart the nature”
              </li>
              <li>
                BROAD Lightweight Transportation Co., Ltd. develops stainless
                steel B-CORE shells of cars, airplanes and ships with the
                mission of “making transportation vehicles lighter and safer”
              </li>
              <li>
                BROAD Vacuum Loop Co., Ltd. develops stainless steel B-CORE
                extremely hi-speed vacuum tubes and train bodies with the
                mission of “fulfilling the dream of the time tunnel with
                intercontinental transportation”
              </li>
              <li>
                BROAD B-CORE Slab Co., Ltd. produces B-CORE Slabs for BSB and
                its partners, with the mission of “setting up the safest
                factories with the highest efficiency in the world”
              </li>
            </ol>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <a href="http://en.broad.com">Visit Broad Group website</a>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
