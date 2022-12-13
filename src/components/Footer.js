import React from "react";
import { Link } from "react-router-dom";

import wxLogo from "../assets/images/wxWhite.svg";

export default function Footer() {
  return (
    <div className="bg-black py-md-5">
      <div className="container" style={{ color: "#ccc" }}>
        <div className="row">
          <div className="col-md-4 mt-4">
            <div
              className="display-4 my-2"
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
          <div className="col-md-4 mb-4" style={{ textAlign: "center" }}>
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
          <div className="col-md-4" style={{ textAlign: "center" }}>
            <h5>BROAD India is a subsidiary of BROAD Group.</h5>
            <br />
            powered by
            <br />
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
