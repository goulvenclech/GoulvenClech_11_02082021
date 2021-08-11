import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route }
 from "react-router-dom"
import "tailwindcss/tailwind.css"
import IndexPage from './pages'
import Header from './components/header'
import Footer from './components/footer'

/**
 * Contain the router logic of our App !
 */
ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Route path="/about">
            <p>Test</p>
          </Route>
          <Route path="/test">
            <p>Test2</p>
          </Route>
        </Switch>
        <Footer />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
