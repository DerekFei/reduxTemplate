var redux = require('redux');
console.log('starting redux example');

var oldReducer = (state = stateDefault, action)=>{  //ES6 of state is null, using the default value
  //state = state || {name: 'Anoymous'};

  switch (action.type){
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
      case 'ADD_HOBBY':
        return {
          ...state,
          hobbies: [
            ...state.hobbies,
            {
              id: nextHobbyId++,
              hobby: action.hobby
            }
          ]
        };
      case 'REMOVE_HOBBY':
        return {
          ...state,
          hobbies: state.hobbies.filter((hobby)=> hobby.id !== action.id)
        };
      case 'ADD_MOVIE':
        return {
          ...state,
          movies: [
            ...state.movies,
            {
              id: nextMovieId++,
              title: action.title,
              genre: action.genre
            }
          ]
        };
      case 'REMOVE_MOVIE':
        return {
          ...state,
          movies: state.movies.filter((movie)=>movie.id!==action.id)
        };
      default:
      return state;
  }
};

//Name reducer and action generator
//----------------
var nameReducer = (state = 'Anonymous', action)=>{
  switch(action.type){
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  };
};

var changeName = (name)=>{
  return {
    type: 'CHANGE_NAME',
    name
  }
};
//Hobbie reducer and action generator
//----------------
var nextHobbyId = 1;
var hobbiesReducer = (state=[], action)=>{
  switch (action.type){
    case 'ADD_HOBBY':
     return [
       ...state,
       {
         id: nextHobbyId++,
         hobby: action.hobby
       }
     ];
    case 'REMOVE_HOBBY':
      return state.filter((hobby)=> hobby.id !== action.id);
    default:
      return state;

  };
};

var addHobby = (hobby) =>{
  return {
    type: 'ADD_HOBBY',
    hobby
  };
};

var removeHobby = (id) =>{
  return {
    type: 'REMOVE_HOBBY',
    id
  };
};

//Movie reducer and action generator
//----------------
var nextMovieId = 1;
var movieReducer = (state=[], action)=>{
  switch (action.type){
    case 'ADD_MOVIE':
     return [
         ...state,
         {
           id: nextMovieId++,
           title: action.title,
           genre: action.genre
         }
       ];

    case 'REMOVE_MOVIE':
      return state.filter((movie)=>movie.id!==action.id);
    default:
      return state;

  };
};
var addMovie = (title, genre)=>{
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  };
};

var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  };
};

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: movieReducer
});
var store = redux.createStore(reducer, redux.compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

var unsubscribe = store.subscribe(()=>{
  var state = store.getState();
  console.log('Name is ', state.name);
  document.getElementById('app').innerHTML = state.name;
  console.log('New state', store.getState());
});

//unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(changeName('Andrew'));

store.dispatch(addHobby('Running'));

store.dispatch(addHobby('Walking'));

store.dispatch(removeHobby(2));

store.dispatch(changeName('Emily'));

store.dispatch(addMovie('Mad Max', 'Action'));

store.dispatch(addMovie('Star Wars', 'Action'));

store.dispatch(removeMovie(1));
