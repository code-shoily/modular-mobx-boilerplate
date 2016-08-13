import React, {Component} from 'react'
import {StyleSheet, css} from 'aphrodite'

import {observer, inject} from 'mobx-react'


@inject('counterModel')
@observer
export default class CounterCard extends Component {
  render() {
    let counterModel = this.props.counterModel

    let S = StyleSheet.create({
      container: {
        height: '10vw',
        width: '10vw',
        borderRadius: '18px',
        background: 'gray',
        margin: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      },
      numberZone: {
        fontSize: '8vh',
      },
      actionZone: {
        display: 'flex',
        justifyContent: 'space-between'
      },
      buttonAdd: {
        padding: '2vmin',
        borderRadius: '50%',
        border: 'none',
      }
    })

    return (
      <div className={css(S.container)}>
        <div className={css(S.numberZone)}>{this.props.counterModel.counter}</div>
        <div className={css(S.actionZone)}>
          <button className={css(S.buttonAdd)} onClick={() => counterModel.increment()}>+</button>
          <button className={css(S.buttonAdd)} onClick={() => counterModel.decrement()}>-</button>
        </div>
      </div>
    )
  }
}