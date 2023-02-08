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

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;

      ul {
        margin-top: 16px;

        gap: 6px;
        flex-direction: column;
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
  justify-content: space-between;

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;

    justify-content: space-between;
  }

  @media (max-width: 768px) {
    margin-bottom: 64px;

    gap: 40px;
    flex-direction: column;
    align-items: flex-start;

    div div {
      max-width: 100%;
    }

    > div:nth-child(1) {
      gap: 16px;
    }
  }
`;

export const Logos = styled.div`
  display: flex;
  gap: 16px;
`;
