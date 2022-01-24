import * as React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Icon from '@mui/material/Icon'
import { Button } from '@mui/material'

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
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
        <MenuItem onClick={handleClose}>View User</MenuItem>
        <MenuItem onClick={handleClose}>Delete User</MenuItem>
      </Menu>
    </div>
  )
}
