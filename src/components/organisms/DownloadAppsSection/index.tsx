import React from 'react';

import { DownloadAppsCard } from '@/components/molecules/DownloadAppsCard';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import { Container } from './styles';

interface DownloadAppsSectionProps {
  children?: React.ReactNode;
}

export const DownloadAppsSection: React.FC<DownloadAppsSectionProps> = () => {
  return (
    <Container>
      <ContainerWrapper>
        <DownloadAppsCard />
      </ContainerWrapper>
    </Container>
  );
};
