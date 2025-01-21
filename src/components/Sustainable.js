import React from "react";

export default function Sustainable() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (window.innerHeight > window.innerWidth) setIsMobile(true);
  }, []);
  return (
    <div
      style={{
        height: isMobile ? "220vh" : "120vh",
        width: "100%",
        marginBlock: "5rem",
        backgroundImage: "url('http://picsum.photos/id/10/1920/1440')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginTop: isMobile ? "1rem" : "5rem",
          height: isMobile ? "min-content" : "60%",
          width: isMobile ? "90%" : "80%",
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(32px)",
          borderRadius: "2rem",
          padding: isMobile ? "2rem 0.5rem" : "2rem",
          overflow: "hidden",
        }}
      >
        <div className="display-6 text-center">
          Leading the <span style={{ color: "green" }}>Green revolution</span>{" "}
          with sustainable HVAC solutions
        </div>
        <p
          style={{
            margin: isMobile ? "1rem" : "2rem 4rem",
            marginTop: "5rem",
            fontSize: "1rem",
          }}
        >
          Sustainable industrial development guarantees the conservative and
          efficient use of resources. Manufacturers must optimize the supply
          chain, analyzing the extraction of raw materials, production of
          components, design of products, and organization of return markets, to
          achieve resource productivity. BROAD India focuses on introducing the
          next generation of sustainable HVAC solutions to enhance the planet's
          well-being. BROAD builds energy-efficient absorption chillers that
          reduce carbon emissions. BROAD India realizes this vision and delivers
          clean, green solutions.
        </p>
        <div className="row m-md-5">
          <div
            className="col-md-4 mb-2"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              style={{ color: "green", height: "5rem" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
              />
            </svg>
            <br />
            <div>Reducing Carbon Footprint</div>
          </div>
          <div
            className="col-md-4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              style={{ color: "green", height: "5rem" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>

            <br />
            <div>Waste reduction</div>
          </div>
          <div
            className="col-md-4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              style={{ color: "green", height: "5rem" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
              />
            </svg>

            <br />
            <div>Positive Global Impact</div>
          </div>
        </div>
      </div>
    </div>
  );
}
