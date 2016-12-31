import React from 'react'
import {render} from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'
import RedBox from 'redbox-react'
import a11y  from 'react-a11y'
import {whyDidYouUpdate} from 'why-did-you-update'


const root = document.getElementById('root')

if(process.env.NODE_ENV === 'development') {
  a11y(React)
  //whyDidYouUpdate(React)

  try {
    render(<AppContainer><App /></AppContainer>, root)
  } catch (e) {
    render(<RedBox error={e} />, root)
  }

} else {
  render(<App />, root)
}

if (module.hot) {
  module.hot.accept('./App.js', () => {
    let AppNext = require('./App').default
    try {
      render(<AppContainer><AppNext /></AppContainer>, root)
    } catch (e) {
      render(<RedBox error={e} />, root)
    }
  })
}
