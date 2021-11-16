import React, { useState } from 'react';
import styled from 'styled-components';
import { FeedBackWindow } from '../InfoWindowStyle';
import ContentEditable from 'react-contenteditable';
import Speed from '../Speed';
import Timer from '../Timer';
import Accuracy from '../Accuracy';
import { useSelector, useDispatch } from 'react-redux';
import { startGame } from '../../actions/Timer';
import FullText from '../FullText';
const EditableText = ({ textArray, counter, currentText, setCurrentText, position, setPosition }) => {

    const [correctSymbol, setCorrectSymbol] = useState();
    const [symbolsTyped, setSymbolsTyped] = useState(0);
    const dispatch = useDispatch();
    const { isStarted, isFinished } = useSelector((state) => state.timer);

    const changeHandler = (e) => {
        dispatch(startGame());
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
    }


    return (
        <>
            {isStarted ?
                <FeedBackWindow
                    style={correctSymbol ? { color: 'green' } : { color: 'red' }}>
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

            <InfoWindowsWrapper counter={counter}>
                <Timer counter={counter}></Timer>
                <Accuracy correctSymbols={position} allSymbols={symbolsTyped} />
                <Speed counter={counter} correctSymbols={position} />
            </InfoWindowsWrapper>

        </>
    )
}

export default EditableText;

const WrapperContentEditable = styled(ContentEditable)`
    position: absolute;
    left:50;
    top:50;
    width: 90%;
    height: 90%;
    padding: 1rem;
    opacity:0.8;
    &:focus {
    color: palevioletred;
    outline: none;
  }
`;

const InfoWindowsWrapper = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align:center;
width: 10rem;
right: -20%;
`;