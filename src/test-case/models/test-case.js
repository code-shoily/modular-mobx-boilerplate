
import {observable, action} from 'mobx'


export default class TestCaseModel {
  @observable info 

  constructor(info=0) {
    this.info = info
  }
}

export const testCaseModel = new TestCaseModel()
  