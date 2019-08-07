import React from 'react'

// React router
import { Switch, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'

// CSS
import './styles/main.scss'

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.css'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  )
}

export default App
