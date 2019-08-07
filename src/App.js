import React from 'react'

// React router
import { Switch, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'

function App () {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  )
}

export default App