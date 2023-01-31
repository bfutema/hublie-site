import NextImage from 'next/image';
import styled, { css } from 'styled-components';

import { Card } from '@/components/atoms/Card';
import { Text } from '@/components/atoms/Text';
import { ThemeType } from '@/interfaces/Theme';
import { theme as Theme } from '@/styles/themes';

export const Container = styled(Card)`
  display: flex;
  flex-direction: column;
`;

export const Image = styled(NextImage)`
  width: 100%;
  height: 176px;

  border-top-left-radius: inherit;
  border-top-right-radius: inherit;

  object-fit: cover;
  object-position: top;
`;

interface ContentProps extends ThemeType {
  color: keyof typeof Theme.colors;
  width: number;
}

export const Content = styled.div<ContentProps>`
  ${({ theme, color, width }: ContentProps) => css`
    width: ${width}px;
    min-width: ${width}px;
    height: fit-content;

    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    background: ${theme.colors[color]};

    padding: ${theme.space[4]} ${theme.space[6]};

    flex: 1;
    gap: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 768px) {
      width: 100%;
      min-width: calc(50vw - 24px);
    }
  `}
`;

export const ContentTitle = styled(Text)`
  ${({ theme }: ThemeType) => css`
    span {
      font-weight: ${theme.fontWeights.medium};
      text-decoration: underline;

      margin-right: 6px;

      display: inline;
    }
  `}
`;
