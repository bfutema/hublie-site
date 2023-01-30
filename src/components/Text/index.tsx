import React from 'react';

import { WheightType } from './types';

import { Container } from './styles';

interface TextProps {
  weight: WheightType;
  children?: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({ weight, children }) => {
  return <Container weight={weight}>{children}</Container>;
};
