import NextImage from 'next/image';
import styled, { css } from 'styled-components';

import { Text } from '@/components/atoms/Text';
import { ThemeType } from '@/interfaces/Theme';

export const Container = styled.div`
  ${({ theme }: ThemeType) => css`
    height: 205px;
    max-width: 958px;

    border: 1px solid ${theme.colors.primary800};
    border-radius: ${theme.radii.lg};
    background: ${theme.colors.primary800};

    margin: 0 auto;
    padding: ${theme.space[10]};

    position: relative;
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: -${theme.space[3]};

    position: absolute;
    left: ${theme.space[8]};

    gap: ${theme.space[4]};
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

export const Title = styled(Text)`
  ${({ theme }: ThemeType) => css`
    color: ${theme.colors.white};

    strong {
      color: ${theme.colors.pink500} !important;
    }
  `}
`;

export const Buttons = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.space[2]};

    gap: ${theme.space[6]};
    display: flex;
  `}
`;

export const Image = styled(NextImage)`
  position: absolute;
  top: -1px;
  right: 32px;
`;
