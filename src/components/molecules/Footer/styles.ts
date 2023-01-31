import styled, { css } from 'styled-components';

import { ThemeType } from '@/interfaces/Theme';

export const Container = styled.div`
  ${({ theme }: ThemeType) => css`
    background: ${theme.colors.primary800};

    padding: ${theme.space[16]} ${theme.space[2]};

    gap: ${theme.space[10]};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Heading = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    > ul {
      gap: ${theme.space[6]};
      display: flex;

      li {
        color: ${theme.colors.white};
        font-size: ${theme.fontSizes.sm};

        transition: all 0.2s;

        &:hover {
          a {
            color: ${theme.colors.secondary500};
            text-decoration: underline;
          }
        }

        a {
          /* color: ${theme.colors.secondary500}; */
          color: ${theme.colors.white};
          text-decoration: none;
        }
      }
    }
  `}
`;

export const Divider = styled.div`
  ${({ theme }: ThemeType) => css`
    width: 100%;
    height: 2px;

    background: ${theme.colors.white};
  `}
`;

export const Info = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
