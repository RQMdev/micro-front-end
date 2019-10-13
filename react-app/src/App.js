import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage, Page1, Page2 } from './components'

function App() {
  return (
    <Router basename="/chat">
      REACT
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </Switch>
    </Router>
  )
}

export default App
