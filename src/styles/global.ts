import { createGlobalStyle, css } from 'styled-components';

import { ThemeType } from '@/interfaces/Theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    ${({ theme }: ThemeType) => css`
      background: ${theme.colors.background};

      color: ${theme.colors.text};
      -webkit-font-smoothing: antialiased;
    `}
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;

    font-size: 1rem;
    font-family: ${({ theme }: ThemeType) => theme.fonts.default};

    display: flex;
    flex-direction: column;
  }

  body,
  input,
  textarea,
  button {
    font-family: ${({ theme }: ThemeType) => theme.fonts.default};
    font-weight: ${({ theme }: ThemeType) => theme.fontWeights.regular};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: ${({ theme }: ThemeType) => theme.fontWeights.bold};
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
