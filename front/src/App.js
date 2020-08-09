import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SPA from './Components/SPA'
import Admin from './Components/Admin'
import './App.css'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SPA} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </div>
  )
}

export default App
