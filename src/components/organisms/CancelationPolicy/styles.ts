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
    margin-bottom: ${theme.space[4]};
  `}
`;

export const SectionItem = styled(Text)`
  ${({ theme }: ThemeType) => css`
    padding-left: ${theme.space[8]};

    b {
      font-weight: ${theme.fontWeights.bold};
    }

    u {
      color: ${theme.colors.neutralGray700};
    }

    i {
      color: ${theme.colors.neutralGray700};
    }

    ins {
      color: ${theme.colors.primary500};
      text-decoration: none;
    }

    h2 {
      padding-bottom: ${theme.space[2]};

      font-weight: ${theme.fontWeights.bold};

      span {
        font-weight: ${theme.fontWeights.bold};

        margin-left: 16px;

        display: inline-block;
      }
    }

    p {
      padding-left: ${theme.space[16]};

      text-align: justify;

      & + p {
        margin-top: ${theme.space[4]};
      }

      span {
        margin-right: 16px;

        display: inline-block;
      }
    }
  `}
`;
