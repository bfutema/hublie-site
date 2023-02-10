import styled, { css } from 'styled-components';

import { ThemeType } from '@/interfaces/Theme';

interface ContainerProps extends ThemeType {
  isOpen?: boolean;
}

export const Container = styled.ul<ContainerProps>`
  ${({ theme, isOpen }: ContainerProps) => css`
    gap: ${theme.space[6]};
    display: flex;

    z-index: 10000;

    li {
      color: ${theme.colors.white};
      font-size: ${theme.fontSizes.sm};

      transition: all 0.2s;

      &.active a {
        color: ${theme.colors.secondary500};
        text-decoration: underline;
      }

      &:hover {
        a {
          color: ${theme.colors.secondary500};
          text-decoration: underline;
        }
      }

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
      right: 1.7rem;

      display: none;
    }

    .container-logo {
      display: none;
    }

    .container-button-link {
      display: none;
    }

    .container-social-icons {
      display: none;
    }

    @media (max-width: 768px) {
      height: 100vh;
      width: 100vw;

      flex-flow: column nowrap;

      padding-top: 2rem;

      background-color: ${theme.colors.primary500};

      position: fixed;
      top: 0;
      right: 0;
      gap: 0;

      transform: ${isOpen ? 'translateX(0)' : 'translateX(100%)'};

      transition: transform 0.3s ease-in-out;

      li {
        color: ${theme.colors.white};
        font-size: ${theme.fontSizes.md};
        border-top: 1px solid ${theme.colors.white};
        justify-content: space-between;
        display: flex;

        transition: all 0.2s;

        padding: 12px 0;
        margin: 0 2rem;

        &:nth-child(8) {
          border-bottom: 1px solid ${theme.colors.white};
        }

        &.active a {
          color: ${theme.colors.white};
          text-decoration: none;

          opacity: 1;
        }

        &.active::after {
          display: flex;
          content: '\\279C';
        }

        &:hover {
          a {
            color: ${theme.colors.white};
            text-decoration: none;

            opacity: 1;
          }
        }

        a {
          color: ${theme.colors.white};
          opacity: 0.45;
          text-decoration: none;

          width: fit-content;
        }
      }

      .close-burger-menu-button {
        display: block;
      }

      .container-button-link {
        display: block;
        margin: 28px 0px 48px 2rem;
      }

      .container-logo {
        display: block;
        margin-bottom: ${theme.space[6]};
        padding-left: 2rem;
      }

      .container-social-icons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;

        height: 100%;

        background-color: ${theme.colors.white};

        img {
          cursor: pointer;
        }
      }
    }
  `}
`;
