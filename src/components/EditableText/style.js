import styled from "styled-components";
import ContentEditable from 'react-contenteditable';

export const WrapperContentEditable = styled(ContentEditable)`
position: absolute;
left:50;
top:50;
width: 90%;
width:35ch;
height: 90%;
padding: 1rem;
font-size: 2rem;
opacity:0.8;
&:focus {
color: palevioletred;
outline: none;
}
`;

export const InfoWindowsWrapper = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align:center;
width: 10rem;
right: -20%;
`;