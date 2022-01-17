import React from 'react'
import './Sponsors.css'

const Sponsors = () => {
  return (
    <div className='sponsors'>
      <div className='sponsors-div'>
        <div className='sponsors-head-text'>
          <span>Our</span>
          <strong>Sponsors</strong>
        </div>

        <div className='sponsors-img-div'>
          <img
            src='/assets/joyride.png'
            alt='joyride'
            className='sponsors-img'
          />
          <img src='/assets/mcbee.png' alt='mcbee' className='sponsors-img' />
        </div>
      </div>
    </div>
  )
}

export default Sponsors
