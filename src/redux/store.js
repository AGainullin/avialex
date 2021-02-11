import { createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import flightReducer from './flight-page-reducer';

const reducers = combineReducers({
    flightPage: flightReducer,
});

const store = createStore(reducers);

export default store;
