import BaseComponent from 'bootstrap/js/dist/base-component';
import React from 'react';
import styled from 'styled-components';
import { FeedBackWindow } from '../InfoWindowStyle';


const FinishWindow = ({ data, setFinish, setStart, setCounter }) => {

    const clickHandler = () => {

    }

    return (
        <BackgroundWrapper>
            <FinishWindowData>
                <button onClick={() => clickHandler}>START AGAIN!</button>
            </FinishWindowData>
        </BackgroundWrapper>
    )
}

export default FinishWindow

const FinishWindowData = styled.div`
width: 40rem;
height:40rem;
display:flex;
justify-content: center;
align-items: center;
text-align:center;
background: whitesmoke;
`
const BackgroundWrapper = styled.div`
width:100%;
height:100%;
display:flex;
justify-content: center;
align-items: center;
text-align:center;
background:black;
position: absolute;
z-index:100;
opacity:0.9;
`
