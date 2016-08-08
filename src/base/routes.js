import React from 'react'
import {Route, IndexRoute} from 'react-router'

import BasePage from 'base/components/BasePage'
import IndexPage from 'base/components/IndexPage'
import NotFoundPage from 'base/components/NotFoundPage'


const routes = (
  <Route path="/" component={BasePage}>
    <IndexRoute component={IndexPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
)

export default routes