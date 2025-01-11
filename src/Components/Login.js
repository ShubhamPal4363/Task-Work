import React from 'react';
import LoginImg from "../Assets/Login.png";
import LikeImg from "../Assets/like-hand.png";
import EmailIcon from "../Assets/email-icon.png";
import PassIcon from "../Assets/pass-icon.png";
import { Link } from 'react-router-dom';
import "../Style/style.css";

function Login() {
  return (
    <>
      <section className='h-auto overflow-visible' style={{padding: '138px 0px 30px 0px', fontSize: "1rem"}}>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <div className='row'>
            <div className='border-style border rounded d-flex p-0'>
              <div className='col-md-6 d-none d-md-block'>
                <img className='img-fluid h-100' src={LoginImg} alt='Login-Image' />
              </div>
              <div className='col-12 d-flex align-items-center justify-content-center flex-column d-md-block col-md-6 p-3 p-md-4 login-data'>
                <div className='login-data'>
                  <h3 className='d-flex align-items-center justify-content-center justify-content-md-start py-2 py-md-0'>
                    Welcome Back
                    <img className='img-fluid d-none d-md-block' style={{width: '22%'}} src={LikeImg} alt='Like-Image' />
                  </h3>
                </div>
                <div className='login-fields'>
                  <div className='d-flex align-items-center'>
                    <input type='text' name='name' id='namedata' placeholder='Email' className='rounded col-10 ps-5 py-2 position-relative' />
                    <img className='img-fluid position-absolute ms-2' src={EmailIcon} alt='Email-ICon' />
                  </div>
                  {/* Password Input Field */}
                  <div className='d-flex align-items-center py-3'>
                    <input type='password' name='password' id='passworddata' placeholder='Password' className='rounded col-10 ps-5 py-2 position-relative' />
                    <img className='img-fluid position-absolute ms-2' src={PassIcon} alt='Password-ICon' />
                  </div>
                  {/* Button */}
                  <button className='btn btn-primary' style={{fontSize: '1em'}}>Submit</button>
                  <div className='login-option d-flex flex-column align-items-center gap-3' style={{fontSize: '1.2em'}}>
                    <hr className='w-75 ms-1'></hr>
                    <div className='login-not'>
                      <button className='btn btn-dark text-capitalize px-5 py-2'>
                        did you <Link className='text-decoration-none text-light' to='/register'>sign up?</Link>
                      </button>
                    </div>
                  </div>
                  {/* Forget Links */}
                  <div className='login-forgetchange pt-2'>
                    <p className='text-center'>
                      <Link className='text-dark text-decoration-none text-capitalize' to='/forgetpassword'>forget password</Link>
                      <Link className='text-dark text-decoration-none text-capitalize ms-4' to='/changepassword'>Change password</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
