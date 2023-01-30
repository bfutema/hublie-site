import styled, { css } from 'styled-components';

import { ThemeType } from '@/interfaces/Theme';

import { WheightType } from './types';

interface ContainerProps extends ThemeType {
  weight: WheightType;
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, weight }: ContainerProps) => css`
    background: red;

    * {
      font-family: ${theme.fonts.default};
      font-weight: ${theme.fontWeights[weight]};
    }
  `}
`;
