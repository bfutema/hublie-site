import React from 'react';

import { Text } from '@/components/atoms/Text';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import { Container, Title } from './styles';

interface HeroProps {
  children?: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <Container>
      <ContainerWrapper>
        <Title>
          <strong>Conectamos pessoas e empresas</strong>

          <p>
            de forma <br /> inteligente
          </p>
        </Title>

        <Text size="xl" weight="minRegular" maxWidth="568px">
          Para um mercado de trabalho mais transparente, inclusivo e humanizado.
        </Text>
      </ContainerWrapper>
    </Container>
  );
};
