import React from 'react'
import login from '../utils/Login-rafiki.svg'
import {AiFillEyeInvisible} from 'react-icons/ai'

function Login() {
  return (
    <div className='login'>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
              <div className="login_img">
                <img src={login} alt="" />
              </div>
          </div>
          <div className="col-md-7 login_card">
            <div className="login_heading">
              Login
            </div>
               <form className="form">
            <div className="form_group">
              <label>Login ID</label>
              <input type="text" placeholder='Enter Login ID'/>
            </div>
            <div className="form_group">
              <label>Password</label>
              <input type="text" placeholder='Enter Password'/>
            </div>
            <div className="form_box">
              <div className="form_pass">
                 <input type="checkbox" /> &nbsp;
                 <label>Remember me</label>
              </div>
              <div className="change_pass">
                Change Password
              </div>
            </div>
            <div className="form_term">
            <input type="checkbox" /> &nbsp;
              Agree to <span>Terms & Condition</span>
            </div>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                  <div className="button">Login</div>
              </div>
              <div className="col-md-2"></div>
            </div>
        </form>
          <div className="form_reg">
            Don't have an account? <span className='change'>Register here</span> 
          </div>          
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Login