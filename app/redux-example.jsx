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
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Andrew'
});
console.log('name should be andrew', store.getState());
