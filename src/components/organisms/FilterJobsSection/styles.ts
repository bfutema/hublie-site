import styled, { css } from 'styled-components';

import { ButtonLink } from '@/components/atoms/ButtonLink';
import { Text } from '@/components/atoms/Text';
import { ThemeType } from '@/interfaces/Theme';

export const Container = styled.div`
  ${({ theme }: ThemeType) => css`
    padding: ${theme.space[20]} 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
      gap: ${theme.space[16]};
    }
  `}
`;

export const Title = styled(Text)`
  ${({ theme }: ThemeType) => css`
    text-align: center;

    margin: 0 auto;

    strong {
      color: ${theme.colors.secondary500};
      line-height: ${theme.lineHeights.base};
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      font-size: ${theme.fontSizes['2xl']};

      strong {
        font-size: ${theme.fontSizes['2xl']};
        font-weight: ${theme.fontWeights.bold};
      }
    }
  `}
`;

export const ButtonsWrapper = styled.div`
  ${({ theme }: ThemeType) => css`
    margin-top: ${theme.space[20]};

    @media (max-width: 768px) {
      margin-top: 0;
    }
  `}
`;

export const Jobs = styled.div`
  ${({ theme }: ThemeType) => css`
    width: fit-content;

    margin: 0 auto;
    padding: ${theme.space[20]};

    justify-content: center;
    gap: ${theme.space[4]};
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 768px) {
      padding: ${theme.space[3]};

      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
      max-height: 500px;

      overflow-x: hidden;
      overflow-y: scroll;

      grid-template-columns: 1fr;
    }
  `}
`;

export const JobCard = styled.div`
  ${({ theme }: ThemeType) => css`
    width: 220px;

    border-radius: ${theme.radii.md};
    background: ${theme.colors.white};
    box-shadow: 0 4px 12px rgba(12, 68, 204, 0.1);

    padding: ${theme.space[4]};

    display: flex;
    align-items: center;

    &:hover {
      box-shadow: 0 8px 12px rgba(12, 68, 204, 0.1);

      cursor: pointer;
    }
  `}
`;

export const JobCardButton = styled.button`
  ${({ theme }: ThemeType) => css`
    width: 32px;
    min-width: 32px;
    max-width: 32px;
    height: 32px;
    min-height: 32px;
    max-height: 32px;

    border: 1px solid ${theme.colors.secondary500};
    border-radius: ${theme.radii.full};
    background: ${theme.colors.secondary500};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.2s;

    svg path {
      fill: ${theme.colors.white};
    }

    &:hover {
      filter: brightness(1.1);
    }
  `}
`;

export const CustomButton = styled(ButtonLink)`
  ${({ theme }: ThemeType) => css`
    box-shadow: 0 8px 12px rgba(255, 115, 0, 0.18);

    padding: ${theme.space[2]} ${theme.space[20]};

    transition: all 0.2s;

    &:hover {
      filter: brightness(1.1);
    }

    a {
      font-size: ${theme.fontSizes.sm};
      font-weight: ${theme.fontWeights.bold};
      text-decoration: none;
    }
  `}
`;
