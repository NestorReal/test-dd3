import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
    ${normalize}
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

    *{
        font-family: 'Inter', sans-serif;
    }
`;
// If needed, we can continue writing global styles inside string interpolation.

export default GlobalStyles;
