import React from 'react';

import { ButtonLink } from '@/components/atoms/ButtonLink';
import { Text } from '@/components/atoms/Text';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import { Container, ImageCard, FreeCard } from './styles';

interface BePartOfItSectionProps {
  children?: React.ReactNode;
}

export const BePartOfItSection: React.FC<BePartOfItSectionProps> = () => {
  return (
    <Container>
      <ContainerWrapper>
        <FreeCard>
          <Text size="5xl">
            Faça parte da maior comunidade de talentos e empresas do Brasil
          </Text>

          <ButtonLink backgroundColor="primary500" href="/">
            ACESSE NOSSA PLATAFORMA
          </ButtonLink>
        </FreeCard>

        <ImageCard />
      </ContainerWrapper>
    </Container>
  );
};
