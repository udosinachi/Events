import * as React from 'react'
import './Navbar.css'

import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
// import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import LoginIcon from '@mui/icons-material/Login'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import ContactIcon from '@mui/icons-material/ContactPage'
import InfoIcon from '@mui/icons-material/Info'
import UpdateIcon from '@mui/icons-material/Update'
import IconButton from '@mui/material/IconButton'

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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { name: 'Home', icon: <HomeIcon /> },
          { name: 'Blog', icon: <UpdateIcon /> },
          { name: 'About', icon: <InfoIcon /> },
          { name: 'Contact Us', icon: <ContactIcon /> },
        ].map((text) => (
          <ListItem button key={text.name}>
            <ListItemIcon>
              {text.icon}
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
            </ListItemIcon>
            <ListItemText primary={text.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { name: 'Login', Icon: <LoginIcon /> },
          { name: 'Sign Up', Icon: <AppRegistrationIcon /> },
        ].map((text) => (
          <ListItem button key={text.name}>
            <ListItemIcon>{text.Icon}</ListItemIcon>
            <ListItemText primary={text.name} />
          </ListItem>
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
            <MenuIcon />
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
