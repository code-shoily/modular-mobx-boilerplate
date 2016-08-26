
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import TestCaseBase from './components/TestCaseBase'
import TestCasePage from './components/TestCasePage'

const testCaseRoutes = (
  <Route path="/test-case" component={ TestCaseBase }>
    <IndexRoute component={ TestCasePage } />
  </Route>
)

export default testCaseRoutes
  