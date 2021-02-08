import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import flightReducer from './flight-page-reducer';

const store = createStore(flightReducer, applyMiddleware(thunk));

export default store;
