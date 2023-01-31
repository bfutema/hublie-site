import styled, { css } from 'styled-components';

import { Card } from '@/components/atoms/Card';
import { ThemeType } from '@/interfaces/Theme';

export const Container = styled(Card)`
  ${({ theme }: ThemeType) => css`
    height: fit-content;
    max-height: 280px;

    padding: ${theme.space[8]} ${theme.space[4]};

    position: relative;

    display: flex;
    flex-direction: column;
  `}
`;

export const Content = styled.div`
  ${({ theme }: ThemeType) => css`
    width: 300px;

    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.primary500};
    }

    strong {
      color: ${theme.colors.secondary500};
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      width: 100%;
      min-width: calc(50vw - 54px);
    }

    @media (max-width: 500px) {
      width: 100%;
      min-width: calc(100vw - 64px);
    }
  `}
`;

export const Who = styled.div`
  ${({ theme }: ThemeType) => css`
    width: fit-content;
    height: fit-content;

    border: 1px solid ${theme.colors.pink500};
    border-radius: ${theme.radii.full};
    background: ${theme.colors.pink500};

    padding: ${theme.space[1]} ${theme.space[4]} ${theme.space[1]}
      ${theme.space[1]};

    position: absolute;
    top: calc(100% + 24px);
    left: 0px;

    gap: ${theme.space[2]};
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      width: 100%;
    }
  `}
`;
