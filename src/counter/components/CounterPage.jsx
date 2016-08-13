import React, {Component} from 'react'
import {StyleSheet, css} from 'aphrodite'
import CounterCard from './CounterCard'

import {observer, inject} from 'mobx-react'


@inject('counterModel')
@observer
export default class CounterPage extends Component {
  render() {
    let counterModel = this.props.counterModel

    let S = StyleSheet.create({
      container: {
        height: '40vh',
        width: '100vw',
      }
    })

    return (
      <div className={css(S.container)}>
        <CounterCard />
      </div>
    )
  }
}