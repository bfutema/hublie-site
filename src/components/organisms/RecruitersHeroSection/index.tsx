import React from 'react';

import { ButtonLink } from '@/components/atoms/ButtonLink';
import {
  BannerDesktop,
  BannerMobile,
} from '@/components/atoms/GIFs/BannerDesktop';
import { Text } from '@/components/atoms/Text';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import { Container, HeroWrapper, Left, Right, Title } from './styles';

interface RecruitersHeroSectionProps {
  children?: React.ReactNode;
}

export const RecruitersHeroSection: React.FC<
  RecruitersHeroSectionProps
> = () => {
  return (
    <Container>
      <ContainerWrapper>
        <HeroWrapper>
          <Left>
            <Title color="white">
              <strong>
                Faça parte da maior <br /> comunidade de <br /> Recrutadores e{' '}
                <br /> HeadHunters
              </strong>

              <p>do Brasil</p>
            </Title>

            <Text
              color="white"
              size="xl"
              weight="minRegular"
              maxWidth="568px"
              className="enterprises-hero-section-text"
            >
              <p>
                Ajude empresas a encontrarem o talento ideal e receba bônus
                exclusivos!
              </p>
            </Text>

            <ButtonLink backgroundColor="primary500" href="/">
              CADASTRE-SE GRATUITAMENTE
            </ButtonLink>
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
