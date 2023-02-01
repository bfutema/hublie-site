import React from 'react';

import { Footer } from '@/components/molecules/Footer';
import { Header } from '@/components/molecules/Header';
import { CompaniesAlreadyPartOfHublie } from '@/components/organisms/CompaniesAlreadyPartOfHublie';
import { EnterprisesHeroSection } from '@/components/organisms/EnterprisesHeroSection';
import { SolutionsForYourCompany } from '@/components/organisms/SolutionsForYourCompany';
import { WhatYouFindAtHublie } from '@/components/organisms/WhatYouFindAtHublie';
import { YourFeaturedEnterpriseSection } from '@/components/organisms/YourFeaturedEnterprise';
import { YoutTalentIsHere } from '@/components/organisms/YourNextTalentIsHere';

import { Container } from './styles';

interface EnterprisesTemplateProps {
  children?: React.ReactNode;
}

export const EnterprisesTemplate: React.FC<EnterprisesTemplateProps> = () => {
  return (
    <Container>
      <Header />
      <EnterprisesHeroSection />
      <YourFeaturedEnterpriseSection />
      <SolutionsForYourCompany />
      <WhatYouFindAtHublie />
      <CompaniesAlreadyPartOfHublie />
      <YoutTalentIsHere />
      <Footer />
    </Container>
  );
};
