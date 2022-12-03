import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import NavbarComp from "../../components/NavbarComp";
import ntpcImg from "../../assets/images/ntpc.webp";
import itcImg from "../../assets/images/itc.jpg";
import { Modal } from "react-bootstrap";

export default function Installations() {
  const [detailsIdx, setDetailsIdx] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(true);
  React.useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobile(window.innerWidth < 768);
  }, []);
  return (
    <div>
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
                left: isMobile ? "1rem" : "5rem",
                margin: isMobile ? "1rem" : "5rem",
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
              We have Strategy for <strong>Doing Things Right.</strong>
            </p>
          </Container>
        </div>
        <Container style={{ marginBlock: "5rem" }}>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://www.jsw.in/sites/default/files/assets/cache/images//jsw-vijayanagar-aerial-315f534x432-resize-534x432-a7542dd51f-75addb3d04bc8b10.jpeg"
                  alt="jsw"
                  style={{
                    width: "100%",
                    height: "auto",
                    aspectRatio: "1",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h4 className="card-title">JSW, Bellary</h4>
                  <div className="card-text">
                    The JSW group is amongst the leading conglomerates in India,
                    with presence across the vital sectors of the Indian
                    economy.
                  </div>
                  <div
                    className="btn btn-primary"
                    onClick={() => setDetailsIdx(1)}
                  >
                    Know more
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://www.constructionweekonline.in/cloud/2021/11/24/StFDepyN-IOCL-6.jpg"
                  alt="iocl"
                  style={{
                    width: "100%",
                    height: "auto",
                    aspectRatio: "1",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h4 className="card-title">
                    Indian Oil Corporation, Vadodra
                  </h4>
                  <div className="card-text">
                    Indian Oil is India's flagship national oil company with
                    business interests straddling the entire hydrocarbon value
                    chain.
                  </div>
                  <div
                    className="btn btn-primary"
                    onClick={() => setDetailsIdx(2)}
                  >
                    Know more
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src={itcImg}
                  alt="itc"
                  style={{
                    width: "100%",
                    height: "auto",
                    aspectRatio: "1",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h4 className="card-title">ITC Group</h4>
                  <div className="card-text">
                    ITC group is one biggest business house in India. BROAD will
                    supply VAM for their 4 plants. Locations: Haridwar, Kolkata,
                    Pune, Trichy
                  </div>
                  <div
                    className="btn btn-primary"
                    onClick={() => setDetailsIdx(3)}
                  >
                    Know more
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  src={ntpcImg}
                  alt="supreme petro"
                  style={{
                    width: "100%",
                    height: "auto",
                    aspectRatio: "1",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h4 className="card-title">NTPC</h4>
                  <div className="card-text">
                    National Thermal Power Corporation Limited, is an Indian
                    central public sector company which is engaged in generation
                    of electricity.
                  </div>
                  <div
                    className="btn btn-primary"
                    onClick={() => setDetailsIdx(4)}
                  >
                    Know more
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://media-cdn.tripadvisor.com/media/photo-s/14/58/3d/a0/cyber-hub-at-night.jpg"
                  alt="dfl cyber city"
                  style={{
                    width: "100%",
                    height: "auto",
                    aspectRatio: "1",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h4 className="card-title">DLF Cyber city, Gurgaon</h4>
                  <div className="card-text">
                    It is the biggest CCHP case in the world. This project
                    successfully set up an outstanding case for studying
                    distribution energy system in the world.
                  </div>
                  <div
                    className="btn btn-primary"
                    onClick={() => setDetailsIdx(5)}
                  >
                    Know more
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src="https://www.sundayguardianlive.com/wp-content/uploads/2018/02/1058_2013.jpg"
                  alt="gujarat gas"
                  style={{
                    width: "100%",
                    height: "auto",
                    aspectRatio: "1",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h4 className="card-title">Gujarat Gas</h4>
                  <div className="card-text">
                    Gujarat Gas is India's largest city gas distribution player
                    with presence spread across 19 Districts in the State of
                    Gujarat
                  </div>
                  <div
                    className="btn btn-primary"
                    onClick={() => setDetailsIdx(6)}
                  >
                    Know more
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
      <Modal show={detailsIdx !== 0} onHide={() => setDetailsIdx(0)}>
        <Modal.Header closeButton>Details</Modal.Header>
        <Modal.Body>
          {detailsIdx === 1 && (
            <ul>
              <li>Location - Bellary, Karnataka</li>
              <li>Application - Coke Oven Process Primary Cooling</li>
              <li>Cooling capacity: 16198 kW</li>
              <li>Model: BS*4 unit</li>
              <li>Heat Source: Steam</li>
              <li>Shipment date: July 2007, November 2012</li>
            </ul>
          )}
          {detailsIdx === 2 && (
            <ul>
              <li>Location - Vadodara, Gujarat</li>
              <li>Application - Process Cooling</li>
              <li>Cooling capacity: 7,926kW</li>
              <li>Model: BS*2</li>
              <li>Heat Source: Steam</li>
              <li>Shipment date: September 2013</li>
            </ul>
          )}
          {detailsIdx === 3 && (
            <ul>
              <li>Location: Haridwar, Kolkata, Pune, Trichy</li>
              <li>Application- Process Cooling</li>
              <li>Cooling capacity: 886*4 = 3544kW</li>
              <li>Model: BDS*4 units</li>
              <li>Heat Source: Steam from PC fryer</li>
              <li>Shipment date: 2020</li>
            </ul>
          )}
          {detailsIdx === 4 && (
            <ul>
              <li>Location: Ramagundam, Telangana</li>
              <li>Application - Process Cooling</li>
              <li>Cooling capacity: 3516 kW</li>
              <li>Model: BDH</li>
              <li>Heat Source: hot water</li>
              <li>Shipment date: 2012</li>
            </ul>
          )}
          {detailsIdx === 5 && (
            <ul>
              <li>Location -Gurugram, Haryana</li>
              <li>Application - Comfort Cooling</li>
              <li>Cooling capacity 275MW</li>
              <li>Model: BE*8; BZHE*14; BZHE*11</li>
              <li>Heat source: Exhaust & Jacket Water, Natural Gas, Diesel</li>
              <li>Shipment date: April 2005</li>
            </ul>
          )}
          {detailsIdx === 6 && (
            <ul>
              <li>Location - Surat, Gujarat</li>
              <li>Application - Comfort Cooling</li>
              <li>Cooling capacity: 410 kW</li>
              <li>Model: BZ*2</li>
              <li>Heat Source: Natural gas</li>
              <li>Shipment date: 2005 & 2009</li>
            </ul>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
