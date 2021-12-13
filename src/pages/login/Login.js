import * as React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CircularProgress from '@mui/material/CircularProgress'

const theme = createTheme()

export default function Login() {
  const [loader, setLoader] = useState(false)
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = {
      email,
      password,
    }
    setLoader(true)
    axios
      .post('https://eventplanningweb.herokuapp.com/auth/users/login', data)
      .then((res) => {
        if (res.data.hasError === false) {
          toast.success(res.data.message)
          setEmail('')
          setPassword('')
          setLoader(false)
          window.setTimeout(() => {
            history.push('/')
          }, 1000)

          localStorage.setItem('token', res.data.token)
          localStorage.setItem('id', res.data._id)
          localStorage.setItem('fullName', res.data.fullName)
          localStorage.setItem('businessName', res.data.businessName)
          localStorage.setItem('email', res.data.email)
          localStorage.setItem('phoneNumber', res.data.phoneNumber)
          localStorage.setItem('password', res.data.password)
          localStorage.setItem('category', res.data.category)
          localStorage.setItem('image', res.data.image)
        } else {
          toast.error(res.data.message)
          setLoader(false)
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
              Login
            </Typography>
            <Box
              component='form'
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />
              {loader === false ? (
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{ mt: 3, mb: 2, bgcolor: '#20364b' }}
                >
                  LogIn
                </Button>
              ) : (
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{ mt: 3, mb: 2, bgcolor: '#20364b' }}
                >
                  <CircularProgress />
                </Button>
              )}

              <Grid container>
                <Grid item xs>
                  <Link to='/forgot-password' variant='body2' className='link'>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to='/signup' variant='body2' className='link'>
                    {'No account? Sign Up'}
                  </Link>
                </Grid>
              </Grid>
              <div sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        <ToastContainer />
      </Grid>
    </ThemeProvider>
  )
}
