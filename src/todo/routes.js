import React from 'react'

import {Route, IndexRoute} from 'react-router'

import TodoBase from 'todo/components/TodoBase'
import TodoPage from 'todo/components/TodoPage'

const routes = (
  <Route path='/todo' component={TodoBase}>
    <IndexRoute component={TodoPage} />
  </Route>
)

export default routes