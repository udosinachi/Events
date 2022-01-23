import * as React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'

export default function ProfileDropdown(props) {
  const history = useHistory()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleLogout = () => {
    localStorage.setItem('token', '')
    localStorage.setItem('id', '')
    localStorage.setItem('fullName', '')
    localStorage.setItem('businessName', '')
    localStorage.setItem('email', '')
    localStorage.setItem('phoneNumber', '')
    localStorage.setItem('password', '')
    localStorage.setItem('category', '')
    localStorage.setItem('image', '')
    localStorage.setItem('post', '')
    localStorage.setItem('isAdmin', '')
    history.push('/')
    window.location.reload()
  }

  return (
    <div>
      <Button
        id='fade-button'
        aria-controls='fade-menu'
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <img src={props.image} alt='user' className='user-image' />
        {props.name}
      </Button>
      <Menu
        id='fade-menu'
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {localStorage.getItem('isAdmin') === 'true' ? (
          <Link to='/admin' className='link'>
            <MenuItem onClick={handleClose}>Admin</MenuItem>
          </Link>
        ) : null}

        <Link to='/user-profile' className='link'>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>
        <Link to='/change-password' className='link'>
          <MenuItem onClick={handleClose}>Change Password</MenuItem>
        </Link>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  )
}
