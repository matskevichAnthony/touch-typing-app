import styled from "styled-components";
import { Link } from 'react-router-dom';
export const HomeWrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
`

export const LeftSectionWrapper = styled.div`
height: 100%;
width: 50%;
display: flex;
justify-content: center;
align-items: center;
text-align:center;
color: whitesmoke;

h1{
    font-size: 5rem;
    font-weight: bolder;
}

h1:after
{
    content:' ';
    display:block;
    width: 11rem;
    background: whitesmoke;
    border:3px solid whitesmoke;
}

`

export const RightSectionWrapper = styled.div`
height: 100%;
width: 50%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
text-align:center;
p{
width: 19ch;
font-size: 2rem;
color: whitesmoke;
}
`

export const ButtonToStart = styled(Link)`
display: flex;
justify-content: center;
text-align:center;
align-items: center;
width: 8rem;
height: 4rem;
left: 45%;
top: 75%;
text-decoration: none;
color: whitesmoke;
background: tomato;
border-radius: 15px;
transition: all 0.3s linear;
&:focus, &:hover, &:active {
    background: red;
    color: whitesmoke;
    transform:scale(1.3);
}

`