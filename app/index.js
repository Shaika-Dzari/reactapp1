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
