import styled, { css } from 'styled-components';

import { Card } from '@/components/atoms/Card';
import { ThemeType } from '@/interfaces/Theme';

export const Container = styled.div`
  ${({ theme }: ThemeType) => css`
    width: 100%;
    height: 510px;

    background-size: cover;
    background-position: center;

    padding: ${theme.space[40]} ${theme.space[40]};

    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      color: ${theme.colors.pink500};
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      height: fit-content;

      padding: ${theme.space[40]} ${theme.space[16]};

      gap: ${theme.space[12]};
      flex-direction: column;

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

export const CallToActionCard = styled(Card)`
  ${({ theme }: ThemeType) => css`
    max-width: 300px;
    min-width: fit-content;

    padding: ${theme.space[12]} ${theme.space[20]};

    gap: ${theme.space[4]};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      padding: ${theme.space[6]};

      .br {
        display: none;
      }

      > div:nth-of-type(1) {
        font-size: ${theme.fontSizes.xl};
        text-align: center;

        strong {
          font-size: ${theme.fontSizes.xl};
        }
      }
    }
  `}
`;
