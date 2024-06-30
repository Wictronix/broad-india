import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";
import CareerCard from "../components/CareerCard";
import bg from "../assets/images/careers.jpg";

export default function Careers() {

  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavbarComp />
      <div
        style={{
          width: "100%",
          height: "75vh",
          backgroundImage: `url(${bg})`,
          // backgroundOrigin: "initial",
          // backgroundAttachment: "fixed",
          backgroundPosition: "top",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            position: "relative",
          }}
        >
          <div
            className="display-2"
            style={{
              position: "absolute",
              bottom: 0,
              left: "5rem",
              margin: "5rem",
              fontWeight: "700",
            }}
            data-aos="fade-up"
          >
            Career
          </div>
        </div>
      </div>
      <Container
        style={{
          marginBlock: "5rem",
        }}
      >
        <div className="d-grid gap-5">
          <h2 className="text-center">Join Our Global Team !</h2>
          <div className="d-grid d-md-flex justify-content-center gap-3">
            <CareerCard position={"Service Engineer"} location={"Surat"} />
            <CareerCard position={"Sales Engineer"} location={"Surat, Gurgaon and Bangalore"} />
          </div>
          {/* <Card >
            <CardBody> */}
          <div className="col-12 col-xl-8 offset-xl-2 d-grid gap-4">
            <div>
              <p>We're looking for a talented Sales and Service person for Surat and Banglore to join our team and help bring our cutting-edge HVAC products to the market.</p>
            </div>

            <div>
              <h4>Who We're Looking For:</h4>
              <ul>
                <li>
                  <p>Engineers (Electrical and Mechanical )</p>
                </li>
                <li>
                  <p>MBA's Working in Relevant fields</p>
                </li>
                <li>
                  <p>Team players with a global mindset</p>
                </li>
                <li>
                  <p>Visionaries who thrive in a dynamic environment</p>
                </li>
                <li>
                  <p>Problem solvers and forward-thinkers</p>
                </li>
                <li>
                  <p>Passionate, dedicated professionals</p>
                </li>
              </ul>
            </div>

            <div>
              <h4>Key Responsibilities:</h4>
              <ul>
                <li>
                  <p>Build and maintain strong relationships with HVAC contractors and clients.</p>
                </li>
                <li>
                  <p>Identify and pursue new business opportunities within the HVAC industry.</p>
                </li>
                <li>
                  <p>Provide expert advice on our range of HVAC products.</p>
                </li>
                <li>
                  <p>Achieve and exceed sales targets.</p>
                </li>
                <li>
                  <p>Stay up-to-date with industry trends and product knowledge.</p>
                </li>
              </ul>
            </div>

            <div>
              <h4>What We Offer:</h4>
              <ul>
                <li>
                  <p>Competitive salary and commission structure.</p>
                </li>
                <li>
                  <p>Collaborative and growth-oriented work environment</p>
                </li>
                <li>
                  <p>Opportunity to make a significant impact in the industry</p>
                </li>
              </ul>
            </div>

            <div>
              <p><b>Ready to be a part of our global success story?</b></p>
              <p>Apply today and be a part of something big!</p>
            </div>

            <div className="mb-3">
              <div className="card">
                <div className="card-header bg-primary text-white d-flex">
                  <h4>Let's elevate Broad Chillers together!</h4>
                </div>
                <div className="card-body">
                  <form
                    id="job_application_form"
                    action="https://formsubmit.co/email"  // TODO ...
                    onSubmit={() => {
                      setLoading((loading) => true);
                    }}
                    method="post"
                    encType="multipart/form-data"
                  >
                    <input type="hidden" name="_next" value="http://localhost:3000/careers" />
                    {/* TODO ... */}
                    <input type="hidden" name="_cc" value="" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_subject" value="Careers: BROAD India" />
                    <div className="row mb-3 px-2">
                      <div className="col-md-6">
                        <label htmlFor="First_Name" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="First_Name"
                          id="First_Name"
                          className="form-control"

                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="Last_Name" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="Last_Name"
                          id="Last_Name"
                          className="form-control"

                        />
                      </div>
                    </div>
                    <div className="row mb-3 px-2">
                      <div className="col-md-6">
                        <label htmlFor="Email_Address" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          name="Email_Address"
                          id="Email_Address"
                          className="form-control"

                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="Contact_Number" className="form-label">
                          Contact Number
                        </label>
                        <input
                          type="number"
                          name="Contact_Number"
                          id="Contact_Number"
                          className="form-control"

                        />
                      </div>
                    </div>
                    <div className="row mb-3 px-2">
                      <div className="col-md-6">
                        <label htmlFor="Total_Years_Of_Experience" className="form-label">
                          Total Years Of Experience
                        </label>
                        <input
                          type="number"
                          name="Total_Years_Of_Experience"
                          id="Total_Years_Of_Experience"
                          className="form-control"

                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="Expertise" className="form-label">
                          Expertise
                        </label>
                        <input
                          type="text"
                          name="Expertise"
                          id="Expertise"
                          className="form-control"

                        />
                      </div>
                    </div>
                    <div className="row mb-3 px-2">
                      <div className="col-md-6">
                        <label htmlFor="Current_Company" className="form-label">
                          Current Company
                        </label>
                        <input
                          type="text"
                          name="Current_Company"
                          id="Current_Company"
                          className="form-control"

                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="Current_Position" className="form-label">
                          Current Position
                        </label>
                        <input
                          type="text"
                          name="Current_Position"
                          id="Current_Position"
                          className="form-control"

                        />
                      </div>
                    </div>
                    <div className="row mb-3 px-2">
                      <div className="col-md-6">
                        <label htmlFor="Position_Applying_For" className="form-label">
                          Position Applying For
                        </label>
                        <input
                          type="text"
                          name="Position_Applying_For"
                          id="Position_Applying_For"
                          className="form-control"

                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="resume" className="form-label">
                          Upload Your Resume
                        </label>
                        <input
                          type="file"
                          accept="application/pdf"
                          name="resume"
                          id="resume"
                          className="form-control"

                        />
                      </div>
                    </div>
                    <div className="row mb-3 px-2">
                      <div className="col-md-12">
                        <label htmlFor="More_Info" className="form-label">
                          Anything Else You May Want Us To Know
                        </label>
                        <textarea
                          name="More_Info"
                          id="More_Info"
                          rows="5"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                    <div className="d-flex justify-center">
                      <button
                        type="submit"
                        className="btn btn-primary mx-auto pageclip-form__submit"
                        disabled={loading}
                      >
                        <span>{loading ? "Submitting..." : "Submit"}</span>
                      </button>
                    </div>

                    <div className="mt-5">
                      <p>Having problem submitting form ?</p>
                      <div className="d-grid d-md-flex gap-3">
                        <p>Send your resume to email address:</p>
                        <a href="mailto:kiran@broad.net">kiran@broad.net</a>
                        <a href="mailto:akshay@broad.net">akshay@broad.net</a>
                        <a href="mailto:broadindia@broad.net">broadindia@broad.net</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* </CardBody>
          </Card> */}
        </div>
      </Container>
      <Footer />
    </div>
  );
}
