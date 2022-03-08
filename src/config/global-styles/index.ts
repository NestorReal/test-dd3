import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
    ${normalize}
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

    /* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #F4F2F2 #E8E8E8;
  box-sizing: border-box;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}

*::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #F4F2F2;
    border-radius: 5px;
}

*::-webkit-scrollbar-thumb {
  background: #E8E8E8;
    border-radius: 5px;
}

    *{
        font-family: 'Inter', sans-serif;
    }

    ol,ul,li {
        list-style: none;
    }


    html, body {
    overflow-x: hidden;
    max-width: 100%;
}
`;

// If needed, we can continue writing global styles inside string interpolation.

export default GlobalStyles;
