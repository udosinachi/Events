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
import ScrollToTop from './Top'
import UserProfile from './pages/userprofile/UserProfile'
import EditUserProfile from './pages/edituserprofile/EditUserProfile'
import ChangePassword from './pages/changepassword/ChangePassword'

function App() {
  return (
    <div>
      <Router>
        {/* <Navbar /> */}
        <ScrollToTop />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/signup' component={Signup} exact />
          <Route path='/contact' component={Contactus} exact />
          <Route path='/about' component={About} exact />
          <Route path='/profile/:id' component={Profile} exact />
          <Route path='/blog' component={Blog} exact />
          <Route path='/showmore/:cats' component={Showmore} exact />
          <Route path='/user-profile' component={UserProfile} exact />
          <Route path='/edit' component={EditUserProfile} exact />
          <Route path='/change-password' component={ChangePassword} exact />
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  )
}

export default App
