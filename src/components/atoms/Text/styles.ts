import styled, { css } from 'styled-components';

import { ThemeType } from '@/interfaces/Theme';

import { SizeType, WeightType } from './types';

interface ContainerProps extends ThemeType {
  size: SizeType;
  weight: WeightType;
  maxWidth?: string;
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, size, weight, maxWidth }: ContainerProps) => css`
    width: fit-content;
    max-width: ${maxWidth};

    &,
    * {
      font-family: ${theme.fonts.default};
      font-size: ${theme.fontSizes[size]};
      font-weight: ${theme.fontWeights[weight]};
    }
  `}
`;
