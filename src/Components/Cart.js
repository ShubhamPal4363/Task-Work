import { React, useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import "../Style/style.css";

function Cart() {

  const [quantity, setQuantity] = useState(2);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  return (
    <section style={{ padding: '6.25rem 0', fontSize: '1rem' }} className="h-auto overflow-visible">
      <Container className="h-100 py-5">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col lg={10}>
            <h3 className="fw-normal mb-4">Shopping Cart</h3>

            <Card className="rounded-3 mb-4">
              <Card.Body className="p-4">
                <Row className="d-flex justify-content-between align-items-center">
                  <Col md={2} lg={2} xl={2}>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                      className="img-fluid rounded-3"
                      alt="Cotton T-shirt"
                    />
                  </Col>
                  <Col md={3} lg={3} xl={3}>
                    <p className="lead fw-normal mb-2">Basic T-shirt</p>
                    <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p>
                  </Col>
                  <Col md={3} lg={3} xl={2} className="d-flex">
                    <Button
                      variant="link"
                      className="px-2"
                      onClick={decreaseQuantity}
                    >
                      <i className="fas fa-minus"></i>
                    </Button>
                    <Form.Control
                      type="number"
                      min="0"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="form-control-sm"
                    />
                    <Button
                      variant="link"
                      className="px-2"
                      onClick={increaseQuantity}
                    >
                      <i className="fas fa-plus"></i>
                    </Button>
                  </Col>
                  <Col md={3} lg={2} xl={2} className="offset-lg-1">
                    <h5 className="mb-0">${(499.00 * quantity).toFixed(2)}</h5>
                  </Col>
                  <Col md={1} lg={1} xl={1} className="text-end">
                    <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"></i></a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Button variant="warning" size="lg" block>
                  Proceed to Pay
                </Button>
              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Cart
