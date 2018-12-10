import React from 'react';
import { configure } from "mobx";
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import stores from "./stores";

// For easier debugging
window._____APP_STATE_____ = stores;

configure({ enforceActions: "always" });

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
