import styled, { css } from 'styled-components';

import { Card } from '@/components/atoms/Card';
import { ThemeType } from '@/interfaces/Theme';

export const Container = styled.div`
  ${({ theme }: ThemeType) => css`
    background: ${theme.colors.primary800};

    padding: 120px 148px;

    gap: ${theme.space[8]};
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
      text-align: center;

      padding: ${theme.space[4]};
    }
  `}
`;

export const InfoCard = styled(Card)`
  ${({ theme }: ThemeType) => css`
    padding: ${theme.space[4]} 0;

    display: flex;

    > div:nth-of-type(2) {
      padding: ${theme.space[4]} ${theme.space[16]};
    }

    @media (max-width: 768px) {
      gap: 0;
      flex-direction: column;
    }
  `}
`;

export const CardItem = styled.div`
  ${({ theme }: ThemeType) => css`
    text-align: center;

    padding: ${theme.space[4]} ${theme.space[12]};

    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & + div {
      border-left: 1px solid #7c808c;
    }

    > div:nth-of-type(2) {
      height: 40px;
    }

    b {
      opacity: 0.5;
    }

    @media (max-width: 768px) {
      padding: ${theme.space[6]} 0;
    }
  `}
`;
