import React, { useEffect, useState } from 'react'
import './UserProfile.css'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import { Button, CircularProgress, TextField } from '@mui/material'

import axios from 'axios'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import { ImageList, ImageListItem } from '@mui/material'
import Moment from 'react-moment'
import EditUserProfile from '../edituserprofile/EditUserProfile'
import SaveIcon from '@mui/icons-material/Save'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { toast } from 'react-toastify'
import EditDropdown from '../../components/editdropdown/EditDropdown'
import EditProfileImage from '../edituserprofile/EditProfileImage'

const UserProfile = () => {
  const [heart, setHeart] = useState(true)
  const [userBlog, setUserBlog] = useState([])
  const [loader, setLoader] = useState(false)
  const [fullName, setFullName] = useState(localStorage.getItem('fullName'))
  const [businessName, setBusinessName] = useState(
    localStorage.getItem('businessName')
  )
  const [email, setEmail] = useState(localStorage.getItem('email'))
  const [phoneNumber, setPhoneNumber] = useState(
    localStorage.getItem('phoneNumber')
  )
  const [userText, setUserText] = useState(localStorage.getItem(''))
  const [category, setCategory] = useState(localStorage.getItem('category'))
  const [career, setCareer] = useState([])
  const [reload, setReload] = useState(true)

  useEffect(() => {
    setLoader(true)
    axios
      .get(
        `https://eventplanningweb.herokuapp.com/blog/user/${localStorage.getItem(
          'id'
        )}`
      )
      .then((res) => {
        setUserBlog(res.data.latestuserpost)
        setLoader(false)
      })
      .catch((res) => {
        toast.error('Unable to Display Posts')
      })

    axios
      .get('https://eventplanningweb.herokuapp.com/category/allcategory')
      .then((res) => {
        setCareer(res.data.categories)
      })
      .catch((err) => {
        toast.error('Unable to Display Categories')
      })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const headers = {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    }
    const data = {
      fullName,
      businessName,
      email,
      phoneNumber,
      category,
      userText,
    }
    axios
      .post('https://eventplanningweb.herokuapp.com/auth/users/edit', data, {
        headers: headers,
      })
      .then((res) => {
        if (res.data.hasError === false) {
          toast.success('Successfully updated')
          localStorage.setItem('fullName', res.data.fullName)
          localStorage.setItem('businessName', res.data.businessName)
          localStorage.setItem('email', res.data.email)
          localStorage.setItem('phoneNumber', res.data.phoneNumber)
          localStorage.setItem('category', res.data.category)
          localStorage.setItem('userText', res.data.userText)
          setReload(!reload)
        } else {
          toast.error(res.data.message)
        }
      })
      .catch((res) => {
        toast.error('Unable to update')
      })
  }

  const load = () => {
    axios
      .get(
        `https://eventplanningweb.herokuapp.com/blog/user/${localStorage.getItem(
          'id'
        )}`
      )
      .then((res) => {
        setUserBlog(res.data.user)
      })
      .catch((res) => {
        toast.error('Unable to Display Posts')
      })
  }

  return (
    <div className='user-profile'>
      <Navbar />
      <div className='user-profile-div'>
        <div className='user-div'>
          <div className='user-image-div'>
            <img
              src={localStorage.getItem('image')}
              alt='profile'
              className='user-profile-image'
            />
            <EditProfileImage />
          </div>
          <div className='user-names'>
            <span className='bn'>{localStorage.getItem('businessName')}</span>
            <span className='fn'>{localStorage.getItem('fullName')}</span>
          </div>
          <div className='edit-btn'>
            <EditUserProfile header='Edit Profile'>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label='Business Name'
                  id='fullWidth'
                  className='edit-inputs'
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                />
                <TextField
                  fullWidth
                  label='Full Name'
                  id='fullWidth'
                  className='edit-inputs'
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <TextField
                  fullWidth
                  label='Email'
                  id='fullWidth'
                  className='edit-inputs'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-label'>
                    Category *
                  </InputLabel>

                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    label='Category *'
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                  >
                    {career.map((cat) => (
                      <MenuItem key={cat._id} value={cat.name}>
                        {cat.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  label='Phone Number'
                  id='fullWidth'
                  className='edit-inputs'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <TextField
                  fullWidth
                  label='User Text'
                  id='fullWidth'
                  className='edit-inputs'
                  value={userText}
                  onChange={(e) => setUserText(e.target.value)}
                />

                <Button
                  type='submit'
                  variant='contained'
                  startIcon={<SaveIcon />}
                >
                  Save
                </Button>
              </form>
            </EditUserProfile>
          </div>
        </div>

        <div className='user-personal-info'>
          <p>Email: {localStorage.getItem('email')}</p>
          <p>Phone Number: {localStorage.getItem('phoneNumber')}</p>
          <p>Category: {localStorage.getItem('category')}</p>
          <p>Description: {localStorage.getItem('userText')}</p>
        </div>

        <div>
          <h2 className='profile-h2'>My Posts</h2>
          {loader === true ? (
            <div className='loader'>
              <CircularProgress className='main-loader' />
            </div>
          ) : (
            <>
              {!userBlog || userBlog.length === 0 ? (
                <h3>No Post</h3>
              ) : (
                <div>
                  {userBlog.map((text) => (
                    <span key={text._id}>
                      <Card className='blog-card'>
                        <CardHeader
                          avatar={
                            <Avatar
                              sx={{ bgcolor: red[500] }}
                              aria-label='recipe'
                            >
                              {text.name[0]}
                            </Avatar>
                          }
                          action={<EditDropdown id={text._id} refresh={load} />}
                          title={
                            <span style={{ color: 'white' }}>{text.name}</span>
                          }
                          subheader={
                            <span className='blog-date'>
                              <Moment
                                format='D MMM YYYY HH:mm'
                                withTitle
                                className='blog-date'
                              >
                                {text.createdAt}
                              </Moment>
                            </span>
                          }
                        />

                        <CardContent>
                          <Typography variant='body2' color='white'>
                            {text.text}
                          </Typography>
                        </CardContent>

                        <ImageList cols={2} className='blog-imagelist'>
                          {text.blogImage.map((item) => (
                            <ImageListItem key={item}>
                              <img
                                src={item}
                                alt='blogpics'
                                loading='lazy'
                                className='blog-images'
                              />
                            </ImageListItem>
                          ))}
                        </ImageList>

                        <CardActions disableSpacing>
                          <IconButton
                            aria-label='add to favorites'
                            onClick={() => {
                              setHeart(!heart)
                            }}
                          >
                            <FavoriteIcon
                              className={heart ? 'heart-white' : 'heart-red'}
                            />
                          </IconButton>
                          <IconButton aria-label='share'>
                            <ShareIcon sx={{ color: red[50] }} />
                          </IconButton>
                        </CardActions>
                      </Card>
                    </span>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default UserProfile
