import * as React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }} className='skewing'>
      <AppBar position='fixed' color='secondary' className='nav'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link to='/' className='link'>
              News
            </Link>
          </Typography>
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
        </Toolbar>
      </AppBar>
    </Box>
  )
}
