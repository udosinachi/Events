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
import CircularProgress from '@mui/material/CircularProgress'

const BlogPost = () => {
  const [toggle, setToggle] = useState('All')
  const [heart, setHeart] = useState(true)
  const [category, setCategory] = useState([])
  const [blog, setBlog] = useState([])
  const [loader, setLoader] = useState(false)
  // const [check, setCheck] = useState(false)
  const [postText, setPostText] = useState('')
  const [postImage] = useState([])
  const [it, setIt] = useState([])

  const relosd = () => {
    setLoader(true)
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

  const addPic = (pic) => {
    console.log(pic)
    if (pic) {
      if (
        pic.type.includes('jpeg') ||
        pic.type.includes('png') ||
        pic.type.includes('jpg')
      ) {
        if (pic.size <= 500000) {
          getBase64(pic).then((result) => {
            pic['base64'] = result
            for (let i = 0; i < it.length; i++) {
              if (it[i] === result) {
                toast.error('Image already selected')
                return false
              }
            }
            if (it.length <= 3) {
              setIt((oldArray) => [...oldArray, result])
              console.log(it)
            } else {
              toast.warn('Not more than 4 pics can be posted')
            }
          })
        } else {
          toast.warn('Image should be 500kb or less')
        }
      } else {
        toast.warn('Picture must be in JPEG, PNG or JPG format')
      }
    }
  }

  const cancelHandler = (img) => {
    let curr = []

    for (let i = 0; i < it.length; i++) {
      if (it[i] !== img) {
        curr.push(it[i])
      }
      setIt(curr)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const data = {
      text: postText,
      blogImage: it,
    }
    console.log(data)
    const headers = {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    }
    axios
      .post('https://eventplanningweb.herokuapp.com/blog/blogpost', data, {
        headers: headers,
      })
      .then((res) => {
        toast.success('Post Successful')
        setPostText('')
        setIt([])
        relosd()
      })
      .catch((err) => {
        toast.error('Unable to post')
      })
  }

  useEffect(() => {
    localStorage.setItem('post', '1')
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
    setLoader(true)
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

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      // let fileInfo
      let baseURL = ''
      // Make new FileReader
      let reader = new FileReader()

      // Convert the file to base64 text
      reader.readAsDataURL(file)

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        // console.log('Called', reader)
        baseURL = reader.result
        resolve(baseURL)
      }
    })
  }

  return (
    <div>
      {loader === true ? (
        <div className='loader'>
          <CircularProgress className='main-loader' />
        </div>
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
            <BlogToPost head='Create a new post'>
              <div className='ii'>
                <TextField
                  className='post-input'
                  margin='normal'
                  required
                  fullWidth
                  id='postText'
                  label='Post Text'
                  name='postText'
                  autoComplete='postText'
                  // autoFocus
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                />
                <label className='input-file'>
                  Select an image...
                  <input
                    type='file'
                    value={postImage}
                    onChange={(e) => addPic(e.target.files[0])}
                  />
                </label>
              </div>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                onClick={handleSubmit}
                sx={{ mt: 3, mb: 2, bgcolor: '#20364b' }}
              >
                Post
              </Button>
              <p className='post-text'>{postText}</p>
              <div className='main-posting-div'>
                {!it || it.length === 0 ? (
                  <div>No Picture has been added</div>
                ) : (
                  <>
                    {it.map((peg) => (
                      <div key={peg} className='posting-imgdiv'>
                        <img src={peg} alt='jh' className='posting-img' />
                        <button onClick={() => cancelHandler(peg)}>X</button>
                      </div>
                    ))}{' '}
                  </>
                )}
              </div>
            </BlogToPost>
          </div>

          {loader === true ? (
            <div className='loader'>
              <CircularProgress className='main-loader' />
            </div>
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
                            format='D MMM YYYY HH:mm'
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
                          <ImageListItem key={item} className='blog-images'>
                            <img src={item} alt='blogpics' />
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
                              format='D MMM YYYY HH:mm'
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
