var redux = require('redux');
console.log('starting redux example');

var reducer = (state={name:'Anonymous'}, action)=>{  //ES6 of state is null, using the default value
  //state = state || {name: 'Anoymous'};

  switch (action.type){
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
      default:
      return state;
  }
};
var store = redux.createStore(reducer, redux.compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

var unsubscribe = store.subscribe(()=>{
  var state = store.getState();
  console.log('Name is ', state.name);
  document.getElementById('app').innerHTML = state.name;
});

//unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Andrew'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emily'
});
