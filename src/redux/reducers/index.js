import { combineReducers } from 'redux';
import generalReducer from './generalReducer'; // create this file

const rootReducer = combineReducers({
	generalReducer,
});

export default rootReducer;
