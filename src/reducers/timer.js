const initialState = {
    isStarted: false,
    isFinished: false,
    gameDuration: 60
}


const timerReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'START_GAME':
            return { ...state, isStarted: true };
        case 'FINISH_GAME':
            return { ...state, isStarted: false, isFinished: true };
        default:
            return state;
    }
}

export default timerReducer;