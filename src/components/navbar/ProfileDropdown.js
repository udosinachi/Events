import * as React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'

export default function ProfileDropdown(props) {
  const history = useHistory()
  const [logout, setLogout] = React.useState('')
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleLogout = () => {
    setLogout(localStorage.setItem('token', ''))
    setLogout(localStorage.setItem('id', ''))
    setLogout(localStorage.setItem('fullName', ''))
    setLogout(localStorage.setItem('businessName', ''))
    setLogout(localStorage.setItem('email', ''))
    setLogout(localStorage.setItem('phoneNumber', ''))
    setLogout(localStorage.setItem('password', ''))
    setLogout(localStorage.setItem('category', ''))
    setLogout(localStorage.setItem('image', ''))
    setLogout(localStorage.setItem('post', ''))
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
        <MenuItem onClick={handleClose}>
          <Link to='/user-profile' className='link'>
            Profile
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  )
}
