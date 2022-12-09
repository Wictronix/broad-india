import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

export default function CTA() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col rounded shadow bg-light py-3 px-2 px-md-3">
          <div className="d-flex justify-content-center">
            <h2>
              <Typewriter
                options={{ loop: true }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "World leaders in <span class='text-primary'>Absorption Chiller Market.</span>"
                    )
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(
                      "We offer <span class='text-primary'>power efficient Oil Free Centrifugal Chillers.</span>"
                    )
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                }}
              />
            </h2>
          </div>
          <hr />
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="d-flex flex-column flex-md-row gap-4">
              <div className="d-flex mb-1">
                <a
                  href="mailto:akshay@broad.net"
                  className=" text-decoration-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
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
                  akshay@broad.net
                </a>
              </div>
              <div className="d-flex">
                <a href="tel:9427851584" className=" text-decoration-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
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
                <a href="tel:01244012824" className=" text-decoration-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
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
            <div className="d-flex flex-column flex-md-row align-items-center mt-4 mt-md-0">
              <h6 className="text-muted">
                Do you have a project we can help with ? &nbsp;&nbsp;
              </h6>
              <Link to="/contactUs" className="btn btn-primary h5">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
