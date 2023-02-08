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
        <ImageCard />

        <FreeCard>
          <Text color="primary800" size="5xl" weight="bold">
            Faça parte da maior comunidade de talentos e empresas do Brasil
          </Text>

          <ButtonLink backgroundColor="primary500" href="/">
            ACESSE NOSSA PLATAFORMA
          </ButtonLink>
        </FreeCard>
      </ContainerWrapper>
    </Container>
  );
};
