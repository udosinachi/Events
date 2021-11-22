import * as React from 'react'
import './Navbar.css'

import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import ContactIcon from '@mui/icons-material/ContactPage'
import InfoIcon from '@mui/icons-material/Info'
import UpdateIcon from '@mui/icons-material/Update'
import IconButton from '@mui/material/IconButton'
import { blue } from '@mui/material/colors'
import { Link } from 'react-router-dom'

export default function Drawer() {
  const [state, setState] = React.useState({
    left: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{ width: 290 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { name: 'Home', icon: <HomeIcon />, to: '/' },
          { name: 'Blog', icon: <UpdateIcon />, to: '/blog' },
          { name: 'About', icon: <InfoIcon />, to: '/about' },
          { name: 'Contact Us', icon: <ContactIcon />, to: '/contact' },
        ].map((text) => (
          <span key={text.name}>
            <Link to={`${text.to}`} className='b'>
              <ListItem button>
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItem>
            </Link>
          </span>
        ))}
      </List>
    </Box>
  )

  return (
    <div className='drawer'>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            size='larger'
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon sx={{ color: blue[500] }} className='nav-icon' />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  )
}
