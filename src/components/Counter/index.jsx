import React from 'react';
import { inject, observer } from 'mobx-react';

/**
 * Simple component to display the current count
 */
@inject('counterStore')
@observer
export default class Counter extends React.Component {
  render() {
    return (
      <div>count: {this.props.counterStore.count}</div>
    )
  }
}
