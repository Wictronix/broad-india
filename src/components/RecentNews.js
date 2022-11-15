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
            <div
                className="row"
                style={{ marginInline: isMobile ? 0 : "5rem" }}
            >
                <div className="col-md-4">
                    <div className="card" data-aos="fade-up">
                        <div className="card-body">
                            <img
                                src="http://picsum.photos/seed/n1/400"
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
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vel, accusamus.
                            </p>
                            <Link to="/article" className="btn btn-primary">
                                Read more
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" data-aos="fade-up">
                        <div className="card-body">
                            <img
                                src="http://picsum.photos/seed/n2/400"
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
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vel, accusamus.
                            </p>
                            <Link to="/article" className="btn btn-primary">
                                Read more
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" data-aos="fade-up">
                        <div className="card-body">
                            <img
                                src="http://picsum.photos/seed/n3/400"
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
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vel, accusamus.
                            </p>
                            <Link to="/article" className="btn btn-primary">
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
                    to="/article"
                    className="btn btn-outline-primary px-5 my-5 mx-auto"
                >
                    More articles
                </Link>
            </div>
        </div>
    );
}
