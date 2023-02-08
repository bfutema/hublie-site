import React from 'react';

import { ButtonLink } from '@/components/atoms/ButtonLink';
import { Text } from '@/components/atoms/Text';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import { Container, InfoCard, CardItem } from './styles';

interface WhatYouFindAtHublieProps {
  children?: React.ReactNode;
}

export const WhatYouFindAtHublie: React.FC<WhatYouFindAtHublieProps> = () => {
  return (
    <Container>
      <ContainerWrapper>
        <Text color="white" size="5xl">
          O que você vai encontrar na Hublie
        </Text>

        <InfoCard>
          <CardItem>
            <Text color="secondary500" size="7xl" weight="medium">
              <b>+</b>
              220
            </Text>

            <Text color="primary800" weight="minRegular" maxWidth="200px">
              Candidatos Qualificados
            </Text>
          </CardItem>

          <CardItem>
            <Text color="secondary500" size="7xl" weight="medium">
              <b>+</b>
              220
            </Text>

            <Text color="primary800" weight="minRegular" maxWidth="200px">
              Mil Recomendações
            </Text>
          </CardItem>

          <CardItem>
            <Text color="secondary500" size="7xl" weight="medium">
              <b>+</b>
              220
            </Text>

            <Text color="primary800" weight="minRegular" maxWidth="200px">
              Empresas contratando com a Hublie
            </Text>
          </CardItem>
        </InfoCard>

        <ButtonLink href="/">Fale com nossos expecialistas</ButtonLink>
      </ContainerWrapper>
    </Container>
  );
};
