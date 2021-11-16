import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';


const FinishWindow = ({ counter, correctSymbols, allSymbols }) => {

    const { gameDuration } = useSelector((state) => state.timer);

    const clickHandler = () => {
        window.location.href = window.location.href;
    }

    return (
        <BackgroundWrapper>
            <FinishWindowData>
                <p>Time taken: {gameDuration - counter} sec</p>
                <p>Speed: {(counter > 0 && correctSymbols && gameDuration) ? Math.round(correctSymbols / (gameDuration - counter) * 60) : null} cpm</p>
                <p>Accuracy: {correctSymbols > 0 && allSymbols > 0 ? Math.round((correctSymbols / allSymbols) * 100) : 100} %</p>
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
