import React from "react";
import { Button, Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import NavbarComp from "../../components/NavbarComp";

export default function Seminar() {
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
            "url('https://broadusa.com/broad/wp-content/uploads/2020/04/news-broad-absorption-chill.jpg')",
          backgroundOrigin: "center",
          backgroundAttachment: "fixed",
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
            className="display-2 ms-5 mb-4"
            style={{
              position: "absolute",
              bottom: 0,
              // margin: "5rem",
              fontWeight: "700",
            }}
            data-aos="fade-up"
          >
            2021 Service training schedule
          </div>
        </div>
      </div>
      <Container>
        <br />
        <h1>BROAD U.S.A. Complete Chiller Service Webinar Schedule on 2022</h1>
        <br />
        <ol>
          <li>
            Tuesday, April 12, 2022; Absorption Chiller Principle and BROAD
            Chiller Configuration
          </li>
          <li>Tuesday, May 10, 2022; Control Sequence and Interface</li>
          <li> Tuesday, June 14, 2022; Chiller Operation and Maintenance</li>
          <li>Tuesday, July 12, 2022; Chiller Troubleshooting and Diagnose</li>
        </ol>
        <br />
        <div>
          Webinar time: 2:00 pm ~ 3:30 pm (Eastern Time), 11:00 pm ~ 12:30 pm
          (Pacific Time)
        </div>
        <p>
          BROAD announce the webinar series to address chiller service for
          existing customers, and anyone interested in absorption chillers safe
          operation of buildings. Below is the record for the webinars. If you
          have any questions, please email service@broadusa.com, looking forward
          to seeing you at the next webinar or personal training.
        </p>
      </Container>
      <Footer />
    </div>
  );
}
