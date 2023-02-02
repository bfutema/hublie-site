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
        <FreeCard>
          <Text size="5xl">
            Vamos juntos construir um planeta mais inclusivo, transparente e
            humanizado!
          </Text>

          <ButtonLink backgroundColor="primary800" href="/">
            ACESSE NOSSA PLATAFORMA
          </ButtonLink>
        </FreeCard>

        <ImageCard />
      </ContainerWrapper>
    </Container>
  );
};
