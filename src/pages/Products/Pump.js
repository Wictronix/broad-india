import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import NavbarComp from "../../components/NavbarComp";
import pumpImg from "../../assets/images/broadPump.webp";

export default function Pump() {
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
              margin: isMobile ? "2rem" : "5rem",
              fontWeight: "700",
            }}
            data-aos="fade-up"
          >
            BROAD Pumpset
          </div>
        </div>
      </div>
      <Container style={{ margin: isMobile ? "1rem 0.5rem" : "5rem 6rem" }}>
        <div className="display-6 mb-4">BROAD Pumpset</div>
        <div className="row">
          <div className="col-md-4">
            <img
              src={pumpImg}
              alt="pec"
              style={{ width: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-7">
            <ul>
              <li>
                <strong>Miraculous electricity saving</strong> - Zero water
                resistance design enables 60%+ electricity saving compared with
                conventional water distribution systems. Inverter controlled
                water pumps reduce the operating electricity consumption to
                30%~50% of the rated power.
              </li>
              <br />
              <li>
                <strong>Complete bacteria killing</strong> - Auto dosing device
                charges biocide to the cooling water system automatically to
                eradicate legionnaire's diseases.
              </li>
              <br />
              <li>
                <strong>Quick installation</strong> - Installation time is 10%
                of that needed for conventional projects, which saves a lot of
                time cost and labor cost for customers.
              </li>
              <br />
              <li>
                <strong>Cost and space saving</strong> - One-shot investment
                solves all problems: designing, purchasing, installation,
                commissioning, and 50% footprint reduction.
              </li>
              <br />
              <li>
                <strong>Worry-free & carefree</strong> - Whole system factory
                made and tested. Customers' management cost saved. All
                European/US safety certificates secured. Central Air
                conditioning industrialization materialized.
              </li>
              <br />
            </ul>
            <a href={"files/pumpSet.pdf"} className="btn btn-primary ms-2">
              Download Catalog
            </a>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
