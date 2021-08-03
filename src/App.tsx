import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route }
 from "react-router-dom"
import IndexPage from './pages'
import "tailwindcss/tailwind.css"

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Switch>
          <Route path="/">
            <IndexPage />
          </Route>
        </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

