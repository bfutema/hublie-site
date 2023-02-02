import React from 'react';

import image from '@/assets/images/teamwork-meeting-with-business-people_4__3_.png';
import { ButtonLink } from '@/components/atoms/ButtonLink';
import { Text } from '@/components/atoms/Text';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import { Container, CallToActionCard } from './styles';

interface BestProfessionalsInHublieProps {
  children?: React.ReactNode;
}

export const BestProfessionalsInHublie: React.FC<
  BestProfessionalsInHublieProps
> = () => {
  return (
    <Container style={{ backgroundImage: `url(${image.src})` }}>
      <ContainerWrapper>
        <Text color="white" size="5xl">
          Os <strong> melhores profissionais </strong> estão na <br /> Hublie!
        </Text>

        <CallToActionCard>
          <Text color="primary800" size="sm" weight="regular">
            Faça seu cadastro e acesse <br className="br" /> a plataforma agora
            mesmo
          </Text>

          <ButtonLink href="/">ACESSE O HUBLIE</ButtonLink>
        </CallToActionCard>
      </ContainerWrapper>
    </Container>
  );
};
