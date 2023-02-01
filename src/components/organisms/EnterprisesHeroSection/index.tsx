import React from 'react';

import { ButtonLink } from '@/components/atoms/ButtonLink';
import { Text } from '@/components/atoms/Text';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import { Container, Title } from './styles';

interface EnterprisesHeroSectionProps {
  children?: React.ReactNode;
}

export const EnterprisesHeroSection: React.FC<
  EnterprisesHeroSectionProps
> = () => {
  return (
    <Container>
      <ContainerWrapper>
        <Title color="white">
          <strong>
            Acelere suas <br /> contratações com <br /> soluções inteligentes
          </strong>

          <p>
            de <br /> Recrutamento e Seleção <br /> Gratuitamente
          </p>
        </Title>

        <Text color="white" size="xl" weight="minRegular" maxWidth="568px">
          <p>
            Conectamos a sua empresa com os melhores talentos de forma rápida,
            simples e humanizada
          </p>
        </Text>

        <ButtonLink backgroundColor="primary900" href="/">
          ENCONTRE O CANDIDATO IDEAL
        </ButtonLink>
      </ContainerWrapper>
    </Container>
  );
};
