import React from 'react';

import { Poppins } from '@next/font/google';

import { SizeType, WeightType } from './types';

import { Container } from './styles';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

interface TextProps {
  size?: SizeType;
  weight?: WeightType;
  maxWidth?: string;
  children?: React.ReactNode;
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  size = 'md',
  weight = 'medium',
  maxWidth,
  children,
  className,
}) => {
  return (
    <Container
      size={size}
      weight={weight}
      maxWidth={maxWidth}
      className={`${poppins.className} ${className}`}
    >
      {children}
    </Container>
  );
};
