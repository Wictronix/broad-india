import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../assets/images/broad-logo.png";

export default function NavbarComp() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (window.innerHeight > window.innerWidth) setIsMobile(true);
  }, []);

  return (
    <div
      style={{
        zIndex: "10",
        position: "fixed",
        top: "0",
        width: "100vw",
      }}
    >
      <div
        className="shadow"
        style={{
          height: isMobile ? "8rem" : "4rem",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(32px)",
          margin: isMobile ? "0.5rem 1rem" : "1rem 10rem",
          borderRadius: "1rem",
          padding: "1rem 2rem",
          display: isMobile ? "block" : "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        data-aos="fade-down"
      >
        <Link
          style={{
            fontSize: "1.2rem",
            fontWeight: "600",
            textDecoration: "none",
            color: "black",
            display: "flex",
            alignItems: "center",
          }}
          data-aos="fade-right"
          to="/"
        >
          <img
            src={logo}
            alt="logo"
            style={{ height: "3rem", marginRight: "1rem" }}
          />
          <div style={{ marginTop: "0.2rem" }}>BROAD India</div>
        </Link>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#333",
          }}
          data-aos="fade-left"
        >
          <Link
            to="/"
            style={{
              marginRight: "1rem",
              textDecoration: "none",
              color: "#333",
            }}
          >
            Home
          </Link>
          <Dropdown>
            <Dropdown.Toggle
              style={{
                backgroundColor: "transparent",
                color: "#333",
                border: "none",
              }}
            >
              Products
            </Dropdown.Toggle>
            <Dropdown.Menu
              className="shadow"
              style={{
                margin: "1rem",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                border: "none",
              }}
            >
              <Dropdown.Item>
                <Link
                  to="/absorptionChiller"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Absorption Chiller
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to="/peChillers"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Power efficient Chiller
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to="/peChillers"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Air Quality{" "}
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to="/peChillers"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  AirPro mask
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to="/peChillers"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Broad NPI Facility
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle
              style={{
                backgroundColor: "transparent",
                color: "#333",
                border: "none",
              }}
            >
              Services
            </Dropdown.Toggle>
            <Dropdown.Menu
              className="shadow"
              style={{
                margin: "1rem",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                border: "none",
              }}
            >
              <Dropdown.Item>
                <Link
                  to="/installations"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Installations
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to="/installations"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Service Chiller Webinar
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link
            style={{
              marginLeft: "0.8rem",
              marginRight: "1rem",
              textDecoration: "none",
              color: "#333",
            }}
            to="/about"
          >
            About
          </Link>
          <div
            style={{
              marginLeft: "0.8rem",
              marginRight: "1.2rem",
              textDecoration: "none",
              color: "green",
              cursor: "pointer",
            }}
            onClick={() => {
              window.location.href = "http://en.broad.com/";
            }}
          >
            Broad Group
          </div>
          <br />
          <div style={{ display: isMobile ? "none" : "block" }}>
            <Button onClick={() => (window.location = "/contactUs")}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
