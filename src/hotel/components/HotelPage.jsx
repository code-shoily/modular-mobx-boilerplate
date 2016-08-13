
import React, {Component} from 'react'
import {StyleSheet, css} from 'aphrodite'

import {observer, inject} from 'mobx-react'


@inject('hotelModel')
@observer
export default class HotelPage extends Component {
  render() {
    let hotelModel = this.props.hotelModel

    let S = StyleSheet.create({})

    return (
      <div className={css(S.container)}>
        HELLO Hotel
      </div>
    )
  }
}
  