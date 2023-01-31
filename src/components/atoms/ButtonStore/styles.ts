import styled, { css } from 'styled-components';

import { ThemeType } from '@/interfaces/Theme';

export const Container = styled.div`
  ${({ theme }: ThemeType) => css`
    width: fit-content;

    border: 1px solid ${theme.colors.neutralGray200};
    border-radius: ${theme.radii.xs};
    background: ${theme.colors.neutralGray200};

    padding: ${theme.space[2]} ${theme.space[5]};

    transition: all 0.2s;

    &:hover {
      background: ${theme.colors.background};

      cursor: pointer;
    }

    a {
      color: ${theme.colors.black};
      text-decoration: none;

      gap: ${theme.space[2]};
      display: flex;
      align-items: center;
    }
  `}
`;
