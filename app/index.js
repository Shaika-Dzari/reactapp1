/*
import { createStore } from 'redux';
import helloApp from './components/Hello/HelloReducer';
import { sayHello } from './components/Hello/HelloActionsCreator';

let s = createStore(helloApp);

let unsubscribe = s.subscribe(() =>
  console.log(s.getState())
);


s.dispatch(sayHello('Remi'));
s.dispatch(sayHello('Bob'));

unsubscribe();
*/

import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import HelloForm from './components/HelloForm/HelloForm'
import helloReducer from './components/Hello/HelloReducer';

let s = createStore(helloReducer);

render(
  <Provider store={s}>
    <HelloForm />
  </Provider>,
  document.getElementById('app')
)