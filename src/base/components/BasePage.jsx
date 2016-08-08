import React, {Component} from 'react'
import {Link} from 'react-router'

import DevTools from 'mobx-react-devtools'

export default class BasePage extends Component {
  render() {
    return (
      <div>
        <DevTools />
        <div>
          <Link to='/'>Home</Link>
          <Link to='/counter'>Counter</Link>
          <Link to='/todo'>Todo</Link>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}