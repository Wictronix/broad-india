import React from "react";
import { Link } from "react-router-dom";

import wxLogo from "../assets/images/wxWhite.svg";

export default function Footer() {
  return (
    <div
      className="bg-black py-md-5"
      // style={{
      //   width: "100%",
      //   backgroundColor: "black",s
      //   padding: "5rem",
      //   color: "white",
      //   display: "flex",
      //   justifyContent: "space-between",
      //   adivgnItems: "center",
      // }}
    >
      <div className="container" style={{ color: "#ccc" }}>
        <div className="row">
          <div className="col-md-4">
            <div className="display-4 my-2">
              <img
                src={require("../assets/images/BROAD INDIA.png")}
                alt="bi"
                style={{ height: "120px" }}
              />
            </div>
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
                  alt="insta"
                  style={{ height: "24px" }}
                />
              </a>
              <a
                href="https://youtube.com/channel/UCVaHso3cFpo0kQn2uTo1jtA"
                className="me-4"
              >
                <img
                  src={require("../assets/images/youtube.png")}
                  alt="yt"
                  style={{ height: "24px" }}
                />
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <h4>Links</h4>
            <div>
              <div>
                <div
                  to="/about"
                  style={{ color: "#ccc", textDecoration: "none" }}
                >
                  About
                </div>
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
                  Privacy and Podivcy
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
          <div className="col-md-4">
            <h5>Broad India is a subsidiary of Broad Group.</h5>
            <br />
            powered by
            <br />
            <br />
            <a href="https://www.wictronix.com" className="my-2">
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
