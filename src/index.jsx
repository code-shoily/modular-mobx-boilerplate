import React from 'react'
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router'
import {Provider} from 'mobx-react'

import baseRoutes from 'base/routes'

/* ------ COUNTER APP --- --- */
import counterRoutes from 'counter/routes'
import counterModel from 'counter/models/counter'

/* ------ HOTEL APP --- --- */

import hotelRoutes from 'hotel/routes'
import hotelModel from 'hotel/models/hotel'


const stores = {
  /*------ Initiate the Store ------ */
  counterModel,
  hotelModel,
}


const App = (
  <Provider {...stores}>
    <Router history={hashHistory}>
      {/* Other routes should come before base routes */}
      {hotelRoutes}
      {counterRoutes}
      {baseRoutes}
    </Router>
  </Provider>
)


render(App, document.getElementById('root'))