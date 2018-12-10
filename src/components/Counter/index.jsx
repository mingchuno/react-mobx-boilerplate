import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('counterStore')
@observer
export default class Counter extends React.Component {
  render() {
    return (
      <div>count: {this.props.counterStore.count}</div>
    )
  }
}
