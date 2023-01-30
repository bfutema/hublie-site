import styled, { css } from 'styled-components';

import { ThemeType } from '@/interfaces/Theme';

export const Container = styled.div`
  ${({ theme }: ThemeType) => css`
    width: fit-content;

    border: 1px solid ${theme.colors.secondary500};
    border-radius: ${theme.radii.full};
    background: ${theme.colors.secondary500};

    padding: ${theme.space[2]} ${theme.space[4]};

    &:hover {
      a {
        text-decoration: none;
      }
    }

    a {
      color: ${theme.colors.white};
      text-transform: uppercase;
    }
  `}
`;
