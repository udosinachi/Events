import * as React from 'react'
import axios from 'axios'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Icon from '@mui/material/Icon'
import { Button } from '@mui/material'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

export default function LongMenu({ id, reload, admin }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const deleteHandler = () => {
    const headers = {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    }
    axios
      .delete(
        `https://eventplanningweb.herokuapp.com/auth/users/deleteuser/${id}`,
        { headers: headers }
      )
      .then((res) => {
        // console.log(res.data)
        setAnchorEl(null)
        toast.success('Successfully deleted a User')
      })
      .catch((err) => {
        toast.error('Unable to Delete User')
      })
    reload()
    setAnchorEl(null)
  }

  const makeAdmin = () => {
    const headers = { authorization: `Bearer ${localStorage.getItem('token')}` }
    axios
      .get(
        `https://eventplanningweb.herokuapp.com/auth/users/makeadmin/${id}`,
        { headers: headers }
      )
      .then((res) => {
        if (res.data.hasError === false) {
          reload()
          setAnchorEl(null)
          toast.success('User is now an Admin')
        }
      })
      .catch((err) => {
        toast.error('Unable to make Admin')
        console.log(err)
      })
  }

  return (
    <div>
      <Button onClick={handleClick}>
        <Icon
          baseClassName='fas'
          className='fas fa-ellipsis-h'
          color='primary'
        />
      </Button>
      <Menu
        id='long-menu'
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to={`/admin-viewusers/${id}`} className='link'>
            View User
          </Link>
        </MenuItem>
        {admin === false ? (
          <MenuItem onClick={makeAdmin}>Make Admin</MenuItem>
        ) : null}

        <MenuItem
          onClick={() => {
            if (window.confirm('Are you sure you want to delete this user?')) {
              deleteHandler()
            }
          }}
          className='styles'
        >
          Delete User
        </MenuItem>
      </Menu>
    </div>
  )
}
