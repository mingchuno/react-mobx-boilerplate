import * as React from "react";
import { inject, observer } from "mobx-react"
import './style.css'

@inject("counterStore")
@observer
export default class Button extends React.Component {

  onClick = () => {
    this.props.counterStore.incCount();
  }

  render() {
    return (
      <button onClick={this.onClick}>
        add
      </button>
    );
  }
}
