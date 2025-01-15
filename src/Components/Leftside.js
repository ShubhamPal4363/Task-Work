import React, { createRef } from 'react';
import { useEffect, useState } from 'react';
import "../Style/style.css";
import { Form, Button, ListGroup, InputGroup, Range } from 'react-bootstrap';
import Home from "./Home";

function Leftside({ setFilterData }) {

    const [category, setCategory] = useState([]);
    const [brand, setBrand] = useState([]);

    // For Range Value
    const [rangeData, setRangeData] = useState(8000);
    const textData = createRef();

    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
        .then(res => res.json())
        .then(data => setCategory(data));
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/products/category/smartphones')
        .then(res => res.json())
        .then(data => setBrand(data.products));
    }, [])

    function getRangevalue(e) {
        const rangeValue = e.target.value;
        textData.current.value = rangeValue;
        setRangeData(rangeValue);
    }

    function getTextValue() {
        const textValue = textData.current.value;
        setRangeData(textValue);
    }

    function filternameData(e) {
        setFilterData(e.target.innerText);
    }

  return (
    <section className='leftside'>
      <div>
        {/* Filter Section */}
        <div>
          <h3 className='text-capitalize pb-2 border-bottom border-5'>Filter</h3>
        </div>
        
        {/* Category List */}
        <ul className='filter-data list-unstyled d-flex align-items-center gap-2 flex-wrap py-2'>
          {
            category.slice(0, 15).map((val, i) => (
              <li key={i} className='text-capitalize' onClick={filternameData} style={{ cursor: 'pointer' }}>
                {val}
              </li>
            ))
          }
        </ul>

        {/* Brand Section */}
        <div>
          <h3 className='text-capitalize pb-2 border-bottom border-5'>Brand</h3>
        </div>
        
        {/* Brand List */}
        <ul className='brand-data list-unstyled'>
          {
            [...new Set(brand.filter(val => ['A', 'O', 'R', 'S', 'V'].includes(val.brand.charAt(0).toUpperCase()))
              .map(val => val.brand))].map((brandName, i) => (
                <div className='d-flex gap-2 align-items-center' key={i}>
                  <Form.Check type="checkbox" />
                  <li className='text-capitalize'>
                    {brandName}
                  </li>
                </div>
              ))
          }
        </ul>

        {/* Price Section */}
        <div className='price-data'>
          <h3 className='text-capitalize pb-2 border-bottom border-5'>Price</h3>
          <InputGroup className="mb-3">
            <Form.Range 
              value={rangeData} 
              min="8000" 
              max="100000" 
              onChange={getRangevalue} 
              className="col-10 py-3" 
            />
          </InputGroup>
          <InputGroup>
            <Form.Control 
              ref={textData} 
              type="text" 
              value={rangeData} 
              onChange={getTextValue} 
              className="col-12" 
            />
          </InputGroup>
        </div>
      </div>
    </section>
  )
}

export default Leftside
