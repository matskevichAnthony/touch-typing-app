import React, { useEffect, useState, useInterval } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getText } from '../actions/Text';
import styled from 'styled-components';
import FullText from '../components/FullText';
import EditableText from '../components/EditableText';
import FinishWindow from '../components/FinishWindow';

const Training = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getText())
    }, []);

    const [currentText, setCurrentText] = useState({ html: "" });
    const [position, setPosition] = useState(0);
    const [start, setStart] = useState(false);
    const [finish, setFinish] = useState(false);
    const [counter, setCounter] = useState(5);
    const { textArray, text } = useSelector(state => state.text);
    const timer = useSelector(state => state.timer);

    //START STATE не читается НЕ РАБОТАЕТ
    useEffect(() => {

        if (counter === 0) {
            setFinish(true);
        }
        // Сюда вставить старт true
        if (finish === false && start === true) {
            const timer =
                counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [counter, finish, start]);


    return (
        <TrainingWrapper>
            {finish ? <FinishWindow setStart={setStart} counter={counter} setCounter={setCounter}
                setFinish={setFinish} currentText={currentText} setCurrentText={setCurrentText}
                position={position} setPosition={setPosition} /> : <></>}

            <TypingWrapper>
                <FullText text={text} />
                <EditableText textArray={textArray} currentText={currentText} setCurrentText={setCurrentText}
                    position={position} setPosition={setPosition} start={start} setStart={setStart}
                    counter={counter} finish={finish} />
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
border-radius: 30px;
background-color: blue;
position: relative;
background: whitesmoke;
display: flex;
justify-content: center;
align-items: center;

`