import styled, { css } from 'styled-components';

import { ThemeType } from '@/interfaces/Theme';

export const Container = styled.div`
  height: 882px;

  background: #eceff2;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  ${({ theme }: ThemeType) => css`
    max-width: 820px;

    color: ${theme.colors.primary900};
    font-size: ${theme.fontSizes['6xl']};
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.lineHeights.base};

    margin-bottom: ${theme.space[6]};

    strong {
      color: ${theme.colors.primary500};
      line-height: ${theme.lineHeights.base};
      text-decoration: underline;
    }

    p {
      margin-left: ${theme.space[4]};

      display: inline;
    }
  `}
`;
