import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route }
 from "react-router-dom"
import "tailwindcss/tailwind.css"
import IndexPage from './pages/index'
import AboutPage from './pages/about'
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
            <AboutPage />
          </Route>
          <Route path="/test">
            <AboutPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
