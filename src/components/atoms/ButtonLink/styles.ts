import styled, { css } from 'styled-components';

import { ThemeType } from '@/interfaces/Theme';
import { theme as Theme } from '@/styles/themes';

interface ContainerProps extends ThemeType {
  color: keyof typeof Theme.colors;
  backgroundColor: keyof typeof Theme.colors;
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, color, backgroundColor }: ContainerProps) => css`
    width: fit-content;

    border: 1px solid ${theme.colors[backgroundColor]};
    border-radius: ${theme.radii.full};
    background: ${theme.colors[backgroundColor]};

    padding: ${theme.space[4]} ${theme.space[6]};
    font-weight: ${theme.fontWeights.bold};

    div {
      font-weight: ${theme.fontWeights.bold};
    }

    &:hover {
      cursor: pointer;
    }

    a {
      color: ${theme.colors[color]};
      text-decoration: none;
    }
  `}
`;
