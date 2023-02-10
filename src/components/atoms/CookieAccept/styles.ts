import styled, { css } from 'styled-components';

import { ThemeType } from '@/interfaces/Theme';

interface ContainerProps extends ThemeType {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, isOpen }: ContainerProps) => css`
    max-width: 1200px;
    width: 100%;

    border-radius: ${theme.radii.md};
    background: ${theme.colors.white};

    padding: ${theme.space[6]} ${theme.space[6]} ${theme.space[6]}
      ${theme.space[16]};

    position: fixed;
    bottom: 64px;
    left: 50%;

    gap: ${theme.space[6]};
    display: ${isOpen ? 'flex' : 'none'};
    align-items: center;

    transform: translateX(-50%);

    z-index: 200;

    animation: 0.4s ease-out 0s 1 normal none running fadeIn;

    p {
      button {
        border: none;
        background: none;

        color: ${theme.colors.primary500};
        text-decoration: underline;
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateX(-50%) translateY(20%) scale(0.96);
      }
      100% {
        opacity: 1;
        transform: translateX(-50%) translateY(0) scale(1);
      }
    }

    @media (max-width: 768px) {
      max-width: 80vw;

      padding: ${theme.space[6]};

      flex-direction: column;
      align-items: center;
    }
  `}
`;

export const AcceptButton = styled.button`
  ${({ theme }: ThemeType) => css`
    width: fit-content;

    border: none;
    border-radius: ${theme.radii.md};
    background: ${theme.colors.primary500};

    color: ${theme.colors.white};

    padding: ${theme.space[2]} ${theme.space[10]};

    position: relative;

    transition: all 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  `}
`;
