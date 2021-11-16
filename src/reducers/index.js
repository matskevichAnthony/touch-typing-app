import { combineReducers } from 'redux';
import textReducer from './text';
import timerReducer from './timer';

const allReducers = combineReducers({
    text: textReducer,
    timer: timerReducer
});

export default allReducers;