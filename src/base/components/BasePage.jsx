import React, {Component} from 'react'
import {Link} from 'react-router'

import DevTools from 'mobx-react-devtools'

export default class BasePage extends Component {
  render() {
    let devtools = process.env.NODE_ENV === 'development' ? <DevTools /> : null
    return (
      <div>
        {devtools}
        <div>
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/todo">404</Link>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

BasePage.propTypes = {
  children: React.PropTypes.array,
}