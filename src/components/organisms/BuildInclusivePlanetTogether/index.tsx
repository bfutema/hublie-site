import React from 'react';

import { ButtonLink } from '@/components/atoms/ButtonLink';
import { Text } from '@/components/atoms/Text';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import { Container, ImageCard, FreeCard } from './styles';

interface BuildInclusivePlanetTogetherProps {
  children?: React.ReactNode;
}

export const BuildInclusivePlanetTogether: React.FC<
  BuildInclusivePlanetTogetherProps
> = () => {
  return (
    <Container>
      <ContainerWrapper>
        <ImageCard />

        <FreeCard>
          <Text color="primary800" size="5xl">
            Vamos juntos construir um planeta mais inclusivo, transparente e
            humanizado!
          </Text>

          <ButtonLink backgroundColor="primary500" href="/">
            ACESSE NOSSA PLATAFORMA
          </ButtonLink>
        </FreeCard>
      </ContainerWrapper>
    </Container>
  );
};
