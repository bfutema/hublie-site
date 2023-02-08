import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import facebook from '@/assets/icons/facebook.svg';
import instagram from '@/assets/icons/instagram.svg';
import linkedin from '@/assets/icons/linkedin.svg';
import twitter from '@/assets/icons/twitter.svg';
import youtube from '@/assets/icons/youtube.svg';
import { Logo } from '@/components/atoms/Logo';
import { Text } from '@/components/atoms/Text';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import { Container, Heading, Divider, Info, Logos } from './styles';

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
            <Logos>
              <Image src={facebook} alt="facebook" />
              <Image src={twitter} alt="twitter" />
              <Image src={linkedin} alt="linkedin" />
              <Image src={instagram} alt="instagram" />
              <Image src={youtube} alt="youtube" />
            </Logos>

            <Text color="white" size="xs" weight="minRegular">
              Hublie© 2022 Todos os direitos reservados.
            </Text>
          </div>

          <div>
            <Text color="white" size="lg" weight="minRegular" maxWidth="300px">
              Transformando o mercado de trabalho a partir da conexão entre
              pessoas e empresas de forma simples, humanizada e inteligente
            </Text>
          </div>
        </Info>
      </ContainerWrapper>
    </Container>
  );
};
