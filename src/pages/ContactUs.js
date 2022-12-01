import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";

import bg from "../assets/images/contactBG.jpg";

export default function ContactUs() {
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
          height: "75vh",
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
            Contact Us
          </div>
        </div>
      </div>
      <Container
        style={{
          marginBlock: "5rem",
        }}
      >
        <div className="display-6 mb-5">We're Here to Help</div>
        <div className="row">
          <div className="col-md-9">
            <ContactForm />
          </div>
          <div className="col-md-3">
            <div className="card mx-2">
              <div className="card-header">Contact Details</div>
              <div className="card-body">
                <h3>BROAD India</h3>
                <div></div>
                <br />
                <div className="d-flex mb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    style={{ height: "24px", marginRight: "1rem" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <a href="mailto:akshay@broad.net">akshay@broad.net</a>
                </div>
                <div className="d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    style={{ height: "24px", marginRight: "1rem" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>

                  <div>+91 9427851584</div>
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
