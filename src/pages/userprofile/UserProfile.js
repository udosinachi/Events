import React from 'react'
import './UserProfile.css'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'

const UserProfile = () => {
  return (
    <div className='user-profile'>
      <Navbar />
      <div className='user-profile-div'>
        <Footer />
      </div>
    </div>
  )
}

export default UserProfile
