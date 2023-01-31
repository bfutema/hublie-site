import styled, { css } from 'styled-components';

import { ThemeType } from '@/interfaces/Theme';

export const Container = styled.div`
  ${({ theme }: ThemeType) => css`
    background: ${theme.colors.primary500};

    padding: 100px 148px;

    gap: ${theme.space[10]};
    flex: 1;
    display: flex;
    flex-direction: column;
  `}
`;

export const Carousel = styled.div`
  margin-right: -148px;

  display: flex;
`;

export const Navigation = styled.div`
  ${({ theme }) => css`
    width: 100%;

    padding: ${theme.space[4]} ${theme.space[10]} ${theme.space[4]} 0;

    gap: ${theme.space[8]};
    display: flex;
    justify-content: space-between;

    > div {
      gap: ${theme.space[4]};
      display: flex;
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
  `}
`;

export const Images = styled.div`
  height: 400px;

  overflow-x: scroll;

  gap: 24px;
  display: flex;

  &::-webkit-scrollbar {
    height: 0px;
  }
`;
