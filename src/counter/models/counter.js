import {observable, action} from 'mobx'


export default class CounterModel {
  @observable counter 
  constructor(counter=0) {
    this.counter = counter
  }

  @action('Increments the counter')
  increment() {
    this.counter += 1
  }

  @action('Decrements the counter')
  decrement() {
    this.counter -= 1
  }

  @action('Resets the counter')
  reset() {
    this.counter = 0
  }
}

export const counterModel = new CounterModel()