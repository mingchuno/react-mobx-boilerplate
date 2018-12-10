import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import wrapWithProvider from '../../utils/wrapWithProvider'
import CounterStore from '../../stores/counterStore';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const counterStore = new CounterStore(10);
  ReactDOM.render(wrapWithProvider({ counterStore })(<App />), div);
  ReactDOM.unmountComponentAtNode(div);
});
