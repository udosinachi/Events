import React from 'react'
import './Profile.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className='profile'>
        <div className='profile-div'>
          <div className='profile-image-div'>
            <img
              src='/assets/optician.jpg'
              alt='events'
              className='profile-image'
            />
          </div>
          <div className='profile-text-div'>
            <p className='profile-p'>Udo</p>
            <h4 className='profile-h4'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </h4>
            <p className='profile-p2'>Udo</p>
            <p className='profile-p3'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica'
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile
