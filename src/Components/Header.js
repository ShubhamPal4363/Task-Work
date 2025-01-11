import React from 'react';
import LoginIcon from '../Assets/login-icon.png';
import RegisterIcon from '../Assets/register-icon.png';
import CartIcon from '../Assets/cart-icon.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary py-3 position-fixed w-100 top-0 z-1" style={{fontSize: '1rem'}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-dark" aria-current="page" to="" style={{fontSize: '1.3em'}}>Home</Link>
            </li>
          </ul>
          <div>
            <ul className="list-unstyled d-flex gap-4">
              <li className="p-2 border rounded border-black">
                <abbr title='Login'>
                  <Link to='/login'>
                    <img src={LoginIcon} alt='Login-Icon' style={{cursor: 'pointer'}} />
                  </Link>
                </abbr>
              </li>
              <li className="p-2 border rounded border-black">
                <abbr title='Register'>
                  <Link to='/register'>
                    <img src={RegisterIcon} alt='Register-Icon' style={{cursor: 'pointer'}} />
                  </Link>
                </abbr>
              </li>
              <li className="p-2 border rounded border-black">
                <abbr title='Cart'>
                  <Link to='/cart'>
                    <img src={CartIcon} alt='Cart-Icon' style={{cursor: 'pointer'}} />
                  </Link>
                </abbr>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
