import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer';

const Reducers = combineReducers({
    user:userReducer

});

export default Reducers;