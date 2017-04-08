var redux = require('redux');

console.log('starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// var oldReducer = (state = stateDefault, action)=>{  //ES6 of state is null, using the default value
//   //state = state || {name: 'Anoymous'};
//
//   switch (action.type){
//     case 'CHANGE_NAME':
//       return {
//         ...state,
//         name: action.name
//       };
//       case 'ADD_HOBBY':
//         return {
//           ...state,
//           hobbies: [
//             ...state.hobbies,
//             {
//               id: nextHobbyId++,
//               hobby: action.hobby
//             }
//           ]
//         };
//       case 'REMOVE_HOBBY':
//         return {
//           ...state,
//           hobbies: state.hobbies.filter((hobby)=> hobby.id !== action.id)
//         };
//       case 'ADD_MOVIE':
//         return {
//           ...state,
//           movies: [
//             ...state.movies,
//             {
//               id: nextMovieId++,
//               title: action.title,
//               genre: action.genre
//             }
//           ]
//         };
//       case 'REMOVE_MOVIE':
//         return {
//           ...state,
//           movies: state.movies.filter((movie)=>movie.id!==action.id)
//         };
//       default:
//       return state;
//   }
// };



var unsubscribe = store.subscribe(()=>{
  var state = store.getState();

  console.log('New state', store.getState());

  if(state.map.isFetching){
    document.getElementById('app').innerHTML='Loading...';

  } else if (state.map.url){
    document.getElementById('app').innerHTML = '<a href="'+state.map.url + '" target="_blank">View Your Location<a>'
  }
});

//unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Andrew'));

store.dispatch(actions.addHobby('Running'));

store.dispatch(actions.addHobby('Walking'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Emily'));

store.dispatch(actions.addMovie('Mad Max', 'Action'));

store.dispatch(actions.addMovie('Star Wars', 'Action'));

store.dispatch(actions.removeMovie(1));
