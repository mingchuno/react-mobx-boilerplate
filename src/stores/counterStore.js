import { observable, action } from "mobx";

export default class CounterStore {
  @observable count

  constructor(count = 0) {
    this.count = count
  }

  @action
  incCount() {
    this.count++
  }
}
