import React from 'react';
import { useEffect, useState } from 'react';
import starIcon from "../Assets/star-icon.png";
import "../Style/style.css";

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
        <div className='row d-flex flex-column align-items-center justify-content-center gap-2'>
          {
            product.slice(0, 221).map((val, i) => (
              <div className='product-details flex-row col-12 d-flex border-bottom border-4 p-2' style={{cursor: 'pointer'}} key={i}>
                <div className='col-4'>
                  <img className='img-fluid h-100' src={val.thumbnail} alt='thumbnail' />
                </div>
                <div className='col-4'>
                  <h2 className='product-title'>{val.title}</h2>
                  <div className='star-rating'>
                    <div className='d-flex align-items-center justify-content-center gap-1 p-2 bg-success rounded w-50'>
                      <h5 className='product-rating'>{val.rating}</h5>
                      <img className='img-fluid' src={starIcon} alt='Star-Icon' style={{width: '20px'}} />
                    </div>
                  </div>
                  <ul className='pt-3 product-dimensions'>
                    <li>Depth: {val.dimensions.depth}</li>
                    <li>Width: {val.dimensions.width}</li>
                    <li>Height: {val.dimensions.height}</li>
                  </ul>
                </div>
                <div className='col-4'>
                  <h5 className='product-price'>&#8377; {val.price}<br /> <del className='original-price'>&#8377; {((val.price) * 2)}</del> <span className='discount-product'>{(Math.round(val.rating))}% off</span></h5>
                  <ul className='list-unstyled product-info'>
                    <li>{val.warrantyInformation}</li>
                    <li>{val.shippingInformation}</li>
                  </ul>
                  {
                    val.brand && val.brand.length > 0 && (
                      <select name='brand' id='brand'>
                        <option value="brand-names">Brand</option>
                        <option value={val.brand}>{val.brand}</option>
                      </select>
                    )
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Rightside
