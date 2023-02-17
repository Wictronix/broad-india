import React from "react";
import { Link } from "react-router-dom";

import wxLogo from "../assets/images/wxWhite.svg";

export default function Footer() {
  return (
    <div className="bg-black pt-md-4">
      <div className="container" style={{ color: "#ccc" }}>
        <div className="row">
          <div className="col-md-3">
            <div
              className="display-4 mb-2"
              style={{
                display: "flex",
                justifyContent: "center",
                filter: "brightness(0) invert(1)",
              }}
            >
                <img
                src={require("../assets/images/BROAD INDIA.png")}
                alt="bi"
                style={{ height: "120px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="d-flex mb-5">
                <a
                  href="https://www.facebook.com/BROADAIRINDIA?mibextid=ZbWKwL"
                  className="me-4"
                >
                  <img
                    src={require("../assets/images/facebook.png")}
                    alt="fb"
                    style={{ height: "24px" }}
                  />
                </a>
                <a
                  href="https://instagram.com/broad_india?igshid=MDM4ZDc5MmU="
                  className="me-4"
                >
                  <img
                    src={require("../assets/images/instagram.png")}
                    target="_blank"
                    rel="noreferrer"
                    alt="insta"
                    style={{ height: "24px" }}
                  />
                </a>
                <a
                  href="https://youtube.com/channel/UCVaHso3cFpo0kQn2uTo1jtA"
                  target="_blank"
                  rel="noreferrer"
                  className="me-4"
                >
                  <img
                    src={require("../assets/images/youtube.png")}
                    target="_blank"
                    rel="noreferrer"
                    alt="yt"
                    style={{ height: "24px" }}
                  />
                </a>
                <a
                  href="http://www.linkedin.com/in/broad-india"
                  target="_blank"
                  rel="noreferrer"
                  className="me-4"
                >
                  <img
                    src={require("../assets/images/linkedin.png")}
                    target="_blank"
                    rel="noreferrer"
                    alt="yt"
                    style={{ height: "24px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4 text-white lh-lg">
            <h4>Links</h4>
            <div>
              <div>
                <Link
                  to="/about"
                  style={{ color: "#ccc", textDecoration: "none" }}
                >
                  About
                </Link>
              </div>
              <div>
                <Link
                  to="/about"
                  style={{ color: "#ccc", textDecoration: "none" }}
                >
                  FAQ
                </Link>
              </div>
              <div>
                <Link
                  to="/about"
                  style={{ color: "#ccc", textDecoration: "none" }}
                >
                  Privacy and Policy
                </Link>
              </div>
              <div>
                <Link
                  to="/about"
                  style={{ color: "#ccc", textDecoration: "none" }}
                >
                  Terms and conditions
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4 text-white lh-lg">
            <h4>Contact Us</h4>
            <div className="gap-4">
              <div className="d-flex mb-1">
                <a
                  href="mailto:info@broadindia.com?cc=akshay@broad.net"
                  className="text-decoration-none text-light"
                  target="_blank" 
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="text-primary"
                    style={{ height: "24px", marginRight: "1rem" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  info@broadindia.com
                </a>
              </div>
              <div className="d-flex">
                <a href="tel:9427851584"target="_blank"  rel="noreferrer" className=" text-decoration-none text-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="text-primary"
                    style={{ height: "24px", marginRight: "1rem" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  9427851584
                </a>
              </div>
              <div className="d-flex">
                <a href="tel:01244012824" target="_blank"  rel="noreferrer" className="text-light text-decoration-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="text-primary"
                    style={{ height: "24px", marginRight: "1rem" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  01244012824
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{ textAlign: "center" }}>
            <h5>
              Broad Air Conditioning Pvt. Ltd. (Broad India) is a subsidiary of
              BROAD Group.
            </h5>
            <br />
            powered by
            <br />
            <a
              href="https://www.wictronix.com"
              target="_blank"
              rel="noreferrer"
              className="my-2"
            >
              <img src={wxLogo} alt="WictroniX" style={{ height: "40px" }} />
            </a>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
