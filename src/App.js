import React from 'react'
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom'

import './App.css'

import { Course } from './containers/Course'

const routing = () => (
  <Router>
    <div>
      <Route path={'/courses'} component={Course} />
      <Redirect to={'/courses'} />
    </div>
  </Router>
)

export default routing