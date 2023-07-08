import React from "react";

export default function ContactForm() {
  return (
    <div className="container mb-3">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h4>Get in Touch</h4>
        </div>
        <div className="card-body">
          <form
            action="https://send.pageclip.co/65eBhbmaUsB0Tsr1yJoeTjOITQgSz8Uc"
            className="pageclip-form"
            method="post"
          >
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="fname" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lname" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">
                  Phone number
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-3 px-2">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="form-control"
              />
            </div>
            <div className="row mb-3 px-2">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                className="form-control"
              ></textarea>
            </div>
            <div className="d-flex justify-center">
              {/* <input
                type="submit"
                value="Submit"
                className="btn btn-primary mx-auto"
              /> */}
              <button
                type="submit"
                className="btn btn-primary mx-auto pageclip-form__submit"
              >
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
