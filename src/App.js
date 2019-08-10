import React from 'react'

// React router
import { Switch, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'

// CSS
import './styles/main.scss'

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.css'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default App
