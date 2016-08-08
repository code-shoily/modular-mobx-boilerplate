import React from 'react'
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'mobx-react'

/* ------ IMPORT ROUTES FROM EVERYONE ------ */
import baseRoutes from 'base/routes'
import counterRoutes from 'counter/routes'
import todoRoutes from 'todo/routes'

/* ------ IMPORT STORES FROM EVERYONE --- --- */
import CounterModel from 'counter/models/counter'


const stores = {
  /*------ Initiate the Store ------ */
  counterModel: new CounterModel(),
}

const App = (
  <Provider {...stores}>
    <Router history={browserHistory}>
      {/* Other routes should come before base routes */}
      {counterRoutes}
      {todoRoutes}
      {baseRoutes}
    </Router>
  </Provider>
)


render(App, document.getElementById('root'))