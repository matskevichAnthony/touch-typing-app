import BaseComponent from 'bootstrap/js/dist/base-component';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getText } from '../../actions/Text';
import styled from 'styled-components';
import { FeedBackWindow } from '../InfoWindowStyle';


const FinishWindow = ({ data, setFinish, setStart, counter, setCounter, currentText, setCurrentText, position, setPosition }) => {

    const dispatch = useDispatch();

    const clickHandler = () => {

        setCurrentText({ html: "" })
        console.log("finish in handler")
        setPosition(0);
        setFinish(false);
        setStart(false);
        setCounter(5);
        dispatch(getText())
    }

    return (
        <BackgroundWrapper>
            <FinishWindowData>
                <p>Time taken:</p>
                <p>Speed:</p>
                <p>Errors amount:</p>
                <button onClick={() => clickHandler()}>Start again!</button>
            </FinishWindowData>
        </BackgroundWrapper>
    )
}

export default FinishWindow

const FinishWindowData = styled.div`
width: 30rem;
height:30rem;
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
text-align:center;
background: whitesmoke;
border-radius: 20px;

button{
    border:none;
    background-color: #55c5ff;
    width: 7rem;
    height: 3rem;
    border-radius: 20px;
    color: whitesmoke;
    transition:all 0.5s linear;
    &:hover{
        background:tomato;
    }
}



`
const BackgroundWrapper = styled.div`
width:100%;
height:100%;
display:flex;
justify-content: center;
align-items: center;
text-align:center;
background:#55c5ff;
position: absolute;
z-index:100;
opacity:0.9;
`
