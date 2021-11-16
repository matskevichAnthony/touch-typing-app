import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Wrapper as FullTextWrapper } from '../FullText';
import { FeedBackWindow } from '../InfoWindowStyle';
import ContentEditable from 'react-contenteditable';
import Speed from '../Speed';
import Timer from '../Timer';
import Accuracy from '../Accuracy';
import { useSelector, useDispatch } from 'react-redux';
const EditableText = ({ textArray, start, setStart, counter, setCounter, setFinish, finish, currentText, setCurrentText, position, setPosition }) => {

    //не забыть обнулить позишн при начале
    // const [currentText, setCurrentText] = useState({ html: "" });
    // const [position, setPosition] = useState(0);
    const [correctSymbol, setCorrectSymbol] = useState();

    const refContainer = useRef(currentText);
    console.log(refContainer);
    const changeHandler = (e) => {
        setStart(true);
        let lastChar = e.target.value.slice(-1);
        console.log(lastChar, textArray[position]);

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
    console.log("lol")


    return (
        <>
            {start ?
                <FeedBackWindow
                    style={correctSymbol ? { color: 'green' } : { color: 'red' }}>
                    {correctSymbol ? "Correct!" : "Incorrect!"}
                </FeedBackWindow>
                : <FeedBackWindow>
                    Start typing!
                </FeedBackWindow>
            }
            <WrapperContentEditable
                ref={refContainer}
                html={currentText.html}
                disabled={!finish ? false : true}
                onChange={changeHandler}
            />

            <InfoWindowsWrapper counter={counter}>
                <Timer counter={counter}></Timer>
                <Accuracy></Accuracy>
                <Speed></Speed>
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