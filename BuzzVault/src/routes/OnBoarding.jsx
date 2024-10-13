import React from 'react'
import './onBoarding.css'

function OnBoarding() {
  return (
    <div className='on-boarding'>
      <div className="box-container">
        <div className='box'>
          <div className="sign-up">
            <p>Sign</p>
            <p>Up</p>
            <p className='bee'>Newbee?</p>
          </div>
        </div>
        <div className='box'>
          <div className="sign-up">
            <p>Sign</p>
            <p>In</p>
            <p className='bee'>Oldbee?</p>
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
