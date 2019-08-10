# react mobx example

[![Build Status](https://travis-ci.org/mingchuno/react-mobx-boilerplate.svg?branch=master)](https://travis-ci.org/mingchuno/react-mobx-boilerplate)
[![Greenkeeper badge](https://badges.greenkeeper.io/mingchuno/react-mobx-boilerplate.svg)](https://greenkeeper.io/)

**THIS EXAMPLE IS DEPRECATED SINCE IT IS STILL USING CLASS COMPONENT!**

This is an example of react x mobx which is created by CRA. Did not use typescript here since I have tried but it got too complicated to use with `@inject` decorators. We have a simple button and a text display the count with a global injected `counterStore`.

## Get started

```bash
yarn install
yarn start
yarn test
```

## Points to note

- I have tried ts but using it with `@inject` decorators is too difficult.
- need to get eslint work on CLI and vscode
- TODOs:
  - impl a more complete example with at least some API call and UI
  - try to incop with RxJs
  - try more mobx features
