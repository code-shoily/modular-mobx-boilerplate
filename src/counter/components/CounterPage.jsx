import React, {Component} from 'react'
import {StyleSheet, css} from 'aphrodite'

import {observer, inject} from 'mobx-react'


@inject('counterModel')
@observer
export default class CounterPage extends Component {
  render() {
    let counterModel = this.props.counterModel

    let S = StyleSheet.create({
      container: {
        display: 'flex',
        margin: '2em 0',
      },
      counter: {
        padding: '2rem',
        borderRadius: 12,
        background: '#eee',
      },
    })

    return (
      <div className={css(S.container)}>
        <button onClick={() => counterModel.increment()}>+</button>
        <span
          className={css(S.counter)}
          onDoubleClick={() => counterModel.reset()}
        >
          {counterModel.counter}
        </span>
        <button onClick={() => counterModel.decrement()}>-</button>
      </div>
    )
  }
}

CounterPage.propTypes = {
  counterModel: React.PropTypes.object,
}