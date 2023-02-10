import React from 'react';

import {
  BannerDesktop,
  BannerMobile,
} from '@/components/atoms/GIFs/BannerDesktop';
import { Text } from '@/components/atoms/Text';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import { Container, HeroWrapper, Left, Right, Title } from './styles';

interface HomeHeroSectionProps {
  children?: React.ReactNode;
}

export const HomeHeroSection: React.FC<HomeHeroSectionProps> = () => {
  return (
    <Container>
      <ContainerWrapper>
        <HeroWrapper>
          <Left>
            <Title>
              <strong>Conectamos pessoas e empresas</strong>

              <p>
                de forma <br /> inteligente
              </p>
            </Title>

            <Text size="xl" weight="minRegular" maxWidth="568px">
              <p>
                Para um mercado de trabalho mais transparente, inclusivo e
                humanizado.
              </p>
            </Text>
          </Left>

          <Right>
            <BannerDesktop className="banner-desktop" />

            <BannerMobile className="banner-mobile" />
          </Right>
        </HeroWrapper>
      </ContainerWrapper>
    </Container>
  );
};
