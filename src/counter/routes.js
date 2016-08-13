import React from 'react'
import {Route, IndexRoute} from 'react-router'

import CounterBase from 'counter/components/CounterBase'
import CounterPage from 'counter/components/CounterPage'

const counterRoutes = (
  <Route path="/counter" component={CounterBase}>
    <IndexRoute component={CounterPage} />
  </Route>
)

export default counterRoutes