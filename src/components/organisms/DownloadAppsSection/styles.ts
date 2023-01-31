import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 120px 148px;

    @media (max-width: 768px) {
      padding: ${theme.space[4]};
    }
  `}
`;
