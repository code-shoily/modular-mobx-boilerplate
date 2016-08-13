
import React, {Component} from 'react'

import BasePage from 'base/components/BasePage'


export default class HotelBase extends Component {
  render() {
    return <BasePage children={this.props.children} />
  }
}
  