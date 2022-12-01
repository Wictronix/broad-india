import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function Figures() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (window.innerHeight > window.innerWidth) setIsMobile(true);
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: isMobile ? "32rem" : "16rem",
        zIndex: "8",
      }}
    >
      <div
        className="shadow-sm"
        style={{
          margin: "5rem auto",
          width: "80%",
          height: "100%",
          borderRadius: "2rem",
          backgroundImage:
            "linear-gradient(to bottom, rgba(13, 110, 253, 0.8), rgba(13, 110, 253, 0.5))",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          color: "white",
        }}
      >
        <div>
          <div style={{ fontWeight: "600" }}>
            <div style={{ fontSize: "4rem", textAlign: "center" }}>
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div style={{ height: 100 }}>
                    {isVisible ? (
                      <>
                        <CountUp end={90} />
                      </>
                    ) : null}
                  </div>
                )}
              </VisibilitySensor>
            </div>
            <br />
            <div style={{ textAlign: "center" }}>Thosand+ trees Saved</div>
          </div>
        </div>
        <div>
          <div style={{ fontWeight: "600" }}>
            <div style={{ fontSize: "4rem", textAlign: "center" }}>
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div style={{ height: 100 }}>
                    {isVisible ? (
                      <>
                        <CountUp end={122} style={{ marginInline: "auto" }} />
                      </>
                    ) : null}
                  </div>
                )}
              </VisibilitySensor>
            </div>
            <br />
            <div style={{ textAlign: "center" }}>
              TCO2e Reduction in Carbon Footpring
            </div>
          </div>
        </div>
        <div>
          <div style={{ fontWeight: "600" }}>
            <div style={{ fontSize: "4rem", textAlign: "center" }}>
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div style={{ height: 100 }}>
                    {isVisible ? (
                      <>
                        <CountUp end={125} />
                      </>
                    ) : null}
                  </div>
                )}
              </VisibilitySensor>
            </div>
            <br />
            <div style={{ textAlign: "center" }}>Tons of oxygen saved</div>
          </div>
        </div>
      </div>
    </div>
  );
}
