import * as React from 'react'
import './Blog.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className='blog'>
        <div className='blog-div'>
          <Card className='blog-card'>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label='settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title='Shrimp and Chorizo Paella'
              subheader='September 14, 2016'
            />
            <CardContent>
              <Typography variant='body2' color='text.secondary'>
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardMedia
              component='img'
              height='400'
              image='/assets/optician.jpg'
              alt='Paella dish'
            />

            <CardActions disableSpacing>
              <IconButton aria-label='add to favorites'>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blog
