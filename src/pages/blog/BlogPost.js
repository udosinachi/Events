import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import Moment from 'react-moment'
import './Blog.css'
import BlogToPost from './BlogToPost'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'

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
  const [postText, setPostText] = useState('')

  const relosd = () => {
    axios
      .get('https://eventplanningweb.herokuapp.com/blog/blogposts')
      .then((res) => {
        const rev = res.data.blogposts.reverse()
        setBlog(rev)
        setLoader(false)
      })
      .catch((err) => {
        toast.error('Unable to connect')
        setLoader(false)
      })
  }

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
        relosd()
      })
      .catch((err) => {
        toast.error('Unable to post')
      })
  }

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
        const rev = res.data.blogposts.reverse()
        setBlog(rev)
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

          {loader === true ? (
            <LinearProgress />
          ) : (
            <>
              {blog.map((text) => (
                <span key={text._id}>
                  {toggle === 'All' ? (
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
            </>
          )}

          <ToastContainer />
        </>
      )}
    </div>
  )
}

export default BlogPost
