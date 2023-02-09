import styled, { css } from 'styled-components';

import { ThemeType } from '@/interfaces/Theme';

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${({ isOpen }: ContainerProps) => css`
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid red;

    opacity: ${isOpen ? 1 : 0};
    visibility: ${isOpen ? 'visible' : 'hidden'};

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 10000;
  `}
`;

interface DialogProps extends ThemeType {
  isOpen: boolean;
}

export const Dialog = styled.div<DialogProps>`
  ${({ theme, isOpen }: DialogProps) => css`
    border-radius: ${theme.radii.md};
    background: ${theme.colors.white};

    padding: ${theme.space[4]};

    position: relative;

    display: ${isOpen ? 'block' : 'none'};

    animation: 0.2s ease-out 0s 1 normal none running fadeInModal;

    > button {
      border: 1px solid transparent;
      border-radius: ${theme.radii.full};
      background: none;

      position: absolute;
      top: 24px;
      right: 24px;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: all 0.2s;

      svg {
        transition: all 0.2s;
      }

      &:hover {
        border: 1px solid ${theme.colors.primary500};

        svg {
          color: ${theme.colors.primary500};
        }
      }
    }

    @keyframes fadeInModal {
      0% {
        opacity: 0;
        transform: translateY(20%) scale(0.96);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
  `}
`;
