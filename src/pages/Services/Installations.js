import React from "react";
import { Container } from "react-bootstrap";
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
                  with presence across the vital sectors of the Indian economy.
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
                <h4 className="card-title">Indian Oil Corporation, Vadodra</h4>
                <div className="card-text">
                  Indian Oil is India's flagship national oil company with
                  business interests straddling the entire hydrocarbon value
                  chain.
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://www.itcportal.com/images/new-home-img/homeBannerImg3.jpg"
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
                  supply VAM for their 4 plants. Application- Process Cooling
                  Location: Haridwar, Kolkata, Pune, Trichy
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
                src="https://images.moneycontrol.com/static-mcnews/2020/06/SUPREME-PETROCHEM.jpg"
                alt="supreme petro"
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "1",
                  objectFit: "cover",
                }}
              />
              <div className="card-body">
                <h4 className="card-title">Supreme Petrochemical Ltd.</h4>
                <div className="card-text">
                  Supreme Petrochem Ltd is India's largest producer and exporter
                  of polystyrene polymer Application- Process Cooling Location:
                  Roha Mumbai/
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
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
