import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export default styled.createGlobalStyle`
    html,
    body {
        height: 100vh;
    }

    * {
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    ::-webkit-scrollbar {
        height: 8px;
        width: 8px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #3B74F2;
        border-radius: 4px;
    }
`;