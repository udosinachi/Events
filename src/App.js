import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
// import Navbar from './components/navbar/Navbar'
import Signup from './pages/signup/Signup'
import Contactus from './pages/contactus/Contactus'
import About from './pages/about/About'

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
        </Switch>
      </Router>
    </div>
  )
}

export default App
