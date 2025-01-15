import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../Style/style.css";

function Pagenotfound() {
  return (
    <div className="page-wrap d-flex flex-column align-items-center" style={{ padding: "213px 0px" }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={12} className="text-center">
            <span className="display-1 d-block">404</span>
            <div className="mb-4 lead">The page you are looking for was not found.</div>
            <Link to="/" className="btn btn-link text-decoration-none">
              Back to Home
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Pagenotfound
