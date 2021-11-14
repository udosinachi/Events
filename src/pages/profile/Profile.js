import React, { useState } from 'react'
import axios from 'axios'
import './Profile.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import ProfileCard from './ProfileCard'
import { TextField } from '@mui/material'
import { toast } from 'react-toastify'
import Button from '@mui/material/Button'
import BlogToPost from '../blog/BlogToPost'

const Profile = () => {
  // const [blog, setBlog] = useState([])
  // const [loader, setLoader] = useState(false)
  const [postText, setPostText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = {
      text: postText,
    }
    const headers = {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    }
    axios
      .post('https://eventplanningweb.herokuapp.com/blog/blogpost', data, {
        headers: headers,
      })
      .then((res) => {
        toast.success('Post Successful')
      })
      .catch((err) => {
        toast.error('Unable to post')
      })
  }
  return (
    <div>
      <Navbar />
      <div className='profile'>
        <div className='profile-div'>
          <p className='profile-text-header'>
            {' '}
            {localStorage.getItem('businessName')}
          </p>
          <div className='profile-body'>
            <div className='profile-image-div'>
              <img
                src={localStorage.getItem('image')}
                alt='events'
                className='profile-image'
              />
            </div>
            <div className='profile-text-div'>
              <div className='profile-text-subdiv'>
                <h4 className='profile-h4'>
                  {localStorage.getItem('category')}
                </h4>
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
            <BlogToPost head='create a new post'>
              {' '}
              <TextField
                margin='normal'
                required
                fullWidth
                id='postText'
                label='Post Text'
                name='postText'
                autoComplete='postText'
                autoFocus
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                onClick={handleSubmit}
                sx={{ mt: 3, mb: 2, bgcolor: '#20364b' }}
              >
                Post
              </Button>
            </BlogToPost>
          </div>

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

export default Profile
