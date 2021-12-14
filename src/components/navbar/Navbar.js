import * as React from 'react'
import { Link } from 'react-router-dom'
// import { useState } from 'react'
import './Navbar.css'
import Drawer from './Drawer'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ProfileDropdown from './ProfileDropdown'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }} className='skewing'>
      <AppBar position='fixed' className='nav'>
        <Toolbar>
          <Drawer className='drawer' />
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
          {!localStorage.getItem('businessName') ? (
            <>
              <Button color='inherit' className='link2'>
                <Link to='/login' className='link'>
                  Login
                </Link>
              </Button>
              <Button color='inherit' className='link2'>
                <Link to='/signup' className='link'>
                  Sign up
                </Link>
              </Button>
            </>
          ) : (
            <div color='inherit' className='link2'>
              <ProfileDropdown
                name={localStorage.getItem('businessName').split(' ')[0]}
                image={localStorage.getItem('image')}
              />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
