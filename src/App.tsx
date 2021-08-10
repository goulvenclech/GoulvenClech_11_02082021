import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route }
 from "react-router-dom"
import "tailwindcss/tailwind.css"
import IndexPage from './pages'
import Footer from './components/footer'

/**
 * Contain the router logic of our App !
 */
ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Switch>
          <Route path="/">
            <IndexPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
