import React from 'react';
import { useEffect, useState } from 'react';
import starIcon from "../Assets/star-icon.png";
import "../Style/style.css";
import { Row, Col, Card, ListGroup, Button, Form } from 'react-bootstrap';

function Rightside({ filterData }) {

  // For All Products
  const [product, setProduct] = useState([]);
  filterData = filterData.toLowerCase();

  useEffect(() => {
    const fetchProducts = () => {
      if(filterData) {
        fetch(`https://dummyjson.com/products/category/${filterData}`)
        .then(res => res.json())
        // .then(data => console.log(data.products));
        .then(data => setProduct(data.products));
      }
      else {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => setProduct(data.products));
      }
    }

    fetchProducts();
  }, [filterData])

  return (
    <section className='rightside'>
      <div className='container'>
        <Row className="d-flex flex-column align-items-center justify-content-center gap-2">
          {
            product.slice(0, 221).map((val, i) => (
              <Col key={i} className='product-details flex-row col-12 d-flex' style={{ cursor: 'pointer' }}>
                <Card className="d-flex flex-row p-2">
                  <Col xs={4}>
                    <Card.Img variant="top" className="img-fluid h-100" src={val.thumbnail} alt='thumbnail' />
                  </Col>
                  <Col xs={4}>
                    <Card.Body>
                      <Card.Title className='product-title'>{val.title}</Card.Title>
                      <div className='star-rating'>
                        <div className='d-flex align-items-center justify-content-center gap-1 p-2 bg-success rounded w-50'>
                          <h5 className='product-rating'>{val.rating}</h5>
                          <img className='img-fluid' src={starIcon} alt='Star-Icon' style={{ width: '20px' }} />
                        </div>
                      </div>
                      <ListGroup className='pt-3 product-dimensions'>
                        <ListGroup.Item>Depth: {val.dimensions.depth}</ListGroup.Item>
                        <ListGroup.Item>Width: {val.dimensions.width}</ListGroup.Item>
                        <ListGroup.Item>Height: {val.dimensions.height}</ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Col>
                  <Col xs={4}>
                    <Card.Body>
                      <h5 className='product-price'>
                        &#8377; {val.price}<br />
                        <del className='original-price'>&#8377; {((val.price) * 2)}</del> 
                        <span className='discount-product'>{Math.round(val.rating)}% off</span>
                      </h5>
                      <ListGroup className='list-unstyled product-info'>
                        <ListGroup.Item>{val.warrantyInformation}</ListGroup.Item>
                        <ListGroup.Item>{val.shippingInformation}</ListGroup.Item>
                      </ListGroup>
                      {
                        val.brand && val.brand.length > 0 && (
                          <Form.Select name='brand' id='brand'>
                            <option value="brand-names">Brand</option>
                            <option value={val.brand}>{val.brand}</option>
                          </Form.Select>
                        )
                      }
                    </Card.Body>
                  </Col>
                </Card>
              </Col>
            ))
          }
        </Row>
      </div>
    </section>
  )
}

export default Rightside
