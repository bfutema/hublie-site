import React from 'react';

import { Footer } from '@/components/molecules/Footer';
import { Header } from '@/components/molecules/Header';
import { BuildInclusivePlanetTogether } from '@/components/organisms/BuildInclusivePlanetTogether';
import { ChannelInclusionAccessibilitySection } from '@/components/organisms/ChannelInclusionAccessibilitySection';
import { SocialHeroSection } from '@/components/organisms/SocialHeroSection';

import { Container } from './styles';

interface SocialTemplateProps {
  children?: React.ReactNode;
}

export const SocialTemplate: React.FC<SocialTemplateProps> = () => {
  return (
    <Container>
      <Header />
      <SocialHeroSection />
      <ChannelInclusionAccessibilitySection />
      <BuildInclusivePlanetTogether />
      <Footer />
    </Container>
  );
};
