
const timerReducer = (state = 60, action) => {

    switch (action.type) {
        case 'TIME_DICREMENT':
            return state - 1;
        default:
            return state;
    }
}

export default timerReducer;