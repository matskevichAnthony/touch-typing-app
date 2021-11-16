import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getText } from '../actions/Text';
import styled from 'styled-components';
import FullText from '../components/FullText';
import EditableText from '../components/EditableText';
import FinishWindow from '../components/FinishWindow';
import { finishGame } from '../actions/Timer';

const Training = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getText())
    }, []);

    const [currentText, setCurrentText] = useState({ html: "" });
    const [position, setPosition] = useState(0);
    const [counter, setCounter] = useState();
    const { textArray, text } = useSelector(state => state.text);
    const { isStarted, isFinished, gameDuration } = useSelector(state => state.timer);

    useEffect(() => {
        setCounter(gameDuration);
    }, [gameDuration])

    useEffect(() => {
        if (textArray.length === position && isStarted) {
            dispatch(finishGame());
        }
    }, [textArray, position, dispatch, isStarted])

    useEffect(() => {
        if (counter === 0) {
            dispatch(finishGame());
        }
        if (!isFinished && isStarted) {
            const timer =
                counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [counter, isFinished, isStarted, dispatch]);

    return (
        <TrainingWrapper>
            {isFinished && <FinishWindow counter={counter} position={position} />}
            <TypingWrapper>
                <FullText text={text} />
                <EditableText
                    textArray={textArray}
                    currentText={currentText}
                    setCurrentText={setCurrentText}
                    position={position}
                    setPosition={setPosition}
                    counter={counter}
                />
            </TypingWrapper>
        </TrainingWrapper>
    );

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
border-radius: 30px;
background-color: blue;
position: relative;
background: whitesmoke;
display: flex;
justify-content: center;
align-items: center;

`