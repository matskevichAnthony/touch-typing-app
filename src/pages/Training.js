import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getText } from '../actions/Text';

const Training = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getText())
    }, []);

    const { textArray, text } = useSelector(state => state.text);
    console.log(textArray);
    console.log(text);
    return (
        <div>
            Training
        </div>
    )

}

export default Training