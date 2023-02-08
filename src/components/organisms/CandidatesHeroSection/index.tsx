import React from 'react';

import { ButtonLink } from '@/components/atoms/ButtonLink';
import { Text } from '@/components/atoms/Text';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import { Container, Title } from './styles';

interface CandidatesHeroSectionProps {
  children?: React.ReactNode;
}

export const CandidatesHeroSection: React.FC<
  CandidatesHeroSectionProps
> = () => {
  return (
    <Container>
      <ContainerWrapper>
        <Title color="white">
          <strong>
            Encontre a vaga ideal <br /> para você
          </strong>

          <p>
            na maior <br /> comunidade de talentos <br /> do Brasil
          </p>
        </Title>

        <Text color="white" size="xl" weight="minRegular" maxWidth="568px">
          <p>
            Conectamos você com as melhores empresas de forma rápida, simples e
            inteligente
          </p>
        </Text>

        <ButtonLink href="/">Faça parte gratuitamente</ButtonLink>
      </ContainerWrapper>
    </Container>
  );
};
