import styled, { css } from 'styled-components';

import { Text } from '@/components/atoms/Text';
import { ThemeType } from '@/interfaces/Theme';

export const Container = styled.div`
  ${({ theme }: ThemeType) => css`
    background: ${theme.colors.green300};

    padding: ${theme.space[16]} 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

export const Title = styled.h1`
  ${({ theme }: ThemeType) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes['6xl']};
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.lineHeights.base};
    text-align: center;

    margin: 0 auto ${theme.space[8]} auto;

    strong {
      line-height: ${theme.lineHeights.base};
      text-decoration: underline;
    }

    p {
      color: ${theme.colors.white};

      margin-left: 8px;

      display: inline;
    }

    @media (max-width: 768px) {
      font-size: ${theme.fontSizes['2xl']};
      line-height: 140%;
      text-align: center;

      padding: 0 ${theme.space[4]};

      strong {
        line-height: 140%;
        font-size: ${theme.fontSizes['2xl']};
      }

      p {
        line-height: 140%;
        font-size: ${theme.fontSizes['2xl']};
      }
    }
  `}
`;

export const ImageCard = styled.div`
  ${({ theme }: ThemeType) => css`
    width: 100%;
    min-width: 100%;
    height: 560px;

    border-radius: 32px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    margin: ${theme.space[20]} 0;

    @media (max-width: 768px) {
      width: 86vw;
      min-width: 86vw;
      max-width: 86vw;
      height: 100vw;
      min-height: 100vw;
      max-height: 100vw;
    }
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    width: 100%;

    margin-bottom: ${theme.space[16]};

    gap: ${theme.space[6]};
    display: flex;
    justify-content: flex-start;

    @media (max-width: 768px) {
      text-align: center;

      padding: 0 ${theme.space[6]};

      flex-direction: column;
    }
  `}
`;

export const InfoText = styled(Text)`
  ${({ theme }: ThemeType) => css`
    strong {
      font-weight: ${theme.fontWeights.bold};
      line-height: ${theme.lineHeights.base};
      text-decoration: underline;
    }
  `}
`;
