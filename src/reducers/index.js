
import { combineReducers } from 'redux';
import textReducer from './text';


const allReducers = combineReducers({
    text: textReducer,
});

export default allReducers;