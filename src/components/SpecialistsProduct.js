import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "../global.css";

export default function SpecialistsProduct() {
  const navigate = useNavigate();
  const [mouseIdx, setMouseIdx] = React.useState(-1);
  return (
    <div>
      <Container>
        <div className="display-5 mb-5 text-center">
          Specialists in Absorption Chillers
        </div>
        <p className="text-center">
          A cost-effective cooling and heating solution that can better utilize
          existing thermal energy sources
        </p>
        <div className="mt-5">
          <div>
            <div className="row">
              <div
                className="col-md-3"
                style={{ paddingRight: "1rem", marginBottom: "1rem" }}
              >
                <div
                  className="shadow susCard"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  style={{
                    height: "26rem",
                    borderRadius: "1rem",
                    padding: "1rem 2rem",
                    backgroundColor: "#fff",
                    transform: mouseIdx === 1 ? "scale(1.1)" : "scale(1)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setMouseIdx(1)}
                  onMouseLeave={() => setMouseIdx(-1)}
                  onClick={() => navigate("/nonElectricChiller")}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="https://broadusa.com/broad/wp-content/uploads/2020/04/home_DFA.jpg"
                      alt="NEC"
                      style={{
                        width: "100%",
                        height: "auto",
                        marginBottom: "8px",
                      }}
                    />
                    <h2>Non-Electric Chillers</h2>
                    <p>
                      Building Central A/C System &amp; Domestic Hot Water.
                      Providing cooling with fuel saving caused by 4 times' less
                      energy conversions.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-md-3"
                style={{ paddingRight: "1rem", marginBottom: "1rem" }}
              >
                <div
                  className="shadow"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  style={{
                    height: "26rem",
                    borderRadius: "1rem",
                    padding: "1rem 2rem",
                    backgroundColor: "#fff",
                    transform: mouseIdx === 3 ? "scale(1.1)" : "scale(1)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setMouseIdx(3)}
                  onMouseLeave={() => setMouseIdx(-1)}
                  onClick={() => navigate("/cchpSystem")}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="https://broadusa.com/broad/wp-content/uploads/2020/04/home_CCHP-300x195.jpg"
                      alt="bcs"
                      style={{
                        width: "100%",
                        height: "auto",
                        marginBottom: "8px",
                      }}
                    />
                    <h2>BROAD CCHP System</h2>
                    <p>
                      Achieves Zero Emission with Exhaust Heat as Power Source -
                      The CCHP System powered by exhaust heat from generator.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-3"
                style={{ paddingRight: "1rem", marginBottom: "1rem" }}
              >
                <div
                  className="shadow"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  style={{
                    height: "26rem",
                    borderRadius: "1rem",
                    padding: "1rem 2rem",
                    backgroundColor: "#fff",
                    transform: mouseIdx === 4 ? "scale(1.1)" : "scale(1)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setMouseIdx(4)}
                  onMouseLeave={() => setMouseIdx(-1)}
                  onClick={() => navigate("/peChillers")}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="https://broadusa.com/broad/wp-content/uploads/2020/04/home_power-efficient-chillers.jpg"
                      alt="pec"
                      style={{
                        width: "100%",
                        height: "auto",
                        marginBottom: "8px",
                      }}
                    />
                    <h2>Power Efficient Chiller</h2>
                    <p>
                      Cooling capacity ranging from 150 ton to 2000 ton, High
                      COP (6.5) and excellent IPLV ( maximum 13.26)
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-3"
                style={{ paddingRight: "1rem", marginBottom: "1rem" }}
              >
                <div
                  className="shadow"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  style={{
                    height: "26rem",
                    borderRadius: "1rem",
                    padding: "1rem 2rem",
                    backgroundColor: "#fff",
                    transform: mouseIdx === 2 ? "scale(1.1)" : "scale(1)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setMouseIdx(2)}
                  onMouseLeave={() => setMouseIdx(-1)}
                  onClick={() => navigate("/absorptionChiller")}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="https://broadusa.com/broad/wp-content/uploads/2020/05/WeChat-Image_20200513110329-300x207.jpg"
                      alt="ahp"
                      style={{
                        width: "85%",
                        height: "auto",
                        marginBottom: "8px",
                      }}
                    />
                    <h2>Absorption Heat Pumps</h2>
                    <p>
                      Pumping Heat from lower Temperature to Medium Temperature
                      using High Grade Energy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
