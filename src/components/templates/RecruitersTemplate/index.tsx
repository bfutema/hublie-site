import React from 'react';

import { Footer } from '@/components/molecules/Footer';
import { Header } from '@/components/molecules/Header';
import { HowItWorks } from '@/components/organisms/HowItWorks';
import { JoinMoreRecruitersAndHeadHunters } from '@/components/organisms/JoinMoreRecruitersAndHeadHunters';
import { RecruitersAllFreeSection } from '@/components/organisms/RecruitersAllFreeSection';
import { RecruitersHeroSection } from '@/components/organisms/RecruitersHeroSection';
import { RecruitersPresentationSection } from '@/components/organisms/RecruitersPresentationSection';

import { Container } from './styles';

interface RecruitersTemplateProps {
  children?: React.ReactNode;
}

export const RecruitersTemplate: React.FC<RecruitersTemplateProps> = () => {
  return (
    <Container>
      <Header />
      <RecruitersHeroSection />
      <RecruitersPresentationSection />
      <HowItWorks />
      <RecruitersAllFreeSection />
      <JoinMoreRecruitersAndHeadHunters />
      <Footer />
    </Container>
  );
};
