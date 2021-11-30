import * as React from 'react'
import axios from 'axios'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { toast } from 'react-toastify'
import { red } from '@mui/material/colors'

export default function EditDropdown({ id, refresh }) {
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
      .delete(`https://eventplanningweb.herokuapp.com/blog/delete/${id}`)
      .then((res) => {
        console.log(res.data)
        refresh()
        setAnchorEl(null)
        toast.success('Post Successfully deleted')
      })
      .catch((res) => {
        toast.error('Unable to Delete Post')
      })
  }

  return (
    <div>
      <IconButton
        aria-label='more'
        id='long-button'
        aria-controls='long-menu'
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreVertIcon sx={{ color: red[50] }} />
      </IconButton>
      <Menu
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem>Edit</MenuItem>
        <MenuItem onClick={deleteHandler}>Delete</MenuItem>
      </Menu>
    </div>
  )
}
