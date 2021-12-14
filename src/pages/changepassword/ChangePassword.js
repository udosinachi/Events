import * as React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const theme = createTheme()

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [eye, setEye] = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault()

    const data = {
      oldPassword,
      password: newPassword,
    }
    console.log(data)
    const headers = {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    }

    axios
      .post(
        'https://eventplanningweb.herokuapp.com/auth/users/changepassword',
        data,
        { headers: headers }
      )
      .then((res) => {
        if (res.data.hasError === false) {
          console.log(res.data)
          toast.success(res.data.message)
          setOldPassword('')
          setNewPassword('')
          setConfirmPassword('')
        } else {
          toast.error(res.data.message)
        }
      })
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component='main' sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#20364b' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Change Password
            </Typography>
            <Box
              component='form'
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} className='password-grid'>
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    label='Old Password'
                    name='Old Password'
                    autoComplete='old-password'
                    type={eye ? 'password' : 'text'}
                    autoFocus
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                  {eye ? (
                    <Visibility
                      className='password-icon'
                      onClick={() => setEye(false)}
                    />
                  ) : (
                    <VisibilityOff
                      className='password-icon'
                      onClick={() => setEye(true)}
                    />
                  )}
                </Grid>
                <Grid item xs={12} className='password-grid'>
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    name='New Password'
                    label='New Password'
                    type={eye ? 'password' : 'text'}
                    autoComplete='new-password'
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  {eye ? (
                    <Visibility
                      className='password-icon'
                      onClick={() => setEye(false)}
                    />
                  ) : (
                    <VisibilityOff
                      className='password-icon'
                      onClick={() => setEye(true)}
                    />
                  )}
                </Grid>
                <Grid item xs={12} className='password-grid'>
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    name='Confirm Password'
                    label='Confirm Password'
                    type={eye ? 'password' : 'text'}
                    autoComplete='confirm-password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {eye ? (
                    <Visibility
                      className='password-icon'
                      onClick={() => setEye(false)}
                    />
                  ) : (
                    <VisibilityOff
                      className='password-icon'
                      onClick={() => setEye(true)}
                    />
                  )}
                </Grid>
              </Grid>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2, bgcolor: '#20364b' }}
              >
                Submit
              </Button>
              <div sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        <ToastContainer />
      </Grid>
    </ThemeProvider>
  )
}
