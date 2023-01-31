import styled, { css } from 'styled-components';

import { ThemeType } from '@/interfaces/Theme';

export const Container = styled.div`
  ${({ theme }: ThemeType) => css`
    border: 1px solid ${theme.colors.white};
    border-radius: ${theme.radii.lg};
    background: ${theme.colors.white};
  `}
`;
