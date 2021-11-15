const initialState = {
    textArray: [],
    text: "",
}
const textReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_TEXT':
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default textReducer;