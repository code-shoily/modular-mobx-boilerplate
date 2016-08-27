import React, {Component} from 'react'
import {Router, browserHistory} from 'react-router'
import {Provider} from 'mobx-react'

import baseRoutes from './base/routes'

/* ------ COUNTER APP --- --- */
import {counterModel} from './counter/models/counter'
import counterRoutes from './counter/routes'

const stores = {
  /*------ Initiate the Stores ------ */
  counterModel,
}

export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Router history={browserHistory}>
          {/* Other routes should come before base routes */}
          {counterRoutes}
          {baseRoutes}
        </Router>
      </Provider>
    )
  }
}