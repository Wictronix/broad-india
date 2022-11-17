import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div
      className="bg-black py-md-5"
      // style={{
      //   width: "100%",
      //   backgroundColor: "black",
      //   padding: "5rem",
      //   color: "white",
      //   display: "flex",
      //   justifyContent: "space-between",
      //   alignItems: "center",
      // }}
    >
      <div className="container" style={{ color: "#ccc" }}>
        <div className="row">
          <div className="col-md-4">
            <div className="display-4">Broad India</div>
            <div className="d-flex">Social links</div>
          </div>
          <div className="col-md-4">
            <h4>Links</h4>
            <ul>
              <li>
                <Link
                  to="/about"
                  style={{ color: "#ccc", textDecoration: "none" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  style={{ color: "#ccc", textDecoration: "none" }}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  style={{ color: "#ccc", textDecoration: "none" }}
                >
                  Privacy and Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  style={{ color: "#ccc", textDecoration: "none" }}
                >
                  Terms and conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Broad India is a subsidiary of Broad Group.</h5>
            <br />
            Website developed by{" "}
            <a href="https://www.wictronix.com">WictroniX</a> 2022
          </div>
        </div>
      </div>
    </div>
  );
}
