import React from 'react';
import styled from 'styled-components';
import { FeedBackWindow } from '../InfoWindowStyle';


const Accuracy = ({ correctSymbols, allSymbols }) => {

    return (
        <AccuracyWrapper>
            {correctSymbols > 0 && allSymbols > 0 ? Math.round((correctSymbols / allSymbols) * 100) : 100} %
        </AccuracyWrapper>
    )
}

export default Accuracy;

const AccuracyWrapper = styled(FeedBackWindow)`
position: relative;
margin-top: 1rem;
`

