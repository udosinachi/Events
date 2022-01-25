import * as React from 'react'
import axios from 'axios'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Icon from '@mui/material/Icon'
import { Button } from '@mui/material'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

export default function LongMenu({ id, reload }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const deleteHandler = () => {
    axios
      .delete(
        `https://eventplanningweb.herokuapp.com/auth/users/deleteuser/${id}`
      )
      .then((res) => {
        console.log(res.data)
        setAnchorEl(null)
        toast.success('Successfully deleted a User')
      })
      .catch((err) => {
        toast.error('Unable to Delete User')
      })
    reload()
    setAnchorEl(null)
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
        <MenuItem onClick={deleteHandler}>Delete User</MenuItem>
      </Menu>
    </div>
  )
}
