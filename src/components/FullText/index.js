import React from 'react';
import styled from 'styled-components';
const FullText = ({ text }) => {
    return (
        <Wrapper>
            {text}
        </Wrapper>
    )
}

export default FullText;

export const Wrapper = styled.div`
    position: absolute;
    left:50;
    top:50;
    width: 90%;
    height: 90%;
    padding: 1rem;
    color:#e5e5e5;
`