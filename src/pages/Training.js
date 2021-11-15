import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getText } from '../actions/Text';
import styled from 'styled-components';
import FullText from '../components/FullText';
import EditableText from '../components/EditableText';

const Training = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getText())
    }, []);

    const { textArray, text } = useSelector(state => state.text);
    console.log(textArray);
    console.log(text);
    return (
        <TrainingWrapper>
            <TypingWrapper>
                <FullText text={text} />
                <EditableText textArray={textArray} />
            </TypingWrapper>
        </TrainingWrapper>
    )

}

export default Training

const TrainingWrapper = styled.div`
position:relative;
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const TypingWrapper = styled.div`
height: 50%;
width: 50%;
background-color: blue;
position: relative;
background: whitesmoke;
display: flex;
justify-content: center;
align-items: center;

`