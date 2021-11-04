import * as React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Drawer from './Drawer'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
// import IconButton from '@mui/material/IconButton'

export default function Navbar() {
  const [name] = useState(localStorage.getItem('firstName'))

  return (
    <Box sx={{ flexGrow: 1 }} className='skewing'>
      <AppBar position='fixed' className='nav'>
        <Toolbar>
          {/* <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          > */}
          <Drawer className='drawer' />
          {/* </IconButton> */}
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link to='/' className='link'>
              Udosinachi
            </Link>
          </Typography>
          <Button color='inherit' className='link1'>
            <Link to='/' className='link'>
              Home
            </Link>
          </Button>
          <Button color='inherit' className='link1'>
            <Link to='/blog' className='link'>
              Blog
            </Link>
          </Button>
          <Button color='inherit' className='link1'>
            <Link to='/about' className='link'>
              About
            </Link>
          </Button>
          <Button color='inherit' className='link1'>
            <Link to='/contact' className='link'>
              Contact us
            </Link>
          </Button>
          {/* <img src={localStorage.getItem('image')} alt='default' /> */}
          {localStorage.getItem('firstName') !== name ? (
            <Button color='inherit'>
              <Link to='/about' className='link'>
                {name}
              </Link>
            </Button>
          ) : (
            <>
              <Button color='inherit'>
                <Link to='/login' className='link'>
                  Login
                </Link>
              </Button>
              <Button color='inherit'>
                <Link to='/signup' className='link'>
                  Sign Up
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
