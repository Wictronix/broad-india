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
        backgroundImage:
          "linear-gradient(to top, rgb(13, 80, 253), rgb(13, 110, 253)) ",
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
            <div className="card-body" style={{ minHeight: "500px" }}>
              <img
                src="https://www.jswsteel.in/sites/default/files/assets/cache/images//facilitiesvijayanagarsection41-resize-552x290-a7542dd51f-3f1af835a4930653.png"
                alt="jsw"
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "1",
                  objectFit: "cover",
                }}
              />
              <br />
              <h4 style={{ marginTop: "1rem" }}>JSW Bellary</h4>
              <p style={{ color: "rgba(255, 255, 255, 0.75)" }}>
                The JSW group is amongst the leading conglomerates in India,
                with presence across the vital sectors of the Indian economy.
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
            <div className="card-body" style={{ minHeight: "500px" }}>
              <img
                src="https://www.constructionweekonline.in/cloud/2021/11/24/StFDepyN-IOCL-6.jpg"
                alt="iocl"
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "1",
                  objectFit: "cover",
                }}
              />
              <br />
              <h5 style={{ marginTop: "1rem" }}>
                Indian Oil Corporation Vadodra, Gujarat
              </h5>
              <p style={{ color: "rgba(255, 255, 255, 0.75)" }}>
                Indian Oil is India's flagship national oil company with
                business interests straddling the entire hydrocarbon value
                chain.
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
            <div className="card-body" style={{ minHeight: "500px" }}>
              <img
                src="https://www.itcportal.com/images/cigarette-video.jpg"
                alt="itc"
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "1",
                  objectFit: "cover",
                }}
              />
              <br />
              <h4 style={{ marginTop: "1rem" }}>ITC</h4>
              <p style={{ color: "rgba(255, 255, 255, 0.75)" }}>
                ITC group is one biggest business house in India. BROAD will
                supply VAM for their 4 plants. Application- Process Cooling
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
