import React from 'react'
import './Update.css'
import { useState } from 'react'
import { toast } from 'react-toastify'

const Updates = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    toast.success('Subscribed for Updates')
    setLastName('')
    setFirstName('')
    setEmail('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='update'>
        <h3 className='update-text'>Get Updates for New Posts</h3>
        <div className='update-input'>
          <div className='update-input-div'>
            <input
              type='text'
              placeholder='First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='update-input-div'>
            <input
              type='text'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className='update-input-div'>
            <input
              type='text'
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <button className='update-button' type='submit'>
          Get Updates
        </button>
      </div>
    </form>
  )
}

export default Updates
