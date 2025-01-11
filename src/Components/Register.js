import React from 'react';
import RegisterImg from "../Assets/Register.png";
import FoldImg from "../Assets/fold-hand.png";
import EmailIcon from "../Assets/email-icon.png";
import PassIcon from "../Assets/pass-icon.png";
import UserIcon from "../Assets/name-icon.png";
import PhoneIcon from "../Assets/mobile-icon.png";
import LockIcon from "../Assets/cpass-icon.png";
import { Link } from 'react-router-dom';
import "../Style/style.css";

function Register() {
  return (
    <section className='h-auto' style={{padding: '120px 0px 30px 0px', fontSize: "1rem"}}>
      <div className='container h-100 d-flex align-items-center justify-content-center'>
        <div className='row'>
          <div className='border rounded d-flex p-0'>
            <div className='col-12 d-flex align-items-center justify-content-center flex-column d-md-block col-md-6 p-3 p-md-4 welcome-login-data'>
              <div className='welcome-data'>
                <h3 className='d-flex align-items-center justify-content-center justify-content-md-start'>
                  Welcome
                  <img className='img-fluid d-none d-md-block' style={{width: '22%'}} src={FoldImg} alt='Fold-Image' />
                </h3>
              </div>
              <div className='welcome-login-fields'>
                <div className='d-flex gap-2'>
                  <div className='d-flex align-items-center'>
                    <input type='text' name='name' id='namedata' placeholder='Name' className='rounded col-9 col-md-12 ps-5 py-2 position-relative' />
                    <img className='img-fluid position-absolute ms-2' src={UserIcon} alt='Name-ICon' />
                  </div>
                  {/* Mobile Input Field */}
                  <div className='d-flex align-items-center py-2'>
                    <input type='text' name='phone' id='phonedata' placeholder='Mobile Number' className='rounded col-9 col-md-12 ps-5 py-2 position-relative' />
                    <img className='img-fluid position-absolute ms-2' src={PhoneIcon} alt='Phone-ICon' />
                  </div>
                </div>
                <div className='d-flex gap-2'>
                  {/* Email Input Field */}
                  <div className='d-flex align-items-center'>
                    <input type='email' name='email' id='emaildata' placeholder='Email' className='rounded col-9 col-md-12 ps-5 py-2 position-relative' />
                    <img className='img-fluid position-absolute ms-2' src={EmailIcon} alt='Email-ICon' />
                  </div>
                  {/* Password Input Field */}
                  <div className='d-flex align-items-center py-2'>
                    <input type='password' name='password' id='ppassworddata' placeholder='Password' className='rounded col-9 col-md-12 ps-5 py-2 position-relative' />
                    <img className='img-fluid position-absolute ms-2' src={PassIcon} alt='Password-ICon' />
                  </div>
                </div>
                <div className='d-flex justify-content-center'>
                  {/* Confirm Password Input Field */}
                  <div className='d-flex align-items-center'>
                    <input type='password' name='password' id='passworddata' placeholder='Confirm Password' className='rounded col-11 ps-5 py-2 position-relative' />
                    <img className='img-fluid position-absolute ms-2' src={LockIcon} alt='Lock-ICon' />
                  </div>
                </div>
                {/* Button */}
                <div className='d-flex justify-content-center pt-3'>
                  <button className='welcome-btn btn btn-primary px-5 py-2'>Submit</button>
                </div>
                <div className='welcome-login-option d-flex flex-column align-items-center gap-3'>
                  <hr className='w-75 ms-1'></hr>
                  <div className='login-not'>
                    <button className='btn btn-dark text-capitalize px-5 py-2'>
                      already <Link className='text-decoration-none text-light' to='/login'>sign up?</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 d-none d-md-block'>
              <img className='img-fluid h-100' src={RegisterImg} alt='Register-Image' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register
