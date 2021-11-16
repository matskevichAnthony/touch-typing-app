import React, { useState } from 'react';
import styled from 'styled-components';
import { FeedBackWindow } from '../InfoWindowStyle';
import { WrapperContentEditable, InfoWindowsWrapper } from './style';
import Speed from '../Speed';
import Timer from '../Timer';
import Accuracy from '../Accuracy';
import { useSelector, useDispatch } from 'react-redux';
import { startGame } from '../../actions/Timer';

const EditableText = ({ textArray, counter, currentText, setCurrentText, position, setPosition, symbolsTyped, setSymbolsTyped }) => {
    const dispatch = useDispatch();

    const [correctSymbol, setCorrectSymbol] = useState();

    const { isStarted, isFinished } = useSelector((state) => state.timer);

    const changeHandler = (e) => {
        !isStarted && dispatch(startGame());

        let lastChar = e.target.value.slice(-1);
        setSymbolsTyped(symbolsTyped + 1);

        if (lastChar === ";") {
            lastChar = " ";
        }

        if (lastChar === textArray[position]) {
            setCurrentText({ html: e.target.value });
            setPosition(position + 1);
            setCorrectSymbol(true);
        } else {
            setCorrectSymbol(false);
            setCurrentText(prevText => ({ html: prevText.html }));
        }
    };

    return (
        <>
            {isStarted ?
                <FeedBackWindow
                    color={correctSymbol ? "green" : "red"}
                >
                    {correctSymbol ? "Correct!" : "Incorrect!"}
                </FeedBackWindow>
                : <FeedBackWindow>
                    Start typing!
                </FeedBackWindow>
            }
            <WrapperContentEditable
                html={currentText.html}
                disabled={isFinished || !textArray.length}
                onChange={changeHandler}
            />

            <InfoWindowsWrapper>
                <Timer counter={counter} />
                <Accuracy correctSymbols={position} allSymbols={symbolsTyped} />
                <Speed counter={counter} correctSymbols={position} />
            </InfoWindowsWrapper>

        </>
    )
}

export default EditableText;
