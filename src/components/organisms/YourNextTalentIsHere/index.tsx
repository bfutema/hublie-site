import React from 'react';

import image from '@/assets/images/young-smiley-businesswomen-working-with-laptop-desk_1.png';
import { ButtonLink } from '@/components/atoms/ButtonLink';
import { Text } from '@/components/atoms/Text';

import { Container, CallToActionCard } from './styles';

interface YoutTalentIsHereProps {
  children?: React.ReactNode;
}

export const YoutTalentIsHere: React.FC<YoutTalentIsHereProps> = () => {
  return (
    <Container style={{ backgroundImage: `url(${image.src})` }}>
      <Text color="white" size="5xl">
        Seu <strong> próximo talento </strong> está aqui!
      </Text>

      <CallToActionCard>
        <Text color="primary800" size="sm" weight="regular">
          Preencha o formulário e tenha <br /> acesso aos melhores candidatos
          <br /> agora mesmo
        </Text>

        <ButtonLink href="/">ACESSE A HUBLIE GRATUITAMENTE</ButtonLink>
      </CallToActionCard>
    </Container>
  );
};
