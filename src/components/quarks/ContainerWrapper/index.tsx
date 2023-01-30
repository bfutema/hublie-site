import React from 'react';

import { Container } from './styles';

interface ContainerWrapperProps {
  children?: React.ReactNode;
}

export const ContainerWrapper: React.FC<ContainerWrapperProps> = ({
  children,
}) => {
  return <Container>{children}</Container>;
};
