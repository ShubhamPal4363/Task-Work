import React from 'react';
import { Link } from 'react-router-dom';
import "../Style/style.css";

function Pagenotfound() {
  return (
    <div className="page-wrap d-flex flex-row align-items-center" style={{padding: "213px 0px"}}>
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                  <span className="display-1 d-block">404</span>
                  <div className="mb-4 lead">The page you are looking for was not found.</div>
                  <Link to="" className="btn btn-link text-decoration-none">Back to Home</Link>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Pagenotfound
