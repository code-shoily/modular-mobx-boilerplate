import React, {Component} from 'react'

import {observer, inject} from 'mobx-react'

@inject('counterModel')
@observer
export default class CounterPage extends Component {
  render() {
    let counterModel = this.props.counterModel
    return (
      <div>
        {counterModel.counter} 
        <button onClick={(e) => counterModel.increment()}>Incr</button>
        <button onClick={(e) => counterModel.decrement()}>Decr</button>
      </div>
    )
  }
}