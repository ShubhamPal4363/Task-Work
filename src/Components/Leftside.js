import React, { createRef } from 'react';
import { useEffect, useState } from 'react';
import "../Style/style.css";
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
            <div>
                <h3 className='text-capitalize pb-2 border-bottom border-5'>filter</h3>
            </div>
            <ul className='filter-data list-unstyled d-flex align-items-center gap-2 flex-wrap py-2'>
                {
                    category.slice(0, 7).map((val, i) => (
                        <li className='text-capitalize' key={i} onClick={filternameData}>{val}</li>
                    ))
                }
            </ul>
            <div>
                <h3 className='text-capitalize pb-2 border-bottom border-5'>brand</h3>
            </div>
            <ul className='brand-data list-unstyled'>
                {
                    [...new Set(brand.filter(val => ['A', 'O', 'R', 'S', 'V'].includes(val.brand.charAt(0).toUpperCase())).map(val => val.brand))].map((brandName, i) => (
                        <div className='d-flex gap-2 align-items-center' key={i}>
                            <input type='checkbox' />
                            <li className='text-capitalize'>
                                {brandName}
                            </li>
                        </div>
                    ))
                }
            </ul>
            <div className='price-data'>
                <h3 className='text-capitalize pb-2 border-bottom border-5'>price</h3>
                <input value={rangeData} type='range' min='8000' max='100000' onChange={getRangevalue} className='col-10 py-3' /><br />
                <input ref={textData} type='text' onChange={getTextValue} className='col-12' />
            </div>
        </div>
    </section>
  )
}

export default Leftside
