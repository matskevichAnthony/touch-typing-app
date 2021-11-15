import React, { useState } from 'react';
import styled from 'styled-components';
import { Wrapper as FullTextWrapper } from '../FullText';
import ContentEditable from 'react-contenteditable';
const EditableText = ({ textArray }) => {

    const [currentText, setCurrentText] = useState({ html: "" });
    const [positon, setPosition] = useState(0);
    const changeHandler = (e) => {
        let lastChar = e.target.value.slice(-1);
        console.log(lastChar, textArray[positon]);
        if (lastChar === ";") {
            lastChar = " ";
        }
        if (lastChar === textArray[positon]) {
            setCurrentText({ html: e.target.value });
            setPosition(positon + 1);
        } else {
            console.log("wrong");
            setCurrentText(prevText => ({ html: prevText.html }));
        }
    }
    return (
        <WrapperContentEditable
            html={currentText.html}
            disabled={false}
            onChange={changeHandler}
        />
    )
}

export default EditableText;

const WrapperContentEditable = styled(ContentEditable)`
    position: absolute;
    left:50;
    top:50;
    /* transform: translate(-50%, -50%); */
    width: 90%;
    height: 90%;
    padding: 1rem;
    opacity:0.8;
`