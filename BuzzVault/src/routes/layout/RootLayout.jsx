import React from 'react'
import './rootLayout.css'

export default function RootLayout() {
  return (
    <div className='root-layout'>
      <div className='header-left'>
        <p>BuzzVault</p>
      </div>
      <div className='header-right'>
        <span>Contact Us</span>
        <span>About us</span>
      </div>
    </div>
  )
}
