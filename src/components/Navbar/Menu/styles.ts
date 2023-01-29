import styled, { css } from "styled-components";

interface ContainerProps {
  isOpen?: boolean;
}


export const Container = styled.ul<ContainerProps>`  
  ${({ isOpen }) => css`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
      padding: 18px 10px;
    }
    
    @media (max-width: 768px) {
      height: 100vh;
      width: 100vw;
      
      flex-flow: column nowrap;
      
      padding-top: 3.5rem;
      
      background-color: #0D2538;
      
      position: fixed;
      top: 0;
      right: 0;

      transform: ${isOpen ? 'translateX(0)' : 'translateX(100%)'};
      
      transition: transform 0.3s ease-in-out;
      

      li {
        color: #fff;
      }
    }
  `}
`;