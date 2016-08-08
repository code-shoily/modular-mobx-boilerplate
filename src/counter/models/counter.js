import {observable, action} from 'mobx'


export default class CounterModel {
  @observable counter 

  constructor(counter=0) {
    this.counter = counter
  }

  @action("Increments the counter")
  increment() {
    this.counter++
  }

  @action("Decrements the counter")
  decrement() {
    this.counter--
  }

  @action("Resets the counter")
  reset() {
    this.counter = 0
  }
}