import React from 'react';

import imageInfo1 from '@/assets/images/Group_82__1_.png';
import imageInfo2 from '@/assets/images/Group_83__1_.png';
import imageInfo3 from '@/assets/images/Group_84__1_.png';
import { Text } from '@/components/atoms/Text';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import { Container, ImageCard, Info, InfoItems, InfoItem } from './styles';

interface YourFeaturedProfileSectionProps {
  children?: React.ReactNode;
}

export const YourFeaturedProfileSection: React.FC<
  YourFeaturedProfileSectionProps
> = () => {
  return (
    <Container>
      <ContainerWrapper>
        <ImageCard />

        <Info>
          <Text color="primary800" size="5xl">
            Seu perfil<strong>em destaque</strong> para
            <br />
            <strong>milhares de recrutadores</strong>
          </Text>

          <Text color="neutralGray700" size="xl" weight="minRegular">
            Tudo em uma plataforma colaborativa, com base em suas expeciências,
            recomendações e desafios diários
          </Text>

          <InfoItems>
            <InfoItem>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  backgroundImage: `url(${imageInfo1.src})`,
                }}
              />

              <Text
                color="neutralGray700"
                size="xl"
                weight="minRegular"
                maxWidth="416px"
              >
                O match perfeito com empresas que têm tudo a ver com você
              </Text>
            </InfoItem>

            <InfoItem>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  backgroundImage: `url(${imageInfo2.src})`,
                }}
              />

              <Text
                color="neutralGray700"
                size="xl"
                weight="minRegular"
                maxWidth="416px"
              >
                Apareça no ranking entre os melhores profissionais da sua área
              </Text>
            </InfoItem>

            <InfoItem>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  backgroundImage: `url(${imageInfo3.src})`,
                }}
              />

              <Text
                color="neutralGray700"
                size="xl"
                weight="minRegular"
                maxWidth="416px"
              >
                Evolua na carreira, ganhe pontos e troque por prêmios exclusivos
              </Text>
            </InfoItem>
          </InfoItems>
        </Info>
      </ContainerWrapper>
    </Container>
  );
};
