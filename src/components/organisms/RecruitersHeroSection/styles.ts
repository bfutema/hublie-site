import styled, { css } from 'styled-components';

import { ThemeType } from '@/interfaces/Theme';

export const Container = styled.div`
  ${({ theme }: ThemeType) => css`
    height: 882px;

    background: ${theme.colors.primary800};

    gap: ${theme.space[6]};
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
      height: fit-content;

      padding: ${theme.space[8]};

      align-items: center;

      p {
        font-size: ${theme.fontSizes.xl};
        text-align: center;
      }
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }: ThemeType) => css`
    max-width: 820px;

    color: ${theme.colors.primary900};
    font-size: ${theme.fontSizes['6xl']};
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.lineHeights.base};

    strong {
      color: ${theme.colors.white};
      line-height: ${theme.lineHeights.base};
      text-decoration: underline;
    }

    p {
      color: ${theme.colors.white};

      margin-left: 8px;

      display: inline;
    }

    @media (max-width: 768px) {
      line-height: 0;
      text-align: center;

      padding: ${theme.space[4]} 0;

      strong {
        line-height: 130%;
        font-size: ${theme.fontSizes['2xl']};
      }

      p {
        line-height: 130%;
        font-size: ${theme.fontSizes['2xl']};
      }
    }
  `}
`;
