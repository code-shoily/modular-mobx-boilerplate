
import {observable, action} from 'mobx'


export default class HotelModel {
  @observable info 

  constructor(info=0) {
    this.info = info
  }
}

export const hotelModel = new HotelModel()
  