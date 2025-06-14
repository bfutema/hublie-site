import styled, { css } from 'styled-components';

import { ThemeType } from '@/interfaces/Theme';

export const Container = styled.div`
  ${({ theme }: ThemeType) => css`
    background: ${theme.colors.neutralGray300};

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
      height: fit-content;

      padding: ${theme.space[4]};
      padding: 0;

      p {
        font-size: ${theme.fontSizes.xl};
        text-align: center;
      }
    }
  `}
`;

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 500px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const Right = styled.div`
  display: flex;

  .banner-desktop {
    display: block;
  }

  .banner-mobile {
    display: none;
  }

  @media (max-width: 768px) {
    .banner-desktop {
      display: none;
    }

    .banner-mobile {
      display: block;
    }
  }
`;

export const Title = styled.h1`
  ${({ theme }: ThemeType) => css`
    max-width: 820px;

    color: ${theme.colors.primary900};
    font-size: ${theme.fontSizes['6xl']};
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.lineHeights.shorter};

    margin-bottom: ${theme.space[6]};

    strong {
      color: ${theme.colors.primary500};
      text-decoration: underline;
    }

    p {
      margin-left: 8px;

      display: inline;
    }

    @media (max-width: 768px) {
      font-size: ${theme.fontSizes['2xl']};
      text-align: center;

      padding: ${theme.space[4]} 0;

      strong {
        font-size: ${theme.fontSizes['2xl']};
      }

      p {
        font-size: ${theme.fontSizes['2xl']};
      }
    }
  `}
`;
