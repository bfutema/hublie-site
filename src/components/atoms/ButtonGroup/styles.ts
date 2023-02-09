import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    border-radius: ${theme.radii.full};
    overflow: hidden;
    border: 1.5px solid #eceff2;

    @media (max-width: 500px) {
      max-width: 70vw;
      overflow-x: scroll;
      overflow-y: hidden;

      &::-webkit-scrollbar {
        height: 0px;
      }
    }
  `}
`;

interface ButtonProps {
  isSelected?: boolean;
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, isSelected = false }) => css`
    background-color: ${isSelected ? '#ff7300' : 'transparent'};
    color: ${isSelected ? theme.colors.white : theme.colors.primary800};

    border: none;
    border-radius: ${theme.radii.full};

    font-size: 14px;
    line-height: 24px;
    font-weight: ${theme.fontWeights.medium};

    padding: 12px 36px;
    white-space: nowrap;

    cursor: pointer;

    @media (max-width: 500px) {
      padding: 8px 24px;
    }
  `}
`;
