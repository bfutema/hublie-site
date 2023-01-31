import React from 'react';

import Link from 'next/link';

import { Logo } from '@/components/atoms/Logo';
import { Text } from '@/components/atoms/Text';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import { Container, Heading, Divider, Info } from './styles';

interface FooterProps {
  children?: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <Container>
      <ContainerWrapper>
        <Heading>
          <Logo color="white" size="sm" />

          <ul>
            <li>
              <Link href="/">Candidatos</Link>
            </li>

            <li>
              <Link href="/">Empresas</Link>
            </li>

            <li>
              <Link href="/">Recrutadores</Link>
            </li>

            <li>
              <Link href="/">Sobre a Hublie</Link>
            </li>

            <li>
              <Link href="/">Social</Link>
            </li>

            <li>
              <Link href="/">Blog</Link>
            </li>
          </ul>
        </Heading>

        <Divider />

        <Info>
          <div>
            <Text color="white" size="sm" weight="minRegular">
              Hublie© 2022 Todos os direitos reservados.
            </Text>
          </div>

          <div>
            <Text color="white" size="md" weight="minRegular" maxWidth="300px">
              Transformando o mercado de trabalho a partir da conexão entre
              pessoas e empresas de forma simples, humanizada e inteligente
            </Text>
          </div>
        </Info>
      </ContainerWrapper>
    </Container>
  );
};
