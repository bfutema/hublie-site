import React from 'react';

import { Hero } from '@/components/molecules/Hero';

import { Container } from './styles';

interface HeroSectionProps {
  children?: React.ReactNode;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <Container>
      <Hero />
    </Container>
  );
};
