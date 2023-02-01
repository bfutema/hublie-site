import React from 'react';

import { Footer } from '@/components/molecules/Footer';
import { Header } from '@/components/molecules/Header';
import { DownloadAppsSection } from '@/components/organisms/DownloadAppsSection';
import { HomeHeroSection } from '@/components/organisms/HomeHeroSection';
import { PlatformBenefitsSection } from '@/components/organisms/PlatformBenefitsSection';
import { WhoIsPartOfHublieSection } from '@/components/organisms/WhoIsPartOfHublieSection';

import { Container } from './styles';

interface HomeTemplateProps {
  children?: React.ReactNode;
}

export const HomeTemplate: React.FC<HomeTemplateProps> = () => {
  return (
    <Container>
      <Header />
      <HomeHeroSection />
      <DownloadAppsSection />
      <PlatformBenefitsSection />
      <WhoIsPartOfHublieSection />
      <Footer />
    </Container>
  );
};
