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

const Wrapper = styled.div`
    padding: 1rem;
`