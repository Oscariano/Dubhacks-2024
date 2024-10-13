import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../src/routes/FirebaseApp.js';
import { useNavigate } from 'react-router-dom';
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

let userId = null;
const setUserId = (id) => {
  userId = id;
};

export { userId, setUserId };

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setUserId(auth.currentUser.uid);
      navigate('/capsulecollection');
    } catch (error) {
      setError(error.message);
      console.error("Error logging in: ", error);
    }
  };

  return (
      <div id="false-body">
        <div
          className="glow"
          style={{
            position: 'absolute',
            marginRight: '1460px',
            borderRadius: '20%',
            marginTop: '28rem',
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
            marginTop: '25rem',
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
                <form className="login100-form validate-form" onSubmit={handleLogin}>
                  <span className="login100-form-title p-b-60 glow">
                    Welcome!
                  </span>
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Valid email is: a@b.c"
                  >
                    <input
                      className="input100"
                      type="text"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="focus-input100" data-placeholder="Email"></span>
                  </div>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Enter password"
                  >
                    <span className="btn-show-pass">
                      <i className="zmdi zmdi-eye"></i>
                    </span>
                    <input
                      className="input100"
                      type="password"
                      name="pass"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
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
      </div>
  );
};

export default Login;