import React, { useEffect, useState } from 'react'
import '../blog/Blog.css'
import axios from 'axios'
import { useParams } from 'react-router'

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

const ProfileCard = () => {
  const [heart, setHeart] = useState(true)
  const [userBlog, setUserBlog] = useState([])

  const { id } = useParams()

  useEffect(() => {
    axios
      .get(`https://eventplanningweb.herokuapp.com/blog/user/${id}`)
      .then((res) => {
        setUserBlog(res.data.user)
      })
  }, [id])

  return (
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
                    <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                      {text.name[0]}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label='settings'>
                      <MoreVertIcon sx={{ color: red[50] }} />
                    </IconButton>
                  }
                  title={<span style={{ color: 'white' }}>{text.name}</span>}
                  subheader={
                    <span className='blog-date'>
                      <Moment
                        format='D MMM YYYY'
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
  )
}

export default ProfileCard
