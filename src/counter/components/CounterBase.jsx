import React, {Component} from 'react'

import BasePage from '../../base/components/BasePage'


export default class CounterBase extends Component {
  render() {
    return (
      <BasePage>
        {this.props.children}
      </BasePage>
    )
  }
}

CounterBase.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
}
