import { observable, action } from "mobx";

export default class CounterStore {
  @observable count = 0
  
  @action
  incCount() {
    this.count++
  }
}
