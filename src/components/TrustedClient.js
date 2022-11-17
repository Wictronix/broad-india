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
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/JSW_Group_logo.svg/1200px-JSW_Group_logo.svg.png"
            alt="JSW"
            style={{ width: "40%" }}
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="col-md-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src="https://download.logo.wine/logo/Indian_Oil_Corporation/Indian_Oil_Corporation-Logo.wine.png"
            alt="IOCL"
            style={{ width: "50%" }}
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
            src="https://jpplaschem.sg/img/supreme-petrochem/supreme-petrochem-logo.jpg"
            alt="supreme"
            style={{ width: "50%", objectFit: "cover" }}
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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/1200px-ITC_Limited_Logo.svg.png"
            alt="itc"
            style={{ width: "35%", objectFit: "cover" }}
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="col-md-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src="https://www.gfl.co.in/assets/images/gfl-logo-new-11-11.png"
            alt="gfl"
            style={{ width: "50%", objectFit: "contain" }}
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
            src="https://logos-world.net/wp-content/uploads/2020/12/Hero-MotoCorp-Emblem.png"
            alt="hero"
            style={{ width: "50%", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
