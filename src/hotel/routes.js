
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import HotelBase from './components/HotelBase'
import HotelPage from './components/HotelPage'

const routes = (
  <Route path="/Hotel" component={ HotelBase }>
    <IndexRoute component={ HotelPage } />
  </Route>
)

export default routes
  