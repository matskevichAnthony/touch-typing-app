export const getText = () => {
    return async dispatch => {
        const response = await fetch("https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1");
        const json = await response.json();
        const text = json.join(" ");

        dispatch({
            type: "SET_TEXT",
            payload: {
                text,
                textArray: text.split(""),
            }
        })
    }
}