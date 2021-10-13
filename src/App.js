import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Navbar from './components/navbar/Navbar'
import Signup from './pages/signup/Signup'
function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/login' component={Login} exact />
          <Route path='/signup' component={Signup} exact />
          <Route path='/' component={Home} exact />
        </Switch>
      </Router>
    </div>
  )
}

export default App
