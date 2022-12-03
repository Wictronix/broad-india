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
          marginInline: isMobile ? "3rem" : "5rem",
          marginTop: "5rem",
        }}
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.ntpc.co.in/"
          data-aos="fade-up"
          data-aos-delay="100"
          className="col-md-4"
          style={{
            display: "flex",
            justifyContent: isMobile ? "center" : "end",
            marginBottom: isMobile ? "2rem" : 0,
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/National_Thermal_Power_logo.svg/1200px-National_Thermal_Power_logo.svg.png"
            alt="NTPC"
            style={{ width: isMobile ? "100%" : "50%", objectFit: "contain" }}
          />
        </a>

        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.itcportal.com/"
          data-aos="fade-up"
          data-aos-delay="200"
          className="col-md-4"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: isMobile ? "2rem" : 0,
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/1200px-ITC_Limited_Logo.svg.png"
            alt="itc"
            style={{
              width: isMobile ? "100%" : "35%",
              objectFit: "contain",
              marginBottom: "0.5rem",
            }}
          />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://iocl.com/"
          data-aos="fade-up"
          data-aos-delay="300"
          className="col-md-4"
          style={{
            display: "flex",
            justifyContent: isMobile ? "center" : "start",
          }}
        >
          <img
            src="https://download.logo.wine/logo/Indian_Oil_Corporation/Indian_Oil_Corporation-Logo.wine.png"
            alt="IOCL"
            style={{ width: isMobile ? "100%" : "70%" }}
          />
        </a>
      </div>
      <div
        className="row"
        style={{ marginInline: isMobile ? "3rem" : "5rem", marginTop: "5rem" }}
      >
        <a
          rel="noreferrer"
          target="_blank"
          href="https://bhilosa.com/"
          data-aos="fade-up"
          data-aos-delay="400"
          className="col-md-4"
          style={{
            display: "flex",
            justifyContent: isMobile ? "center" : "end",
            marginBottom: isMobile ? "2rem" : 0,
          }}
        >
          <img
            src="http://bhilosa.com/wp-content/uploads/2022/06/bhilosa-logo-01-1.png"
            alt="gfl"
            style={{
              width: isMobile ? "100%" : "50%",
              objectFit: "contain",
              marginBottom: "0.5rem",
            }}
          />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.jsw.in/"
          data-aos="fade-up"
          data-aos-delay="500"
          className="col-md-4"
          style={{
            display: "flex",
            justifyContent: isMobile ? "center" : "center",
            marginBottom: isMobile ? "2rem" : 0,
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/JSW_Group_logo.svg/1200px-JSW_Group_logo.svg.png"
            alt="JSW"
            style={{ width: isMobile ? "80%" : "40%", objectFit: "contain" }}
          />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.dlf.in/"
          data-aos="fade-up"
          data-aos-delay="600"
          className="col-md-4"
          style={{
            display: "flex",
            justifyContent: isMobile ? "center" : "start",
          }}
        >
          <img
            src="https://animationvisarts.com/wp-content/uploads/2016/10/dlf-logo-design.jpg"
            alt="dlf"
            style={{
              width: isMobile ? "100%" : "50%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </a>
      </div>
    </div>
  );
}
