import styled, { css } from 'styled-components';

import { Card } from '@/components/atoms/Card';
import { Text } from '@/components/atoms/Text';
import { ThemeType } from '@/interfaces/Theme';

export const Container = styled.div`
  ${({ theme }: ThemeType) => css`
    background: ${theme.colors.neutralGray300};

    padding: ${theme.space[16]} ${theme.space[4]};

    gap: ${theme.space[16]};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

export const Title = styled(Text)`
  ${({ theme }: ThemeType) => css`
    color: ${theme.colors.primary800};
    text-align: center;

    margin: 0 auto;

    strong {
      color: ${theme.colors.primary500};
      font-weight: ${theme.fontWeights.bold};
    }
  `}
`;

export const RecruiterBenefitCards = styled.div`
  ${({ theme }: ThemeType) => css`
    gap: ${theme.space[8]};
    display: flex;
    flex-direction: column;
  `}
`;

export const RecruiterBenefitCard = styled(Card)`
  ${({ theme }: ThemeType) => css`
    max-width: 560px;

    background: ${theme.colors.white};
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
  `}
`;

export const CardIcon = styled.div`
  ${({ theme }: ThemeType) => css`
    width: 64px;
    height: 64px;

    margin: ${theme.space[4]};

    background-size: cover;

    flex-shrink: 0;
  `}
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
