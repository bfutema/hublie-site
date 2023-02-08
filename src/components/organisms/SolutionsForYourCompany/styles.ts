import styled, { css } from 'styled-components';

import { Card } from '@/components/atoms/Card';
import { Text } from '@/components/atoms/Text';
import { ThemeType } from '@/interfaces/Theme';

export const Container = styled.div`
  ${({ theme }: ThemeType) => css`
    background: ${theme.colors.secondary500};

    padding: 120px 148px;

    gap: ${theme.space[10]};
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      padding: ${theme.space[6]};

      gap: ${theme.space[4]};
    }
  `}
`;

export const Header = styled.div`
  ${({ theme }: ThemeType) => css`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      margin: ${theme.space[4]} auto ${theme.space[2]} auto;

      flex-direction: column;
      gap: ${theme.space[4]};

      text-align: center;
    }
  `}
`;

export const Title = styled(Text)`
  ${({ theme }: ThemeType) => css`
    margin-bottom: 0px;
    font-weight: ${theme.fontWeights.bold};

    strong {
      color: ${theme.colors.secondary500};
      font-weight: ${theme.fontWeights.bold};
    }

    @media (max-width: 768px) {
      margin: 0 auto;
      padding: 0 ${theme.space[6]};

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
    width: fit-content;

    padding: ${theme.space[4]} ${theme.space[10]} ${theme.space[4]} 0;

    gap: ${theme.space[4]};
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
      margin: 0 auto;

      padding: ${theme.space[4]} 0;

      gap: ${theme.space[2]};
      flex-direction: row;
      justify-content: center;
    }
  `}
`;

export const NextButton = styled.button`
  ${({ theme }: ThemeType) => css`
    width: 100px;
    height: 50px;

    border: 1px solid ${theme.colors.primary800};
    border-radius: ${theme.radii.full};
    background: ${theme.colors.primary800};

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

    border: 1px solid ${theme.colors.primary800};
    border-radius: ${theme.radii.full};
    background: ${theme.colors.primary800};

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
    gap: 24px;
  }
`;

export const WhyCard = styled(Card)`
  ${({ theme }: ThemeType) => css`
    min-width: 300px;
    /* height: 280px; */

    padding: ${theme.space[8]};

    gap: ${theme.space[3]};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    > div:nth-of-type(1) {
      margin-top: 8px;
      padding: 0px ${theme.space[8]};
      line-height: ${theme.lineHeights.short};
    }

    p {
      text-align: center;
    }

    @media (max-width: 768px) {
      min-width: 356px;

      > div:nth-of-type(1) {
        padding: 0px ${theme.space[4]};
      }
    }
  `}
`;
