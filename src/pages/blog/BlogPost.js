import React, { useState } from 'react'
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
import BlogImage from './BlogImage'
import BlogText from './BlogText'

const BlogPost = () => {
  const [toggle, setToggle] = useState('All')
  const [heart, setHeart] = useState(true)

  return (
    <div>
      <div>
        <button
          // className='filter-button'
          className={toggle === 'All' ? 'filter-button-click' : 'filter-button'}
          onClick={() => setToggle('All')}
        >
          All
        </button>
        <button
          className={
            toggle === 'Cake' ? 'filter-button-click' : 'filter-button'
          }
          onClick={() => setToggle('Cake')}
        >
          Cakes
        </button>
        <button
          className={
            toggle === 'Caterer' ? 'filter-button-click' : 'filter-button'
          }
          onClick={() => setToggle('Caterer')}
        >
          Caterers
        </button>
        <button
          className={toggle === 'Dj' ? 'filter-button-click' : 'filter-button'}
          onClick={() => setToggle('Dj')}
        >
          DJ
        </button>
        <button
          className={
            toggle === 'Decoration' ? 'filter-button-click' : 'filter-button'
          }
          onClick={() => setToggle('Decoration')}
        >
          Decoration
        </button>
        <button
          className={toggle === 'MC' ? 'filter-button-click' : 'filter-button'}
          onClick={() => setToggle('MC')}
        >
          MC
        </button>
      </div>
      {BlogText.map((text) => (
        <span key={text.id}>
          {/* For displaying all */}
          {toggle === `${text.all}` && (
            <Card className='blog-card'>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                    {text.avatar}
                  </Avatar>
                }
                action={
                  <IconButton aria-label='settings'>
                    <MoreVertIcon sx={{ color: red[50] }} />
                  </IconButton>
                }
                title={<span style={{ color: 'white' }}>{text.name}</span>}
                subheader={<span className='blog-date'>{text.date}</span>}
              />
              <CardContent>
                <Typography variant='body2' color='white'>
                  {text.paragraph}
                </Typography>
              </CardContent>

              <ImageList cols={2} className='blog-imagelist'>
                {BlogImage.map((item) => (
                  <ImageListItem key={item.id}>
                    <img
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
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
          )}

          {/* For each Category */}
          {toggle === `${text.category}` && (
            <Card className='blog-card'>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                    {text.avatar}
                  </Avatar>
                }
                action={
                  <IconButton aria-label='settings'>
                    <MoreVertIcon sx={{ color: red[50] }} />
                  </IconButton>
                }
                title={<span style={{ color: 'white' }}>{text.name}</span>}
                subheader={<span className='blog-date'>{text.date}</span>}
              />
              <CardContent>
                <Typography variant='body2' color='white'>
                  {text.paragraph}
                </Typography>
              </CardContent>

              <ImageList cols={2} className='blog-imagelist'>
                {BlogImage.map((item) => (
                  <ImageListItem key={item.id}>
                    <img
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
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
          )}
        </span>
      ))}
    </div>
  )
}

export default BlogPost
