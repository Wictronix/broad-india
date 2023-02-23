import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import NavbarComp from "../../components/NavbarComp";

import nonElec from "../../assets/images/nonElec.jpg";
import wasteHeat from "../../assets/images/wasteHeat.jpg";

export default function VapAbsorptionChiller() {
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
          backgroundPosition: "center",
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
              margin: isMobile ? "2rem" : "4rem",
              fontWeight: "700",
            }}
            data-aos="fade-up"
          >
            Vapour Absorption Chillers
          </div>
        </div>
      </div>
      <Container style={{ margin: isMobile ? "1rem 0.5rem" : "5rem 6rem" }}>
        <div className="row shadow p-3 rounded">
          <h1>Direct Fired Chiller</h1>
          <div className="col-md-6 mt-3">
            <img src={nonElec} alt="dfc" style={{ width: "100%" }} />
          </div>
          <div className="col-md-6 ps-md-1">
            <h4>Function</h4>
            Cooling, heating, hot water (seperately or simultaneously)
            <br />
            <br />
            <h4>Application</h4>
            Provide chilled/heating water for central Air Conditioning system
            Produce chilled water over 5℃ and heating water below 95℃
            <br />
            <br />
            <h4>Cooling capacity</h4>
            233~11,630kW (66~3,307Rt)
            <br />
            <br />
            <h4>Energy sources</h4>
            Natural gas, town gas, biogas; Gas/oil dual fuel, gas & waste heat
            hybrid (multi-energy); Waste heat from power generation industrial
            waste streams (steam, hot water, exhaust, etc.)
            <br />
            <br />
            <a href="/files/nonElec.pdf" className="btn btn-primary">
              Download Catalogue
            </a>
          </div>
        </div>
        <div className="row mt-5 shadow bg-white p-3 rounded">
          <h1>Waste Heat Chiller</h1>
          <div className="col-md-6">
            <br />
            <br />
            <h4>Function</h4>
            Cooling, heating, hot water (seperately or simultaneously)
            <br />
            <br />
            <h4>Application</h4>
            Provide chilled/heating water for central Air Conditioning system
            Produce chilled water over 5℃ and heating water below 95℃.
            <br />
            <br />
            <h4>Cooling Capacity</h4>
            233~11,630kW (66~3,307Rt)
            <br />
            <br />
            <h4>Energy sources</h4>
            Waste heat from power generation or industrial waste streams (steam,
            hot water, exhaust, etc.)
            <br />
            <br />
            <a href="/files/nonElec.pdf" className="btn btn-primary">
              Download Catalogue
            </a>
            <span> </span>
            <a href="/Chillers" className="btn btn-primary">
              Know More
            </a>
          </div>
          <div className="col-md-6">
            <img src={wasteHeat} alt="dfc" style={{ width: "100%" }} />
          </div>
        </div>
        <div className="row mt-5 shadow p-3 rounded">
          <h1>Absorption Heat Pump</h1>
          <div className="col-md-6">
            <img src={wasteHeat} alt="dfc" style={{ width: "100%" }} />
          </div>
          <div className="col-md-6">
            <br />
            <br />
            <h4>Function</h4>
            Low temperature. Waste Pleat recovery.
            <br />
            <br />
            <h4>Application</h4>
              District process and Building heating.
              Make up water supply preheating.
             
            <br />
            <br />
            <h4>Cooling Capacity</h4>
            282kW ~ 56,489kV
            <br />
            <br />
            <h4>Energy sources</h4>
            Steam
              High temp. hot water, 
              High temp. exhaust, 
              Natural gas, coal gas, bio gas, diesel
              1.7 COP with simultaneous cooling and heating.
            <br />
            <br />
            <a href="/files/heatpump.pdf" className="btn btn-primary">
              Download Catalogue
            </a>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
