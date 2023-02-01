import styled, { css } from 'styled-components';

import { ThemeType } from '@/interfaces/Theme';
import { theme as Theme } from '@/styles/themes';

interface ContainerProps extends ThemeType {
  backgroundColor: keyof typeof Theme.colors;
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, backgroundColor }: ContainerProps) => css`
    width: fit-content;

    border: 1px solid ${theme.colors[backgroundColor]};
    border-radius: ${theme.radii.full};
    background: ${theme.colors[backgroundColor]};

    padding: ${theme.space[2]} ${theme.space[4]};

    &:hover {
      cursor: pointer;

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
