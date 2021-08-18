import React, { Component } from 'react'
import {Home, About, Portfolio, Contact} from './pages/index.js'
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/portfolio" component={Portfolio} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/about" component={About} exact />
            {/* <Route path="/portfolio/content" component={Content} exact /> */}
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}
