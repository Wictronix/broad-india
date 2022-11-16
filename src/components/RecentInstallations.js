import React from "react";

export default function RecentInstallations() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (window.innerHeight > window.innerWidth) setIsMobile(true);
  }, []);
  return (
    <div
      style={{
        width: "100%",
        marginBlock: "10rem",
        paddingBlock: "5rem",
        backgroundImage: "linear-gradient(to top, green, rgb(0, 200, 0)) ",
        padding: isMobile ? "0.5rem" : "2rem",
        color: "white",
      }}
    >
      <div
        className="display-5 container text-center"
        style={{ marginBottom: "5rem" }}
      >
        Recent Installations
      </div>
      <div className="row" style={{ marginInline: isMobile ? "0" : "4rem" }}>
        <div className="col-md-4">
          <div
            className="card mb-2"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
            data-aos="fade-right"
          >
            <div className="card-body">
              <img
                src="https://broadusa.com/broad/wp-content/uploads/2020/04/portfilio_mgm_features-400x400.jpg"
                alt="mgm"
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <br />
              <h4 style={{ marginTop: "1rem" }}>MGM National Harbor</h4>
              <p style={{ color: "rgba(255, 255, 255, 0.75)" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione, unde!
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card mb-2"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="card-body">
              <img
                src="https://broadusa.com/broad/wp-content/uploads/2020/04/portfilio-Central-Valley-Water-Reclamation-Facility-_feature-pic-400x400.jpg"
                alt="mgm"
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <br />
              <h4 style={{ marginTop: "1rem" }}>
                Central Valley Water Reclamation
              </h4>
              <p style={{ color: "rgba(255, 255, 255, 0.75)" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione, unde!
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card mb-2"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="card-body">
              <img
                src="https://broadusa.com/broad/wp-content/uploads/2020/04/prtofilio-whole-food2.jpg"
                alt="mgm"
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <br />
              <h4 style={{ marginTop: "1rem" }}>Whole Foods Store</h4>
              <p style={{ color: "rgba(255, 255, 255, 0.75)" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione, unde!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
