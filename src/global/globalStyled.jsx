import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font: 400 14px arial, sans-serif;
        background: #f0f0f5;
        -webkit-font-smoothing: antialiased !important;
    }

    button, input, textarea {
        font: 400 18px arial, sans-serif;
    }

    button {
        cursor: pointer;
        border: 0;
    }
`;