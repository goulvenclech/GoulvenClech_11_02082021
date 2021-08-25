import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route }
 from "react-router-dom"
import "tailwindcss/tailwind.css"
import IndexPage from './pages/index'
import AboutPage from './pages/about'
import NotFoundPage from './pages/not-found'
import Header from './components/header'
import Footer from './components/footer'
import Housing from './pages/housing'

/**
 * Contain the router logic of our App !
 */
ReactDOM.render(
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/housing-*">
            <Housing />
          </Route>
          <Route path="/*">
            <NotFoundPage />
          </Route>
        </Switch>
        <Footer />
      </Router>,
  document.getElementById('root')
)
