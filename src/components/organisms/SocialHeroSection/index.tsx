import React from 'react';

import image from '@/assets/images/Mask_group_4.png';
import { ButtonLink } from '@/components/atoms/ButtonLink';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import { Container, Title, ImageCard, Info, InfoText } from './styles';

interface SocialHeroSectionProps {
  children?: React.ReactNode;
}

export const SocialHeroSection: React.FC<SocialHeroSectionProps> = () => {
  return (
    <Container>
      <ContainerWrapper>
        <Title>
          Na Hublie, contribuímos todos os dias com a construção de uma
          sociedade mais justa, transparente e inclusiva
        </Title>

        <ButtonLink color="black" backgroundColor="white" href="/">
          ENCONTRE O CANDIDATO IDEAL
        </ButtonLink>

        <ImageCard style={{ backgroundImage: `url(${image.src})` }} />

        <Info>
          <InfoText color="white" size="xl" weight="regular" maxWidth="390px">
            Na Hublie, contribuímos todos os dias com a construção de uma
            sociedade mais justa, transparente e inclusiva
          </InfoText>
        </Info>
      </ContainerWrapper>
    </Container>
  );
};
