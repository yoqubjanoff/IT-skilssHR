import { legacy_createStore as createStore } from 'redux';
import rootReducer from '../reducers/index'; // create this file

const store = createStore(rootReducer);

export default store;
