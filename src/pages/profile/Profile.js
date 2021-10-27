import React from 'react'
import './Profile.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import BlogPost from '../blog/BlogPost'

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className='profile'>
        <div className='profile-div'>
          <p className='profile-text-header'> Chantal's Event Planning</p>
          <div className='profile-body'>
            <div className='profile-image-div'>
              <img
                src='/assets/optician.jpg'
                alt='events'
                className='profile-image'
              />
            </div>
            <div className='profile-text-div'>
              <div className='profile-text-subdiv'>
                <h4 className='profile-h4'>Caterer</h4>
                <p className='profile-p2'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica'
                </p>
                <p className='profile-p3'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except
                  Antarctica'
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className='profile-text-header'> POSTS</p>
            <BlogPost />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile
