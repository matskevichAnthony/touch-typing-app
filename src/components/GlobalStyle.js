import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            
        }

        body{
            background: whitesmoke;
            font-family: 'Inter', sans-serif;
            overflow-y: scroll;
            background-color: #55c5ff;
        }
        `;


export default GlobalStyle;