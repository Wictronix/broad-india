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
    <div>
      <div className="display-5 text-center mb-5">Articles</div>
      <div className="row" style={{ marginInline: isMobile ? 0 : "5rem" }}>
        <div className="col-md-4">
          <div className="card mb-2">
            <div className="card-body">
              <img
                src="https://www.prysmiangroup.com/sites/default/files/thumbnails/image/banner-sustainable-energy-1150x650.png"
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
                Sustainablility in Action
              </h4>
              <p>
                Use as a basis for class discussion rather than to illustrate
                either effective or ineffective handling of an administrative
                situation. A real approach to sustainable development for higher
                life quality on the environment.
              </p>
              <a
                href="http://en.broad.com/Storage/article/d86c3db4c155464b9fe10dbf82db7c7f.pdf"
                className="btn btn-primary"
              >
                Read more
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-2">
            <div className="card-body">
              <img
                src="https://m.economictimes.com/thumb/msid-69127844,width-1200,height-900,resizemode-4,imgsize-347903/construction-site-generators-types-features-of-generators-used-at-construction-sites.jpg"
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
                Rethink Conventinal Construction{" "}
              </h4>
              <p>
                Traditional construction practices can be costly, inefficient,
                and detrimental on the environment, In this article, Zhang Yue,
                CEO, Broad group reflectes how industry can change.
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
                src="https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(68)(134).jpg"
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
                World's Top 25 eco Innovators{" "}
              </h4>
              <p>
                Fortune presents our inaugural list of the World's Top 25
                Eco-Innovators. To identify them, we surveyed dozens of experts
                in the sustainability world. Here's the report article.
              </p>
              <Link to="/article/4" className="btn btn-primary">
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
