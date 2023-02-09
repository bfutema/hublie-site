import styled, { css } from 'styled-components';

import { Text } from '@/components/atoms/Text';
import { ThemeType } from '@/interfaces/Theme';

export const Container = styled.div`
  ${({ theme }: ThemeType) => css`
    background: ${theme.colors.primary800};

    padding: ${theme.space[16]} ${theme.space[2]};

    gap: ${theme.space[10]};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Heading = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    > ul {
      gap: ${theme.space[6]};
      display: flex;

      li,
      button {
        border: none;
        background: none;

        color: ${theme.colors.white};
        font-size: ${theme.fontSizes.sm};

        transition: all 0.2s;

        &:hover {
          a,
          button {
            color: ${theme.colors.secondary500};
            text-decoration: underline;
          }
        }

        a {
          /* color: ${theme.colors.secondary500}; */
          color: ${theme.colors.white};
          text-decoration: none;
        }
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;

      ul {
        margin-top: 16px;

        gap: 6px;
        flex-direction: column;
      }
    }
  `}
`;

export const Divider = styled.div`
  ${({ theme }: ThemeType) => css`
    width: 100%;
    height: 2px;

    background: ${theme.colors.white};
  `}
`;

export const Info = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;

    justify-content: space-between;
  }

  @media (max-width: 768px) {
    margin-bottom: 64px;

    gap: 40px;
    flex-direction: column;
    align-items: flex-start;

    div div {
      max-width: 100%;
    }

    > div:nth-child(1) {
      gap: 16px;
    }
  }
`;

export const Logos = styled.div`
  gap: 16px;
  display: flex;

  img {
    cursor: pointer;

    transition: all 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const TermsOfUseModalContent = styled.div`
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

export const TermsOfUseTitle = styled(Text)`
  ${({ theme }: ThemeType) => css`
    margin-bottom: ${theme.space[4]};
  `}
`;

export const TermsOfUseSubtitle = styled(Text)`
  ${({ theme }: ThemeType) => css`
    margin-bottom: ${theme.space[4]};
  `}
`;

export const TermsOfUseSectionItem = styled(Text)`
  ${({ theme }: ThemeType) => css`
    padding-left: ${theme.space[8]};

    b {
      font-weight: ${theme.fontWeights.bold};
    }

    u {
      color: ${theme.colors.primary500};
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

    @media (max-width: 768px) {
      padding-left: ${theme.space[4]};

      p {
        padding-left: ${theme.space[2]};
      }
    }
  `}
`;
