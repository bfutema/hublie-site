import React from 'react';

import { Footer } from '@/components/molecules/Footer';
import { Header } from '@/components/molecules/Header';
import { AllFreeSection } from '@/components/organisms/AllFreeSection';
import { BestProfessionalsInHublie } from '@/components/organisms/BestProfessionalsInHublie';
import { CandidatesHeroSection } from '@/components/organisms/CandidatesHeroSection';
import { FitlerJobsSection } from '@/components/organisms/FitlerJobsSection';
import { WhoIsPartOfHublieSection } from '@/components/organisms/WhoIsPartOfHublieSection';
import { WhyBePartOfHublieSection } from '@/components/organisms/WhyBePartOfHublieSection';
import { YourFeaturedProfileSection } from '@/components/organisms/YourFeaturedProfile';

import { Container } from './styles';

interface CandidatesTemplateProps {
  children?: React.ReactNode;
}

export const CandidatesTemplate: React.FC<CandidatesTemplateProps> = () => {
  return (
    <Container>
      <Header />
      <CandidatesHeroSection />
      <YourFeaturedProfileSection />
      <WhyBePartOfHublieSection />
      <AllFreeSection />
      <WhoIsPartOfHublieSection />
      <FitlerJobsSection />
      <BestProfessionalsInHublie />
      <Footer />
    </Container>
  );
};
