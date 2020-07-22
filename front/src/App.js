import React from 'react'
import { Router, Route } from 'react-router-dom'
import SPA from './Components/SPA'
import Admin from './Components/Admin'
import './App.css'

function App() {
  return (
    <div>
        <Route exact path='/' component={SPA} />
        <Route exact path='/admin' component={Admin} />
    </div>
  )
}

export default App
