import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
// import Navbar from './components/navbar/Navbar'
import Signup from './pages/signup/Signup'
import Contactus from './pages/contactus/Contactus'
import About from './pages/about/About'
import Profile from './pages/profile/Profile'
import Blog from './pages/blog/Blog'
import Showmore from './pages/showmore/Showmore'

function App() {
  return (
    <div>
      <Router>
        {/* <Navbar /> */}

        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/signup' component={Signup} exact />
          <Route path='/contact' component={Contactus} exact />
          <Route path='/about' component={About} exact />
          <Route path='/profile' component={Profile} exact />
          <Route path='/blog' component={Blog} exact />
          <Route path='/showmore/:cats' component={Showmore} exact />
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App
