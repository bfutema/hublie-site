import styled, { css } from 'styled-components';

import { ThemeType } from '@/interfaces/Theme';

export const Container = styled.div`
  ${({ theme }: ThemeType) => css`
    background: ${theme.colors.primary800};

    gap: ${theme.space[6]};
    display: flex;
    flex-direction: column;
    justify-content: center;

    .enterprises-hero-section-text {
      line-height: ${theme.lineHeights.short};
    }

    @media (max-width: 768px) {
      height: fit-content;

      padding: ${theme.space[4]};
      padding: 0;

      align-items: center;

      p {
        font-size: ${theme.fontSizes.xl};
      }

      h1 {
        margin-top: ${theme.space[6]};
      }

      h1 {
        padding: 0 ${theme.space[8]};
      }

      p {
        margin: 0 !important;

        display: block !important;

        br {
          display: none;
        }
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
  ${({ theme }: ThemeType) => css`
    width: 100%;

    gap: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
      > div:nth-of-type(2) {
        margin: 0 auto;
      }

      .enterprises-hero-section-text {
        padding: 0 ${theme.space[8]};
      }
    }
  `}
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

    strong {
      color: ${theme.colors.white};
      text-decoration: underline;
    }

    p {
      color: ${theme.colors.white};

      margin-left: 8px;

      display: inline;
    }

    @media (max-width: 768px) {
      font-size: ${theme.fontSizes['2xl']};

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
