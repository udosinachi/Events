import * as React from 'react'
import axios from 'axios'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { toast } from 'react-toastify'
import { red } from '@mui/material/colors'
import { Button, Modal, TextField } from '@mui/material'
import { Box } from '@mui/system'
import SaveIcon from '@mui/icons-material/Save'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function EditDropdown({ id, refresh }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const [mod, setMod] = React.useState(false)
  const [editText, setEditText] = React.useState('')

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleInput = () => {
    setMod(true)
  }
  const handleCloseInput = () => {
    setMod(false)
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
      .catch((err) => {
        toast.error('Unable to Delete Post')
      })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const data = {
      text: editText,
    }
    axios
      .post(`https://eventplanningweb.herokuapp.com/blog/edit/${id}`, data)
      .then((res) => {
        console.log(res.data)
        refresh()
        setAnchorEl(null)
        setEditText('')
        toast.success('Post Text has been editted')
      })
      .catch((err) => {
        toast.error('Unable to edit')
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
        <MenuItem onClick={handleInput}>Edit</MenuItem>
        <Modal onClose={handleCloseInput} open={mod}>
          <form onSubmit={submitHandler}>
            <Box sx={style}>
              <TextField
                fullWidth
                label=' Edit Text'
                id='fullWidth'
                className='edit-inputs'
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <Button
                type='submit'
                variant='contained'
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
            </Box>
          </form>
        </Modal>
        <MenuItem onClick={deleteHandler}>Delete</MenuItem>
      </Menu>
    </div>
  )
}
