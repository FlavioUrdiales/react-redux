import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import HubsReducer from '../reducers/HubsReducer';

const rootReducer = combineReducers({
    hubs: HubsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

