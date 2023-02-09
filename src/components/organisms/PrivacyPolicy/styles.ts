import styled, { css } from 'styled-components';

import { Text } from '@/components/atoms/Text';
import { ThemeType } from '@/interfaces/Theme';

export const Container = styled.div`
  ${({ theme }: ThemeType) => css`
    max-width: 80vw;
    max-height: 80vh;

    padding-right: ${theme.space[4]};

    gap: ${theme.space[4]};
    display: flex;
    flex-direction: column;

    overflow-x: hidden;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 4px;

      border-radius: ${theme.radii.full};
      background: ${theme.colors.black};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: ${theme.radii.full};
      background: ${theme.colors.primary500};
    }

    &::-webkit-scrollbar-track {
      border-radius: ${theme.radii.full};
      background: ${theme.colors.neutralGray300};
    }
  `}
`;

export const Title = styled(Text)`
  ${({ theme }: ThemeType) => css`
    margin-bottom: ${theme.space[4]};
  `}
`;

export const Subtitle = styled(Text)`
  ${({ theme }: ThemeType) => css`
    text-align: center;

    margin: 0 auto ${theme.space[4]} auto;
  `}
`;

export const SectionItem = styled(Text)`
  ${({ theme }: ThemeType) => css`
    & + div {
      margin-top: ${theme.space[6]};
    }

    ins {
      color: ${theme.colors.primary500};
      text-decoration: none;
    }

    h2 {
      font-size: ${theme.fontSizes['2xl']};
      font-weight: normal;

      display: inline;
    }

    p {
      font-size: ${theme.fontSizes.sm};

      display: inline;
    }

    div {
      padding: ${theme.space[4]} ${theme.space[8]};
    }
  `}
`;
