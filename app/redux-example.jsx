var redux = require('redux');
console.log('starting redux example');

var reducer = (state={name:'Anonymous'}, action)=>{  //ES6 of state is null, using the default value
  //state = state || {name: 'Anoymous'};
  return state;
};
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);
