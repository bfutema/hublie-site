import styled, { css } from 'styled-components';

interface ContainerProps {
  isOpen?: boolean;
}

const responsive = {
  container: css`
    @media (max-width: 768px) {
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;
    }
  `,
};

export const Container = styled.div<ContainerProps>`
  svg {
    z-index: 2000;

    display: none;

    ${responsive.container}
  }
`;
