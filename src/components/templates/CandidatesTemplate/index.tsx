import React from 'react';

import { Footer } from '@/components/molecules/Footer';
import { Header } from '@/components/molecules/Header';
import { BestProfessionalsInHublie } from '@/components/organisms/BestProfessionalsInHublie';
import { CanidatesAllFreeSection } from '@/components/organisms/CandidatesAllFreeSection';
import { CandidatesHeroSection } from '@/components/organisms/CandidatesHeroSection';
import { FilterJobsSection } from '@/components/organisms/FilterJobsSection';
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
      <CanidatesAllFreeSection />
      <WhoIsPartOfHublieSection />
      <FilterJobsSection />
      <BestProfessionalsInHublie />
      <Footer />
    </Container>
  );
};
