import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk'; 
import destinationReducer from './reducers';
import { thunk } from 'redux-thunk';

const store = createStore(destinationReducer, applyMiddleware(thunk));

export default store;
