import React from 'react';
import ChangeImage from "../Assets/Changepass.jpg";
import PassIcon from "../Assets/pass-icon.png";
import LockIcon from "../Assets/cpass-icon.png";
import ChangeImg from "../Assets/Change3d.jpg";
import { Link } from 'react-router-dom';

function Changepass() {
  return (
    <section className='vh-100' style={{paddingTop: '100px', fontSize: "1rem"}}>
      <div className='container h-100 d-flex align-items-center justify-content-center'>
        <div className='row'>
          <div className='border rounded d-flex p-0'>
            <div className='col-12 d-flex align-items-center justify-content-center flex-column d-md-block col-md-6 p-3 p-md-4 login-data'>
              <div className='welcome-data pb-2'>
                  <h3 className='d-flex align-items-center justify-content-center justify-content-md-start' style={{fontSize: "2.5em"}}>
                    Change Password
                  <img className='img-fluid' style={{width: '22%'}} src={ChangeImg} alt='Changepassword-Image' />
                </h3>
              </div>
              <div className='login-fields'>
                <div className='d-flex align-items-center py-3'>
                  <input type='password' name='password' id='passworddata1' placeholder='Old Password' className='rounded col-10 ps-5 py-2 position-relative' />
                  <img className='img-fluid position-absolute ms-2' src={PassIcon} alt='Password-ICon' />
                </div>
                {/* New Password Input Field */}
                <div className='d-flex align-items-center py-3'>
                  <input type='password' name='password' id='passworddata2' placeholder='Password' className='rounded col-10 ps-5 py-2 position-relative' />
                  <img className='img-fluid position-absolute ms-2' src={PassIcon} alt='Password-ICon' />
                </div>
                {/* Confirm Password Input Field */}
                <div className='d-flex align-items-center py-3'>
                  <input type='password' name='password' id='passworddata3' placeholder='Password' className='rounded col-10 ps-5 py-2 position-relative' />
                  <img className='img-fluid position-absolute ms-2' src={LockIcon} alt='Lock-ICon' />
                </div>
                {/* Button */}
                <button className='btn btn-primary' style={{fontSize: '1em'}}>Submit</button>
                <div className='login-option d-flex flex-column align-items-center gap-3' style={{fontSize: '1.2em'}}>
                  <hr className='w-75 ms-1'></hr>
                  <div className='login-not'>
                    <button className='btn btn-dark text-capitalize px-5 py-2'>
                      did you <Link className='text-decoration-none text-light' to='/login'>sign up?</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 d-none d-md-block'>
              <img className='img-fluid h-100' src={ChangeImage} alt='Changepassword-Image' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Changepass
