import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import ProfileCard from '../profile/ProfileCard'
import { useParams } from 'react-router'
import CircularProgress from '@mui/material/CircularProgress'

const AdminUsers = () => {
  const [profile, setProfile] = useState({})
  const [loader, setLoader] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoader(true)
    axios
      .get(`https://eventplanningweb.herokuapp.com/auth/users/${id}`)
      .then((res) => {
        setProfile(res.data.userId)
        setLoader(false)
      })
  }, [id])

  return (
    <div>
      <Navbar />

      <div className='profile'>
        <div className='profile-div'>
          {loader === true ? (
            <div className='loader'>
              <CircularProgress className='main-loader' />
            </div>
          ) : (
            <>
              <p className='profile-text-header'>{profile.businessName}</p>
              <div className='profile-body'>
                <div className='profile-image-div'>
                  <img
                    src={profile.image}
                    alt='events'
                    className='profile-image'
                  />
                </div>
                <div className='profile-text-div'>
                  <div className='profile-text-subdiv'>
                    <h4 className='profile-h4'>{profile.category}</h4>
                    <p className='profile-p2'>{profile.fullName}</p>
                    <p className='profile-p3'>{profile.userText}</p>
                  </div>
                </div>
              </div>
            </>
          )}

          <div>
            <p className='profile-text-header'> POSTS</p>
            <ProfileCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AdminUsers
