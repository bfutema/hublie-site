import styled, { css } from 'styled-components';

import { ThemeType } from '@/interfaces/Theme';

export const Container = styled.header`
  ${({ theme }: ThemeType) => css`
    height: 172px;

    padding: 0 ${theme.space[2]};

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      height: fit-content;

      padding: ${theme.space[3]};

      .access-platform-button {
        display: none;
      }
    }
  `}
`;
