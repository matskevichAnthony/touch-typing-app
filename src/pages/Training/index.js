import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getText } from '../../actions/Text';
import { TrainingWrapper, TypingWrapper } from './style';
import FullText from '../../components/FullText';
import EditableText from '../../components/EditableText';
import FinishWindow from '../../components/FinishWindow';
import { finishGame } from '../../actions/Timer';

const Training = () => {
    const dispatch = useDispatch();

    const [currentText, setCurrentText] = useState({ html: "" });
    const [position, setPosition] = useState(0);
    const [counter, setCounter] = useState();
    const [symbolsTyped, setSymbolsTyped] = useState(0);


    const { textArray, text } = useSelector(state => state.text);
    const { isStarted, isFinished, gameDuration } = useSelector(state => state.timer);

    useEffect(() => {
        dispatch(getText())
    }, [dispatch]);

    useEffect(() => {
        setCounter(gameDuration);
    }, [gameDuration])

    useEffect(() => {
        if (textArray.length === position && isStarted) {
            dispatch(finishGame());
        }
    }, [textArray, position, dispatch, isStarted])

    useEffect(() => {
        if (!isFinished && isStarted) {
            const timer =
                counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [counter, isFinished, isStarted, dispatch]);

    useEffect(() => {
        if (counter === 0) {
            dispatch(finishGame());
        }
    }, [dispatch, counter]);

    return (
        <TrainingWrapper>
            {isFinished && <FinishWindow
                counter={counter}
                correctSymbols={position}
                allSymbols={symbolsTyped}
            />}
            <TypingWrapper>
                <FullText text={text} />
                <EditableText
                    textArray={textArray}
                    currentText={currentText}
                    setCurrentText={setCurrentText}
                    position={position}
                    setPosition={setPosition}
                    counter={counter}
                    symbolsTyped={symbolsTyped}
                    setSymbolsTyped={setSymbolsTyped}
                />
            </TypingWrapper>
        </TrainingWrapper>
    );

}

export default Training

