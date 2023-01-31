import React from 'react';

import { Container } from './styles';

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};
