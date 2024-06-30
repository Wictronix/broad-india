import React from "react";
import { Dropdown, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../assets/images/broad-logo.webp";

export default function NavbarComp() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 875);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
          height: "4rem",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(32px)",
          margin: isMobile ? "0.5rem 1rem" : "1rem 10rem 1rem 9rem",
          borderRadius: "1rem",
          padding: "1rem 2rem",
          display: "flex",
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
        {isMobile ? (
          <div onClick={() => setIsMenuOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-6 h-6"
              style={{ color: "black", height: "2rem" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#333",
            }}
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
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  border: "none",
                }}
              >
                <Dropdown.Item>
                  <Link
                    to="/vapAbsorptionChiller"
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    Vapour Absorption Chiller
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    to="/Chillers"
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    BROAD CCHP System
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
                    Magnetic Bearing Oil Free Chiller
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    to="/pump"
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    Pumpset
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
              to="/installations"
            >
              Installations
            </Link>
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
            <Link
              style={{
                marginLeft: "0.8rem",
                marginRight: "1.2rem",
                textDecoration: "none",
                cursor: "pointer",
                color: "#333",
              }}
              to="/broadGroup"
            >
              BROAD Group
            </Link>
            <Link
              style={{
                marginLeft: "0.8rem",
                marginRight: "1.2rem",
                textDecoration: "none",
                cursor: "pointer",
                color: "#333",
              }}
              to="/blogs-and-articles"
            >
              Blogs & Articles
            </Link>
            <Link
              style={{
                marginLeft: "0.8rem",
                marginRight: "1.2rem",
                textDecoration: "none",
                cursor: "pointer",
                color: "#333",
              }}
              to="/careers"
            >
              Careers
            </Link>
            <br />
            <div style={{ display: isMobile ? "none" : "block" }}>
              <Link to="/contactUs" className="btn btn-primary">
                Contact us
              </Link>
            </div>
          </div>
        )}
      </div>
      <Offcanvas
        show={isMenuOpen}
        onHide={() => setIsMenuOpen(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#333",
              flexDirection: "column",
            }}
          >
            <Link
              to="/"
              style={{
                marginRight: "1rem",
                textDecoration: "none",
                color: "#333",
                marginBottom: "1rem",
              }}
            >
              <h4>Home</h4>
            </Link>
            <h5
              style={{
                backgroundColor: "transparent",
                color: "#333",
                border: "none",
              }}
            >
              Products
            </h5>
            <Link
              to="/Chillers"
              style={{
                textDecoration: "none",
                color: "black",
                marginBottom: "0.5rem",
              }}
            >
              Vapour Absorption Chiller
            </Link>
            <Link
              to="/vapAbsorptionChiller"
              style={{
                textDecoration: "none",
                color: "black",
                marginBottom: "0.5rem",
              }}
            >
              BROAD CCHP System{" "}
            </Link>
            <Link
              to="/cchpSystem"
              style={{
                textDecoration: "none",
                color: "black",
                marginBottom: "0.5rem",
              }}
            >
              Magnetic Bearing Oil Free Chiller
            </Link>
            <Link
              to="/pump"
              style={{
                textDecoration: "none",
                color: "black",
                marginBottom: "0.5rem",
              }}
            >
              Pumpset
            </Link>
            <br />
            <h4>
              <Link
                to="/installations"
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginBottom: "0.5rem",
                }}
              >
                Installations
              </Link>
            </h4>
            <br />
            <Link
              style={{
                marginLeft: "0.8rem",
                marginRight: "1rem",
                marginBottom: "1rem",
                textDecoration: "none",
                color: "#333",
              }}
              to="/about"
            >
              <h4>About</h4>
            </Link>
            <Link
              style={{
                marginLeft: "0.8rem",
                marginRight: "1.2rem",
                marginBottom: "1rem",
                textDecoration: "none",
                cursor: "pointer",
                color: "#333",
              }}
              to="/broadGroup"
            >
              <h4>BROAD Group</h4>
            </Link>
            <Link
              style={{
                marginLeft: "0.8rem",
                marginRight: "1.2rem",
                marginBottom: "1rem",
                textDecoration: "none",
                cursor: "pointer",
                color: "#333",
              }}
              to="/blogs-and-articles"
            >
              <h4>Blogs & Articles</h4>
            </Link>
            <Link
              style={{
                marginLeft: "0.8rem",
                marginRight: "1.2rem",
                marginBottom: "1rem",
                textDecoration: "none",
                cursor: "pointer",
                color: "#333",
              }}
              to="/careers"
            >
              <h4>Careers</h4>
            </Link>
            <Link to="/contactUs" className="btn btn-primary">
              Contact us
            </Link>
            <br />
            <div style={{ display: isMobile ? "none" : "block" }}>
              <Link to="/contactUs" className="btn btn-primary">
                Contact us
              </Link>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
