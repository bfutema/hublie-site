import styled, { css } from 'styled-components';

import { ThemeType } from '@/interfaces/Theme';

import { ColorType, SizeType, WeightType } from './types';

interface ContainerProps extends ThemeType {
  color: ColorType;
  size: SizeType;
  weight: WeightType;
  maxWidth?: string;
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, color, size, weight, maxWidth }: ContainerProps) => css`
    width: fit-content;
    max-width: ${maxWidth};

    &,
    * {
      color: ${theme.colors[color]};
      font-family: ${theme.fonts.default};
      font-size: ${theme.fontSizes[size]};
      font-weight: ${theme.fontWeights[weight]};
    }
  `}
`;
