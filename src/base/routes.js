import React from 'react'
import {Route, IndexRoute} from 'react-router'

import BasePage from './components/BasePage'
import IndexPage from './components/IndexPage'
import NotFoundPage from './components/NotFoundPage'


const routes = (
  <Route
    component={BasePage}
    path="/"
  >
    <IndexRoute component={IndexPage} />
    <Route
      component={NotFoundPage}
      path="*"
    />
  </Route>
)

export default routes