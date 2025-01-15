import React from 'react';
import ForgetImage from "../Assets/Forget.png";
import EmailIcon from "../Assets/email-icon.png";
import PassIcon from "../Assets/pass-icon.png";
import ForgetImg from "../Assets/Forget3d.png";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';

function Forgetpass() {
  return (
    <section style={{ paddingTop: '7rem', fontSize: '1rem' }} className="vh-100">
      <Container className="h-100 d-flex align-items-center justify-content-center">
        <Row className="w-100 border border-black rounded">
          <Col md={6} className="d-none d-md-block ps-0">
            <img className="img-fluid h-100" src={ForgetImage} alt="Forget-Image" />
          </Col>

          <Col md={6} className="d-flex align-items-center justify-content-center flex-column p-3 p-md-4 login-data">
            <div className="welcome-data pb-2">
              <h3 className="d-flex align-items-center justify-content-center justify-content-md-start" style={{ fontSize: '2.5em' }}>
                Forget Password
                <img className="img-fluid" style={{ width: '22%' }} src={ForgetImg} alt="Forgetpassword-Image" />
              </h3>
            </div>
            <div className="login-fields">
              {/* Email Input Field */}
              <InputGroup className="mb-3">
                <InputGroup.Text>
                  <img className="img-fluid" src={EmailIcon} alt="Email-ICon" />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  name="name"
                  id="namedata"
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
                  id="passworddata"
                  placeholder="Password"
                  className="rounded ps-5 py-2"
                />
              </InputGroup>

              {/* Submit Button */}
              <Button variant="primary" className="w-100" style={{ fontSize: '1em' }}>
                Submit
              </Button>

              <div className="login-option d-flex flex-column align-items-center gap-3" style={{ fontSize: '1.2em' }}>
                <hr className="w-75 ms-1" />
                <div className="login-not">
                  <Button variant="dark" className="text-capitalize px-5 py-2">
                    did you <Link className="text-decoration-none text-light" to="/login">sign up?</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Forgetpass
