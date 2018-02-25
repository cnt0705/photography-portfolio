import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import 'ress'
import 'font-awesome/css/font-awesome.min.css'
import './global.css'
import './index.css'

import ScrollToTop from '../src/containers/ScrollToTop'
import Home from '../src/pages/home'
import Works from '../src/pages/works'

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/works/:author" component={Works}/>
      </Switch>
      <footer className="footer">
        <p className="copyright">&copy; 2017 Shinya Kato, Chinatsu Kato</p>
      </footer>
    </ScrollToTop>
  </Router>,
  document.getElementById('root')
)
