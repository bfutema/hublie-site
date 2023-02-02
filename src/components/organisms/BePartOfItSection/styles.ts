import styled, { css } from 'styled-components';

import image1 from '@/assets/images/Mask_group_3.png';
import { Card } from '@/components/atoms/Card';
import { ThemeType } from '@/interfaces/Theme';

export const Container = styled.div`
  ${({ theme }: ThemeType) => css`
    background: ${theme.colors.pink500};

    padding: ${theme.space[20]} ${theme.space[16]};

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      gap: ${theme.space[8]};
      flex-direction: column;

      order: 1;
    }
  `}
`;

export const ImageCard = styled.div`
  width: 570px;
  min-width: 570px;
  height: 720px;

  border-radius: 32px;
  background-image: ${`url(${image1.src})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    width: 86vw;
    min-width: 86vw;
    max-width: 86vw;
    height: 100vw;
    min-height: 100vw;
    max-height: 100vw;
  }
`;

export const FreeCard = styled(Card)`
  ${({ theme }: ThemeType) => css`
    background: ${theme.colors.white};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

    text-align: center;

    margin-right: -54px;
    padding: ${theme.space[10]} ${theme.space[20]};

    gap: ${theme.space[2]};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    z-index: 100;

    br {
      display: none;
    }

    @media (max-width: 768px) {
      margin-top: -100px;
      margin-right: 0;

      padding: ${theme.space[8]} ${theme.space[7]};

      gap: ${theme.space[4]};

      order: 2;

      br {
        display: block;
      }

      > div:nth-of-type(1) {
        font-size: ${theme.fontSizes['2xl']};
        text-align: center;

        strong {
          font-size: ${theme.fontSizes['2xl']};
        }
      }
    }
  `}
`;
