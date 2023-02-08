import styled, { css } from 'styled-components';

import { Card } from '@/components/atoms/Card';
import { Text } from '@/components/atoms/Text';
import { ThemeType } from '@/interfaces/Theme';

export const Container = styled.div`
  ${({ theme }: ThemeType) => css`
    background: ${theme.colors.primary500};

    padding: 80px 148px 120px 148px;

    gap: ${theme.space[10]};
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      padding: ${theme.space[4]};

      gap: ${theme.space[4]};
    }
  `}
`;

export const Title = styled(Text)`
  ${({ theme }: ThemeType) => css`
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

export const Navigation = styled.div`
  ${({ theme }) => css`
    width: 100%;

    padding: ${theme.space[4]} ${theme.space[10]} ${theme.space[12]} 0;

    gap: ${theme.space[8]};
    display: flex;
    justify-content: space-between;

    > div {
      gap: ${theme.space[4]};
      display: flex;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;

      padding: ${theme.space[4]} 0;
    }
  `}
`;

export const NextButton = styled.button`
  ${({ theme }: ThemeType) => css`
    width: 100px;
    height: 50px;

    border: 1px solid ${theme.colors.secondary500};
    border-radius: ${theme.radii.full};
    background: ${theme.colors.secondary500};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.2s;

    &:disabled {
      opacity: 0.2;
    }

    &:not(:disabled):hover {
      filter: brightness(0.9);
    }

    svg {
      margin-left: ${theme.space[4]};

      line,
      polyline {
        stroke: ${theme.colors.white};
      }
    }

    @media (max-width: 768px) {
      width: 70px;
      height: 40px;

      order: 2;
    }
  `}
`;

export const PrevButton = styled.button`
  ${({ theme }: ThemeType) => css`
    width: 100px;
    height: 50px;

    border: 1px solid ${theme.colors.secondary500};
    border-radius: ${theme.radii.full};
    background: ${theme.colors.secondary500};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.2s;

    &:disabled {
      opacity: 0.2;
    }

    &:not(:disabled):hover {
      filter: brightness(0.9);
    }

    svg {
      margin-right: ${theme.space[4]};

      line,
      polyline {
        stroke: ${theme.colors.white};
      }
    }

    @media (max-width: 768px) {
      width: 70px;
      height: 40px;

      order: 1;
    }
  `}
`;

export const Images = styled.div`
  overflow-x: scroll;

  gap: 24px;
  display: flex;

  &::-webkit-scrollbar {
    height: 0px;
  }

  @media (max-width: 768px) {
    display: flex;
    gap: 8px;
  }
`;

export const WhyCard = styled(Card)`
  ${({ theme }: ThemeType) => css`
    min-width: 320px;

    padding: ${theme.space[10]} ${theme.space[8]};

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
