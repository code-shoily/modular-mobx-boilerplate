import React from 'react'
import {render} from 'react-dom';
import {Router, Route, hashHistory, browserHistory} from 'react-router'
import {Provider} from 'mobx-react'

import baseRoutes from 'base/routes'

/* ------ COUNTER APP --- --- */
import counterRoutes from 'counter/routes'
import {counterModel} from 'counter/models/counter'


const stores = {
  /*------ Initiate the Store ------ */
  counterModel,
}


const App = (
  <Provider {...stores}>
    <Router history={hashHistory}>
      {/* Other routes should come before base routes */}
      {counterRoutes}
      {baseRoutes}
    </Router>
  </Provider>
)


render(App, document.getElementById('root'))