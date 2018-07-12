import {createStore, combineReducers, applyMiddleware} from 'redux';
import cameraReducer from './cameraReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

let rootReducer = combineReducers({
  
  cameras: cameraReducer
})

let middleware =[thunk, logger]

export default () => createStore(rootReducer, applyMiddleware(...middleware))