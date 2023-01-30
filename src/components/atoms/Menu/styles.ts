import styled, { css } from 'styled-components';

import { ThemeType } from '@/interfaces/Theme';

interface ContainerProps extends ThemeType {
  isOpen?: boolean;
}

export const Container = styled.ul<ContainerProps>`
  ${({ theme, isOpen }: ContainerProps) => css`
    gap: ${theme.space[6]};
    display: flex;

    li {
      color: #fff;
      font-size: ${theme.fontSizes.sm};

      a {
        /* color: ${theme.colors.secondary500}; */
        color: ${theme.colors.neutralGray700};
        text-decoration: none;
      }
    }

    .close-burger-menu-button {
      border: none;
      background: transparent;

      position: fixed;
      right: ${theme.space[4]};

      display: none;
    }

    @media (max-width: 768px) {
      height: 100vh;
      width: 100vw;

      flex-flow: column nowrap;

      padding-top: 3.5rem;

      background-color: #0d2538;

      position: fixed;
      top: 0;
      right: 0;

      transform: ${isOpen ? 'translateX(0)' : 'translateX(100%)'};

      transition: transform 0.3s ease-in-out;

      li {
        color: #fff;
        font-size: ${theme.fontSizes.sm};
      }

      .close-burger-menu-button {
        display: block;
      }
    }
  `}
`;
