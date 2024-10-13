import React from 'react';
import './vendor/bootstrap/css/bootstrap.min.css';
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './fonts/iconic/css/material-design-iconic-font.min.css';
import './vendor/animate/animate.css';
import './vendor/css-hamburgers/hamburgers.min.css';
import './vendor/animsition/css/animsition.min.css';
import './css/util.css';
import './vendor/select2/select2.min.css';
import './vendor/daterangepicker/daterangepicker.css';
import './css/main.css';
import './stylesheets/index.css';

const Login = () => {
  return (
    <div>
      <head>
        <title>My First React App</title>
        <link rel="icon" type="image/png" href="images/icons/favicon.ico" />
      </head>
      <body>
        <script src="bundle.js"></script>
        <div
          className="glow"
          style={{
            position: 'absolute',
            marginRight: '1460px',
            borderRadius: '20%',
            marginTop: '0rem',
            boxShadow: '1px 1px 100px 50px #ffca39',
            height: '10rem',
            width: '36rem',
          }}
        ></div>
        <img
          src="g65-6.png"
          style={{
            position: 'absolute',
            marginRight: '1400px',
            marginTop: '0rem',
            height: '15rem',
            width: '42rem'
          }}
          alt=""
        />
        <section id="login-container">
          <div className="limiter">
            <div
              className="container-login100"
              style={{ boxShadow: '1px 1px 40px 20px #ffca39' }}
            >
              <div className="wrap-login100">
                <form className="login100-form validate-form">
                  <span className="login100-form-title p-b-60 glow">
                    Welcome!
                  </span>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Valid email is: a@b.c"
                  >
                    <input className="input100" type="text" name="email" />
                    <span className="focus-input100" data-placeholder="Email"></span>
                  </div>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Enter password"
                  >
                    <span className="btn-show-pass">
                      <i className="zmdi zmdi-eye"></i>
                    </span>
                    <input className="input100" type="password" name="pass" />
                    <span className="focus-input100" data-placeholder="Password"></span>
                  </div>
                  <div className="container-login100-form-btn">
                    <div className="wrap-login100-form-btn">
                      <div className="login100-form-bgbtn"></div>
                      <button className="login100-form-btn glow-n-text">
                        Login
                      </button>
                    </div>
                  </div>
                  <div className="text-center p-t-115">
                    <span className="txt1">Don’t have an account?</span>
                    <a className="txt2" href="#">
                      Sign Up
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="dropDownSelect1"></div>
        </section>
        <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
        <script src="vendor/animsition/js/animsition.min.js"></script>
        <script src="vendor/bootstrap/js/popper.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
        <script src="vendor/select2/select2.min.js"></script>
        <script src="vendor/daterangepicker/moment.min.js"></script>
        <script src="vendor/daterangepicker/daterangepicker.js"></script>
        <script src="vendor/countdowntime/countdowntime.js"></script>
        <script src="js/main.js"></script>
      </body>
    </div>
  );
};

export default Login;