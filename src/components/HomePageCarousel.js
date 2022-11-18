import React from "react";
import { Carousel } from "react-bootstrap";

import broadBG1 from "../assets/images/broad-bg-1.jpg";
import broadBG2 from "../assets/images/broad-bg-2.jpg";

function HomePageCarousel() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (window.innerHeight > window.innerWidth) setIsMobile(true);
  }, []);
  return (
    <div>
      <Carousel style={{ height: isMobile ? "80vh" : "default" }}>
        <Carousel.Item>
          <img
            src={broadBG1}
            alt="bg"
            style={{
              width: "100vw",
              height: isMobile ? "80vh" : "default",
              objectFit: "cover",
            }}
          />
          <Carousel.Caption>
            <div
              style={{
                padding: isMobile ? "0.5rem" : "1rem",
                backgroundImage:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
                borderRadius: "1rem",
              }}
            >
              <div
                style={{
                  fontSize: isMobile ? "2rem" : "4rem",
                  textTransform: "uppercase",
                }}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                For Humanity's Future
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={broadBG2}
            alt="bg"
            style={{
              width: "100vw",
              height: isMobile ? "80vh" : "default",
              objectFit: "cover",
            }}
          />
          <Carousel.Caption>
            <div
              style={{
                padding: "1rem",
                backgroundImage:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
                borderRadius: "1rem",
              }}
            >
              <div
                style={{
                  fontSize: isMobile ? "2rem" : "4rem",
                  textTransform: "uppercase",
                }}
              >
                A new world of cooling
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomePageCarousel;
