import 'jquery/dist/jquery.js';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    ${({ theme }) => theme}
    body {
        transition: all 0.5s ease-in-out;
    }
`