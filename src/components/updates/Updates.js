import React from 'react'
import './Update.css'

const Updates = () => {
  return (
    <div className='update'>
      <h3 className='update-text'>Get Updates for New Posts</h3>
      <div className='update-input'>
        <div className='update-input-div'>
          <input type='text' placeholder='First Name' />
        </div>
        <div className='update-input-div'>
          <input type='text' placeholder='Last Name' />
        </div>
        <div className='update-input-div'>
          <input type='text' placeholder='Email Address' />
        </div>
      </div>
      <button className='update-button'>Get Updates</button>
    </div>
  )
}

export default Updates
