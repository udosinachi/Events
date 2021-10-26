import React from 'react'
import Sponsors from '../sponsors/Sponsors'
import Updates from '../updates/Updates'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <Updates />
      <Sponsors />
      <div className='footer-div'>
        <div className='footer-logo'>
          <img
            src='https://branchoutsf.com/img/logo/logo.leaf.png'
            alt='branchout'
          />
        </div>
        <div className='footer-icons'>
          <i className='fab fa-twitter-square'></i>
          <i className='fab fa-facebook-square'></i>
        </div>

        <div className='footer-links'>
          <a href='lik'>About Us</a>
          <a href='lik'>Terms of use</a>
          <a href='lik'>Privacy</a>
        </div>
      </div>

      <div className='footer-copyrights'>
        <span>
          Udosinachi provides the leading mobile linking platform with solutions
          that unify user experience and measurement across different devices,
          platforms, and channels.
        </span>
        <br />
        <br />
        <span>©2021 Udosinachi. All rights reserved.</span>
      </div>
    </div>
  )
}

export default Footer
