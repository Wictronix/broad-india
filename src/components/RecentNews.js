import React from "react";
import { Link } from "react-router-dom";

export default function RecentNews() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (window.innerHeight > window.innerWidth) setIsMobile(true);
  }, []);
  return (
    <div style={{ padding: isMobile ? "0" : "5rem" }}>
      <div className="display-5 text-center mb-5">Articles</div>
      <div className="row" style={{ marginInline: isMobile ? 0 : "5rem" }}>
        <div className="col-md-4">
          <div className="card mb-2">
            <div className="card-body">
              <img
                src="https://broadusa.com/broad/wp-content/uploads/2020/11/trainning-800x600.jpg"
                alt=""
                style={{
                  width: "100%",
                  height: "16rem",
                  objectFit: "cover",
                }}
              />
              <h4
                style={{
                  marginBlock: "1rem",
                  fontWeight: "600",
                }}
              >
                Job and Career
              </h4>
              <p>
                Job Title: HVAC Engineers (Hackensack, NJ) Job duties:
                Install/inspect/analyze large chillers/HVAC system
                Service/diagnose/analyze/repair products/system with experience
                in chiller & CCHP, HVAC, green energy technology.
              </p>
              <Link to="/article/1" className="btn btn-primary">
                Read more
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-2">
            <div className="card-body">
              <img
                src="https://broadusa.com/broad/wp-content/uploads/2020/04/newsWhite-Paper-on-Waste-Wa.jpg"
                alt=""
                style={{
                  width: "100%",
                  height: "16rem",
                  objectFit: "cover",
                }}
              />
              <h4
                style={{
                  marginBlock: "1rem",
                  fontWeight: "600",
                }}
              >
                Absorption Chillers
              </h4>
              <p>
                There are mandatory needs and methods informed to reduce thermal
                impacts from municipal wastewater treatment plant discharges to
                surface water. The goal set for the reduction in effluent
                temperature from the Waste Water Treatment Plants
              </p>
              <Link to="/article/2" className="btn btn-primary">
                Read more
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-2">
            <div className="card-body">
              <img
                src="https://broadusa.com/broad/wp-content/uploads/2020/04/newsNatural-Refrigerant-H2.jpg"
                alt=""
                style={{
                  width: "100%",
                  height: "16rem",
                  objectFit: "cover",
                }}
              />
              <h4
                style={{
                  marginBlock: "1rem",
                  fontWeight: "600",
                }}
              >
                Environment Friendly
              </h4>
              <p>
                Buildings account for most electricity consumed in the world
                today, with air conditioning systems within buildings accounting
                for over 30% of total consumption1. Compared to conventional
                electric air conditioning, natural gas thermal absorption
                technology
              </p>
              <Link to="/article/3" className="btn btn-primary">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link
          to="/article/more"
          className="btn btn-outline-primary px-5 my-5 mx-auto"
        >
          More articles
        </Link>
      </div>
    </div>
  );
}
