import React from "react";

export default function TrustedClient() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (window.innerHeight > window.innerWidth) setIsMobile(true);
  }, []);
  return (
    <div
      style={{
        marginBlock: "5rem",
        backgroundColor: "white",
        padding: "4rem",
      }}
    >
      <div className="display-5 text-center">Trusted Clients</div>
      <div
        className="row"
        style={{
          marginInline: isMobile ? 0 : "5rem",
          marginTop: "5rem",
        }}
      >
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="col-md-4"
          style={{
            display: "flex",
            justifyContent: isMobile ? "center" : "end",
          }}
        >
          <img
            src="https://broadusa.com/broad/wp-content/uploads/2020/02/marriott_logo.png"
            alt="mariot"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="col-md-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src="https://broadusa.com/broad/wp-content/uploads/2020/02/qualcomm-logo.png"
            alt="Qualcomm"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="col-md-4"
          style={{
            display: "flex",
            justifyContent: isMobile ? "center" : "start",
          }}
        >
          <img
            src="https://broadusa.com/broad/wp-content/uploads/2020/02/columbia_university_logo.png"
            alt="Columbia Uni"
          />
        </div>
      </div>
      <div className="row" style={{ marginInline: "5rem", marginTop: "5rem" }}>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="col-md-4"
          style={{
            display: "flex",
            justifyContent: isMobile ? "center" : "end",
          }}
        >
          <img
            src="https://broadusa.com/broad/wp-content/uploads/2020/02/princeton-university-logo2.png"
            alt="Princeton Uni"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="col-md-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src="https://broadusa.com/broad/wp-content/uploads/2020/02/Rutgers-University-logo.png"
            alt="Rutgers"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="col-md-4"
          style={{
            display: "flex",
            justifyContent: isMobile ? "center" : "start",
          }}
        >
          <img
            src="https://broadusa.com/broad/wp-content/uploads/2020/02/metro-vancover-logo.png"
            alt="MetroVancover"
          />
        </div>
      </div>
    </div>
  );
}
