import React from 'react';
import CartIcon from "../Assets/white-carticon.png";
import BuyIcon from "../Assets/white-buyicon.png";
import StarIcon from "../Assets/star-icon.png";
import "../Style/style.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Singleproduct() {
  return (
    <section className="text-muted body-font overflow-visible" style={{paddingTop: "7.7rem"}}>
      <Container className="px-5 mx-auto d-flex justify-content-center align-items-center">
        <Row>
          <Col xs={12} md={6} className="mb-4 mb-lg-0">
            <img
              alt="ecommerce"
              className="img-fluid rounded"
              src="https://dummyimage.com/400x400"
              style={{ objectFit: "cover", objectPosition: "center", maxWidth: "100%", height: "auto" }}
            />
            <div className="single-btn-product d-flex align-items-center pt-3">
              <div className="cart d-flex align-items-center position-relative">
                <img src={CartIcon} className="img-fluid position-absolute ps-4" alt="Cart Icon" />
                <Button variant="link" className="text-nowrap text-decoration-none">
                  <span className="ps-3">Add to Cart</span>
                </Button>
              </div>
              <div className="buy d-flex align-items-center position-relative">
                <img src={BuyIcon} className="img-fluid position-absolute" alt="Buy Icon" />
                <Button variant="link" className="text-nowrap ms-3 text-decoration-none">
                  <span className="ps-1">Buy Now</span>
                </Button>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <h2 className="text-muted small mb-2">BRAND NAME</h2>
            <h1 className="text-dark">The Catcher in the Rye</h1>

            <div className="star-rating my-3">
              <div className="d-flex align-items-center justify-content-center gap-1 p-2 bg-success rounded w-25">
                <h5 className="product-rating">4.4</h5>
                <img className="img-fluid" src={StarIcon} alt="Star Icon" style={{ width: '20px' }} />
              </div>
            </div>

            <div>
              <h5 className="product-price-product">
                &#8377; 8000 <del className="original-price-product">&#8377; 10000</del>{" "}
                <span className="discount-product">12% off</span>
              </h5>
              <ul className="list-unstyled product-info">
                <li>Warranty Information</li>
                <li>Shipping Information</li>
              </ul>
            </div>

            <p className="lead">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing
              tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan
              poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo
              tattooed umami cardigan.
            </p>
          </Col>
        </Row>
      </Container>
    </section>


  )
}

export default Singleproduct
