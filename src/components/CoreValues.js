import React from "react";

export default function CoreValues() {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        if (window.innerHeight > window.innerWidth) setIsMobile(true);
    }, []);
    return (
        <div>
            <div className="display-5 text-center">Core Values</div>
            <div
                className="row"
                style={{
                    marginInline: isMobile ? 0 : "8rem",
                    marginTop: "4rem",
                }}
            >
                <div className="col-md-4">
                    <div className="card shadow" data-aos="fade-left">
                        <div
                            className="card-body"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-evenly",
                                alignItems: "center",
                                paddingBlock: "2rem",
                            }}
                        >
                            <div
                                style={{
                                    height: "128px",
                                    width: "128px",
                                    borderRadius: "100%",
                                    backgroundColor: "green",
                                    marginInline: "auto",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                    style={{ color: "white", margin: "12px" }}
                                >
                                    <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                                </svg>
                            </div>
                            <div
                                style={{
                                    fontSize: "1.6rem",
                                    fontWeight: "600",
                                    marginTop: "1em",
                                }}
                            >
                                Environment
                            </div>
                            <p
                                style={{
                                    paddingInline: "0.5rem",
                                    textAlign: "center",
                                    marginBlock: "2rem",
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Optio, tempora. Eveniet
                                molestias tempora laboriosam in aut, tempore
                                porro cupiditate beatae!
                            </p>
                            <div className="btn btn-success">Read more</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div
                        className="card shadow"
                        data-aos="fade-left"
                        data-aos-delay="100"
                    >
                        <div
                            className="card-body"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-evenly",
                                alignItems: "center",
                                paddingBlock: "2rem",
                            }}
                        >
                            <div
                                style={{
                                    height: "128px",
                                    width: "128px",
                                    borderRadius: "100%",
                                    backgroundColor: "blue",
                                    marginInline: "auto",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                    style={{ color: "white", margin: "20px" }}
                                >
                                    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                                </svg>
                            </div>
                            <div
                                style={{
                                    fontSize: "1.6rem",
                                    fontWeight: "600",
                                    marginTop: "1em",
                                }}
                            >
                                Humanity
                            </div>
                            <p
                                style={{
                                    paddingInline: "0.5rem",
                                    textAlign: "center",
                                    marginBlock: "2rem",
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Optio, tempora. Eveniet
                                molestias tempora laboriosam in aut, tempore
                                porro cupiditate beatae!
                            </p>
                            <div className="btn btn-primary">Read more</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div
                        className="card shadow"
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        <div
                            className="card-body"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-evenly",
                                alignItems: "center",
                                paddingBlock: "2rem",
                            }}
                        >
                            <div
                                style={{
                                    height: "128px",
                                    width: "128px",
                                    borderRadius: "100%",
                                    backgroundColor: "orange",
                                    marginInline: "auto",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                    style={{ color: "white", margin: "20px" }}
                                >
                                    <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                                </svg>
                            </div>
                            <div
                                style={{
                                    fontSize: "1.6rem",
                                    fontWeight: "600",
                                    marginTop: "1em",
                                }}
                            >
                                Our Customers
                            </div>
                            <p
                                style={{
                                    paddingInline: "0.5rem",
                                    textAlign: "center",
                                    marginBlock: "2rem",
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Optio, tempora. Eveniet
                                molestias tempora laboriosam in aut, tempore
                                porro cupiditate beatae!
                            </p>
                            <div className="btn btn-warning">Read more</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
