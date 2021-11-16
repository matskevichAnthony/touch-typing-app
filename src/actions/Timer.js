export const startGame = () => {
    return dispatch => {
        dispatch({ type: 'START_GAME' })
    }
}

export const finishGame = () => {
    return dispatch => {
        dispatch({ type: 'FINISH_GAME' })
    }
}