
import React, {Component} from 'react'
import {StyleSheet, css} from 'aphrodite'

import {observer, inject} from 'mobx-react'


@inject('testCaseModel')
@observer
export default class TestCasePage extends Component {
  render() {
    let testCaseModel = this.props.testCaseModel

    let S = StyleSheet.create({})

    return (
      <div className={css(S.container)}>
        HELLO TestCase
      </div>
    )
  }
}
  