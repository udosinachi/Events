import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import Moment from 'react-moment'
import './Blog.css'

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
import LinearProgress from '@mui/material/LinearProgress'

const BlogPost = () => {
  const [toggle, setToggle] = useState('All')
  const [heart, setHeart] = useState(true)
  const [category, setCategory] = useState([])
  const [blog, setBlog] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    axios
      .get('https://eventplanningweb.herokuapp.com/category/allcategory')
      .then((res) => {
        setCategory(res.data.categories)
        setLoader(false)
      })
      .catch((err) => {
        toast.error('Error please try again')
        setLoader(false)
      })

    axios
      .get('https://eventplanningweb.herokuapp.com/blog/blogposts')
      .then((res) => {
        setBlog(res.data.blogposts)
        setLoader(false)
      })
      .catch((err) => {
        toast.error('Unable to connect')
        setLoader(false)
      })
  }, [])

  return (
    <div>
      {loader === true ? (
        <LinearProgress />
      ) : (
        <>
          <div>
            <button
              className={
                toggle === 'All' ? 'filter-button-click' : 'filter-button'
              }
              onClick={() => setToggle('All')}
            >
              All
            </button>

            {category.map((item) => {
              return (
                <button
                  key={item._id}
                  className={
                    toggle === item.name
                      ? 'filter-button-click'
                      : 'filter-button'
                  }
                  onClick={() => setToggle(item.name)}
                >
                  {item.name}
                </button>
              )
            })}
          </div>

          {blog.map((text) => (
            <span key={text._id}>
              {toggle === 'All' ? (
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
                      <Moment
                        format='D MMM YYYY'
                        withTitle
                        className='blog-date'
                      >
                        {text.createdAt}
                      </Moment>
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
              ) : (
                toggle === text.category && (
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
                      title={
                        <span style={{ color: 'white' }}>{text.name}</span>
                      }
                      subheader={
                        <Moment
                          format='D MMM YYYY'
                          withTitle
                          className='blog-date'
                        >
                          {text.createdAt}
                        </Moment>
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
                )
              )}
            </span>
          ))}
          <ToastContainer />
        </>
      )}
    </div>
  )
}

export default BlogPost
