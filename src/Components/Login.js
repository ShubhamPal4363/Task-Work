import React from 'react';
import LoginImg from "../Assets/Login.png";
import LikeImg from "../Assets/like-hand.png";
import EmailIcon from "../Assets/email-icon.png";
import PassIcon from "../Assets/pass-icon.png";
import { Link } from 'react-router-dom';
import "../Style/style.css";
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';

function Login() {
  return (
    <section style={{ padding: '138px 0px 33px 0px', fontSize: '1rem' }} className="h-auto">
      <Container className="h-100 d-flex align-items-center justify-content-center">
        <Row className="w-100 border border-black rounded">
          <Col md={6} className="ps-0 d-none d-md-block">
            <img className="img-fluid h-100" src={LoginImg} alt="Login-Image" />
          </Col>
          <Col md={6} className="d-flex align-items-center justify-content-center flex-column p-3 p-md-4 login-data">
            <div className="login-data">
              <h3 className="d-flex align-items-center justify-content-center justify-content-md-start py-2 py-md-0">
                Welcome Back
                <img className="img-fluid d-none d-md-block" style={{ width: '22%' }} src={LikeImg} alt="Like-Image" />
              </h3>
            </div>
            <div className="login-fields">
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

              <Button variant="primary" className="w-100" style={{ fontSize: '1em' }}>
                Submit
              </Button>

              <div className="login-option d-flex flex-column align-items-center gap-3" style={{ fontSize: '1.2em' }}>
                <hr className="w-75 ms-1" />
                <div className="login-not">
                  <Button variant="dark" className="text-capitalize px-5 py-2">
                    did you <Link className="text-decoration-none text-light" to="/register">sign up?</Link>
                  </Button>
                </div>
              </div>

              <div className="login-forgetchange pt-2">
                <p className="text-center">
                  <Link className="text-dark text-decoration-none text-capitalize" to="/forgetpassword">
                    forget password
                  </Link>
                  <Link className="text-dark text-decoration-none text-capitalize ms-4" to="/changepassword">
                    Change password
                  </Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login
