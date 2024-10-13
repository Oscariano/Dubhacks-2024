import React from 'react'
import './onBoarding.css'

function OnBoarding() {
  return (
    <div className='on-boarding'>
      <div className="box-container">
        <div className='box flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <img src="/newbee.png" alt="" />
              <p className='bee'>Newbee?</p>
            </div>
            <div className="sign-up flip-card-back">
            <a href="/">sign up</a>
            </div>
          </div>
        </div>
        <div className='box flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <img src="/queenbee.png" style={{width: "15rem", height: "10rem"}} alt="" />
              <p className='bee'>Oldbee?</p>
            </div>
            <div className="sign-up flip-card-back">
              <a href="/login">Log in</a>
            </div>
          </div>
        </div>
      </div>
      <div className="guest">
        <p>Login as Guest</p>
      </div>
    </div>
  )
}

export default OnBoarding
