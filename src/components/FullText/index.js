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
    left:0;
    top:0;
    width: 100%;
    background:red;
    padding: 1rem;
`