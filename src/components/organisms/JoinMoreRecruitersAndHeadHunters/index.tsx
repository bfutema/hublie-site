import React from 'react';

import image from '@/assets/images/Mask_group.png';
import { ButtonLink } from '@/components/atoms/ButtonLink';
import { Text } from '@/components/atoms/Text';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import { Container, CallToActionCard } from './styles';

interface JoinMoreRecruitersAndHeadHuntersProps {
  children?: React.ReactNode;
}

export const JoinMoreRecruitersAndHeadHunters: React.FC<
  JoinMoreRecruitersAndHeadHuntersProps
> = () => {
  return (
    <Container style={{ backgroundImage: `url(${image.src})` }}>
      <ContainerWrapper>
        <Text color="white" size="5xl">
          <p>
            Junte-se <strong> a mais de X recrutadores </strong> e{' '}
            <strong> HeadHunters </strong> de todo o Brasil
          </p>
        </Text>

        <CallToActionCard>
          <Text color="primary800" size="sm" weight="regular">
            Preencha o formulário e tenha <br /> acesso aos melhores candidatos
            <br /> agora mesmo
          </Text>

          <ButtonLink href="/">CADASTRE-SE GRATUITAMENTE</ButtonLink>
        </CallToActionCard>
      </ContainerWrapper>
    </Container>
  );
};
