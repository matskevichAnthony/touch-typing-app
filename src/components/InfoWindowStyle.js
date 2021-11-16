import styled from "styled-components";

export const FeedBackWindow = styled.div`
    width: 7rem;
    height: 6rem;
    background: whitesmoke;
    border-radius: 15px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    font-weight: bold;
    top: -25%;
    transition: all 0.4s linear;
    color: ${p => p.color};
`;