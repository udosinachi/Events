import React from 'react'
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
  return (
    <div>
      {BlogText.map((text) => (
        <Card className='blog-card' key={text.id}>
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
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon sx={{ color: red[50] }} />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon sx={{ color: red[50] }} />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  )
}

export default BlogPost
