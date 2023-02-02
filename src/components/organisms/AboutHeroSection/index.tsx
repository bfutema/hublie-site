import React from 'react';

import image from '@/assets/images/about_hero.png';
import { ButtonLink } from '@/components/atoms/ButtonLink';
import { Text } from '@/components/atoms/Text';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import {
  Container,
  Title,
  Subtitle,
  ImageCard,
  Info,
  InfoText,
} from './styles';

interface AboutHeroSectionProps {
  children?: React.ReactNode;
}

export const AboutHeroSection: React.FC<AboutHeroSectionProps> = () => {
  return (
    <Container>
      <ContainerWrapper>
        <Title>
          Conectamos pessoas e empresas de forma <br />
          <strong> simples, humanizada e inteligente</strong>
        </Title>

        <Subtitle size="xl" weight="minRegular" maxWidth="1100px">
          Para criar experiências positivas para todo o ecossistema e estimular
          o crescimento das pessoas e das organizações envolvidas.
        </Subtitle>

        <ButtonLink backgroundColor="primary800" href="/">
          ENCONTRE O CANDIDATO IDEAL
        </ButtonLink>

        <ImageCard style={{ backgroundImage: `url(${image.src})` }} />

        <Info>
          <InfoText
            color="primary800"
            size="xl"
            weight="regular"
            maxWidth="390px"
          >
            Conectamos pessoas e empresas de forma{' '}
            <strong>simples, humanizada e inteligente</strong>
          </InfoText>

          <Text
            color="primary800"
            size="md"
            weight="minRegular"
            maxWidth="900px"
          >
            Para criar experiências positivas para todo o ecossistema e
            estimular o crescimento das pessoas e das organizações envolvidas.
          </Text>
        </Info>
      </ContainerWrapper>
    </Container>
  );
};
