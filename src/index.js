import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Inv from './views/inv'
import Home from './views/home'
import Staf from './views/staf'
import Commmunity from './views/commmunity'
import Hall from './views/hall'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Inv} exact path="/inv" />
        <Route component={Home} exact path="/" />
        <Route component={Staf} exact path="/staf" />
        <Route component={Commmunity} exact path="/commmunity" />
        <Route component={Hall} exact path="/hall" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
