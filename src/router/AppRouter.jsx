import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../view/Home'
// import NoFound from '../view/NoFound'

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        {/* <Route path="*" >
          <NoFound />
        </Route> */}
      </Switch>
    </Router>
  )
}
