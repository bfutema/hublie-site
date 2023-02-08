import styled, { css } from 'styled-components';

import image1 from '@/assets/images/businessman-working-on-tablet_6__1_.png';
import { Card } from '@/components/atoms/Card';
import { ThemeType } from '@/interfaces/Theme';

export const Container = styled.div`
  ${({ theme }: ThemeType) => css`
    background: ${theme.colors.white};

    padding: 110px 0;

    display: flex;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 768px) {
      padding-top: 300px;

      gap: ${theme.space[8]};
      align-items: center;
      flex-direction: column;
    }
  `}
`;

export const ImageCard = styled(Card)`
  width: 470px;
  min-width: 470px;
  height: 628px;

  background-image: ${`url(${image1.src})`};
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    width: 86vw;
    min-width: 86vw;
    max-width: 86vw;
    height: 100vw;
    min-height: 100vw;
    max-height: 100vw;
  }
`;

export const Info = styled.div`
  ${({ theme }: ThemeType) => css`
    padding: ${theme.space[10]} ${theme.space[16]};

    gap: ${theme.space[2]};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    z-index: 100;

    strong {
      color: ${theme.colors.secondary500};
      font-weight: ${theme.fontWeights.bold};
      text-decoration: underline;

      margin-left: 8px;
    }

    @media (max-width: 768px) {
      margin-top: -750px;

      > div:nth-of-type(1) {
        font-size: 1.6rem;
        text-align: center;

        br {
          display: none;
        }

        strong {
          font-size: 1.6rem;
        }
      }

      > div:nth-of-type(2) {
        text-align: center;

        margin-bottom: 460px;
      }
    }
  `}
`;

export const InfoItems = styled.div`
  ${({ theme }: ThemeType) => css`
    margin-top: ${theme.space[4]};

    gap: ${theme.space[8]};
    display: flex;
    flex-direction: column;
  `}
`;

export const InfoItem = styled.div`
  ${({ theme }: ThemeType) => css`
    gap: ${theme.space[4]};
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `}
`;
