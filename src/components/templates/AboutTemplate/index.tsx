import React from 'react';

import { Footer } from '@/components/molecules/Footer';
import { Header } from '@/components/molecules/Header';
import { AboutHeroSection } from '@/components/organisms/AboutHeroSection';
import { AboutWhoSection } from '@/components/organisms/AboutWhoSection';
import { BePartOfItSection } from '@/components/organisms/BePartOfItSection';
import { MissionVisionAndValuesSection } from '@/components/organisms/MissionVisionAndValues';

import { Container } from './styles';

interface AboutTemplateProps {
  children?: React.ReactNode;
}

export const AboutTemplate: React.FC<AboutTemplateProps> = () => {
  return (
    <Container>
      <Header />
      <AboutHeroSection />
      <AboutWhoSection />
      <MissionVisionAndValuesSection />
      <BePartOfItSection />
      <Footer />
    </Container>
  );
};
