import React from 'react';
import styled from 'styled-components';
import { FeedBackWindow } from '../InfoWindowStyle';
import { useSelector } from 'react-redux';

const Speed = ({ correctSymbols, counter }) => {
    const { gameDuration } = useSelector(state => state.timer);

    console.log(correctSymbols, (gameDuration - counter))
    return (
        <SpeedWrapper>
            {(counter > 0 && correctSymbols && gameDuration) ? Math.round(correctSymbols / (gameDuration - counter) * 60) : null} cpm
        </SpeedWrapper>
    )
}

export default Speed;

const SpeedWrapper = styled(FeedBackWindow)`
position: relative;
margin-top: 1rem;
`;