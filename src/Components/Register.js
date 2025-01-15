import React from 'react';
import RegisterImg from "../Assets/Register.png";
import FoldImg from "../Assets/fold-hand.png";
import EmailIcon from "../Assets/email-icon.png";
import PassIcon from "../Assets/pass-icon.png";
import UserIcon from "../Assets/name-icon.png";
import PhoneIcon from "../Assets/mobile-icon.png";
import LockIcon from "../Assets/cpass-icon.png";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import "../Style/style.css";

function Register() {
  return (
    <section style={{ padding: '120px 0px 16px 0px', fontSize: '1rem' }} className="h-auto">
      <Container className="h-100 d-flex align-items-center justify-content-center">
        <Row className="w-100 border rounded border-black">
          <Col md={6} className="d-flex align-items-center justify-content-center flex-column p-3 p-md-4 welcome-login-data">
            <div className="welcome-data">
              <h3 className="d-flex align-items-center justify-content-center justify-content-md-start">
                Welcome
                <img className="img-fluid d-none d-md-block" style={{ width: '22%' }} src={FoldImg} alt="Fold-Image" />
              </h3>
            </div>
            <div className="welcome-login-fields">
              <div className="d-flex gap-2">
                {/* Name Input Field */}
                <InputGroup className="mb-3">
                  <InputGroup.Text>
                    <img className="img-fluid" src={UserIcon} alt="Name-ICon" />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="name"
                    id="namedata"
                    placeholder="Name"
                    className="rounded ps-5 py-2"
                  />
                </InputGroup>

                {/* Mobile Input Field */}
                <InputGroup className="mb-3">
                  <InputGroup.Text>
                    <img className="img-fluid" src={PhoneIcon} alt="Phone-ICon" />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="phone"
                    id="phonedata"
                    placeholder="Mobile Number"
                    className="rounded ps-5 py-2"
                  />
                </InputGroup>
              </div>

              <div className="d-flex gap-2">
                {/* Email Input Field */}
                <InputGroup className="mb-3">
                  <InputGroup.Text>
                    <img className="img-fluid" src={EmailIcon} alt="Email-ICon" />
                  </InputGroup.Text>
                  <Form.Control
                    type="email"
                    name="email"
                    id="emaildata"
                    placeholder="Email"
                    className="rounded ps-5 py-2"
                  />
                </InputGroup>

                {/* Password Input Field */}
                <InputGroup className="mb-3">
                  <InputGroup.Text>
                    <img className="img-fluid" src={PassIcon} alt="Password-ICon" />
                  </InputGroup.Text>
                  <Form.Control
                    type="password"
                    name="password"
                    id="ppassworddata"
                    placeholder="Password"
                    className="rounded ps-5 py-2"
                  />
                </InputGroup>
              </div>

              {/* Confirm Password Input Field */}
              <InputGroup className="mb-3">
                <InputGroup.Text>
                  <img className="img-fluid" src={LockIcon} alt="Lock-ICon" />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  name="password"
                  id="passworddata"
                  placeholder="Confirm Password"
                  className="rounded ps-5 py-2"
                />
              </InputGroup>

              {/* Submit Button */}
              <div className="d-flex justify-content-center pt-3">
                <Button variant="primary" className="px-5 py-2">
                  Submit
                </Button>
              </div>

              <div className="welcome-login-option d-flex flex-column align-items-center gap-3">
                <hr className="w-75 ms-1" />
                <div className="login-not">
                  <Button variant="dark" className="text-capitalize px-5 py-2">
                    already <Link className="text-decoration-none text-light" to="/login">sign up?</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Col>

          {/* Image Section */}
          <Col md={6} className="d-none d-md-block pe-0">
            <img className="img-fluid h-100" src={RegisterImg} alt="Register-Image" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register
