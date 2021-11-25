import React, { useEffect, useState } from 'react'
import './UserProfile.css'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import { Button, CircularProgress } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

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
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { ImageList, ImageListItem } from '@mui/material'
import Moment from 'react-moment'

const UserProfile = () => {
  const [heart, setHeart] = useState(true)
  const [userBlog, setUserBlog] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    axios
      .get(
        `https://eventplanningweb.herokuapp.com/blog/user/${localStorage.getItem(
          'id'
        )}`
      )
      .then((res) => {
        setUserBlog(res.data.user)
        setLoader(false)
      })
  }, [])
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
          </div>
          <div className='user-names'>
            <span className='bn'>{localStorage.getItem('businessName')}</span>
            <span className='fn'>{localStorage.getItem('fullName')}</span>
          </div>
          <div className='edit-btn'>
            <Button variant='contained' startIcon={<EditIcon />}>
              Edit
            </Button>
          </div>
        </div>

        <div className='user-personal-info'>
          <p>Email: {localStorage.getItem('email')}</p>
          <p>Phone Number: {localStorage.getItem('phoneNumber')}</p>
          <p>Category: {localStorage.getItem('category')}</p>
        </div>

        <div className='user-profile-text-div'>
          <p>
            aaaaaaaaaaaaaaa bbbbbbbbb ccccccccccc ddddddddddddd fffffffffffffff
            ggggggggggggg ssssssssssss aaaaaaaaaaaa wwwwwwwwww xxxxxxxxxxxxxxx
            cccccc vvvvvvf f fffffffffffffffff
          </p>
        </div>

        <div>
          <h2>My Posts</h2>
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
                          action={
                            <IconButton aria-label='settings'>
                              <MoreVertIcon sx={{ color: red[50] }} />
                            </IconButton>
                          }
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
