import styled, { css } from 'styled-components';

import { Card } from '@/components/atoms/Card';
import { Text } from '@/components/atoms/Text';
import { ThemeType } from '@/interfaces/Theme';

export const Container = styled.div`
  ${({ theme }: ThemeType) => css`
    background: ${theme.colors.white};

    text-align: center;

    padding: 80px 148px 120px 148px;

    position: relative;

    gap: ${theme.space[16]};
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
      padding: ${theme.space[4]};

      gap: ${theme.space[4]};
    }
  `}
`;

export const GrayBackground = styled.div`
  ${({ theme }: ThemeType) =>
    css`
      height: 430px;

      background: ${theme.colors.neutralGray300};

      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;

      z-index: 0;
    `}
`;

export const Title = styled(Text)`
  ${({ theme }: ThemeType) => css`
    margin-bottom: -32px;

    strong {
      color: ${theme.colors.secondary500};
      font-weight: ${theme.fontWeights.bold};
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      margin: 0 auto;

      font-size: ${theme.fontSizes['2xl']};
      text-align: center;
    }
  `}
`;

export const Carousel = styled.div`
  margin-right: -148px;

  display: flex;

  @media (max-width: 768px) {
    margin-right: 0;

    flex-direction: column;
  }
`;

export const Images = styled.div`
  gap: 16px;
  display: flex;

  z-index: 1;

  @media (max-width: 768px) {
    display: flex;
    gap: 8px;
  }
`;

export const WhyCard = styled(Card)`
  ${({ theme }: ThemeType) => css`
    min-width: 350px;

    box-shadow: 0 0 10px 2px rgba(24, 92, 255, 0.08);

    padding: ${theme.space[16]} ${theme.space[12]};

    gap: ${theme.space[2]};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    > div:nth-of-type(1) {
      margin-top: 8px;
    }

    p {
      text-align: center;
    }
  `}
`;
