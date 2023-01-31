import React from 'react';
import { ImAppleinc, ImGoogle } from 'react-icons/im';

import imageMobile1 from '@/assets/images/image-mobile-1.png';
import { ButtonStore } from '@/components/atoms/ButtonStore';
import { Text } from '@/components/atoms/Text';

import { Container, ContentWrapper, Buttons, Title, Image } from './styles';

interface DownloadAppsCardProps {
  children?: React.ReactNode;
}

export const DownloadAppsCard: React.FC<DownloadAppsCardProps> = () => {
  return (
    <Container>
      <ContentWrapper>
        <Title color="white" size="xl">
          <h3>
            Baixe o app da <strong>Hublie grátis</strong>
          </h3>
        </Title>

        <Title color="white" size="sm" weight="minRegular">
          Facilite sua jornada na busca por emprego e não perca nenhuma
          oportunidade de trabalho.
        </Title>

        <Buttons>
          <ButtonStore href="/">
            <ImGoogle size={13} />

            <Text size="sm">GOOGLE PLAY</Text>
          </ButtonStore>

          <ButtonStore href="/">
            <ImAppleinc size={13} />

            <Text size="sm">APPLE STORE</Text>
          </ButtonStore>
        </Buttons>
      </ContentWrapper>

      <Image src={imageMobile1} alt="" />
    </Container>
  );
};
