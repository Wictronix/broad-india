import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";

export default function ContactUs() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <NavbarComp />
            <div
                style={{
                    width: "100%",
                    height: "75vh",
                    backgroundImage:
                        "url('https://broadusa.com/broad/wp-content/uploads/2020/03/contact-us.jpg')",
                    backgroundOrigin: "center",
                    backgroundAttachment: "fixed",
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
                        Contact Us
                    </div>
                </div>
            </div>
            <Container
                style={{
                    marginBlock: "5rem",
                }}
            >
                <div className="display-6 mb-5">We're Here to Help</div>
                <div className="row">
                    <div className="col-md-9">
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicEmail"
                                    >
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            type="email"
                                            // placeholder="Enter first name"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicPassword"
                                    >
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            // placeholder="Enter last name"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicEmail"
                                    >
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicPassword"
                                    >
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicEmail"
                                    >
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicPassword"
                                    >
                                        <Form.Label>How can we help</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            style={{ height: "10rem" }}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header">New Jersy Office</div>
                            <div className="card-body">
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6"
                                        style={{
                                            width: "2.4rem",
                                            marginRight: "1rem",
                                            color: "#aaa",
                                        }}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    401 Hackensack Ave, Suite 503 Hackensack, NJ
                                    07601
                                </div>
                                <br />
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6"
                                        style={{
                                            width: "1.5rem",
                                            marginRight: "1rem",
                                            color: "#aaa",
                                        }}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    (201)678-3010
                                </div>
                                <br />
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6"
                                        style={{
                                            width: "1.5rem",
                                            marginRight: "1rem",
                                            color: "#aaa",
                                        }}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <a href="mailto:info@broadusa.com">
                                        info@broadusa.com
                                    </a>
                                </div>
                                <br />
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6"
                                        style={{
                                            width: "1.5rem",
                                            marginRight: "1rem",
                                            color: "#aaa",
                                        }}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Mon – Sat . 9.00 – 17.30
                                </div>
                            </div>
                        </div>

                        <div className="card mt-5">
                            <div className="card-header">California Office</div>
                            <div className="card-body">
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6"
                                        style={{
                                            width: "2.4rem",
                                            marginRight: "1rem",
                                            color: "#aaa",
                                        }}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    100 North Citrus Street, Suite 625 West
                                    Covina, CA 91791
                                </div>
                                <br />
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6"
                                        style={{
                                            width: "1.5rem",
                                            marginRight: "1rem",
                                            color: "#aaa",
                                        }}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    (626)967-8651
                                </div>
                                <br />
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6"
                                        style={{
                                            width: "1.5rem",
                                            marginRight: "1rem",
                                            color: "#aaa",
                                        }}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <a href="mailto:info@broadusa.com">
                                        info@broadusa.com
                                    </a>
                                </div>
                                <br />
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6"
                                        style={{
                                            width: "1.5rem",
                                            marginRight: "1rem",
                                            color: "#aaa",
                                        }}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Mon – Sat . 9.00 – 17.30
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    );
}
