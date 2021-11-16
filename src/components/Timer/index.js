import React from 'react';
import styled from 'styled-components';
import { FeedBackWindow } from '../InfoWindowStyle';

const Timer = ({ counter }) => {
    return (
        <TimerWrapper>
            {counter} sec
        </TimerWrapper>
    )
}

export default Timer;

const TimerWrapper = styled(FeedBackWindow)`
position: relative;
margin-top: 1rem;
`