import React from 'react';

import { ButtonLink } from '@/components/atoms/ButtonLink';
import { Logo } from '@/components/atoms/Logo';
import { Burger } from '@/components/atoms/Menu/Burger';
import { Text } from '@/components/atoms/Text';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import { Container } from './styles';

interface HeaderProps {
  children?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <Container>
      <ContainerWrapper>
        <Logo size="sm" />

        <Burger />

        <ButtonLink href="/" className="access-platform-button">
          <Text color="white" size="sm" weight="medium">
            Acesse a plataforma
          </Text>
        </ButtonLink>
      </ContainerWrapper>
    </Container>
  );
};
