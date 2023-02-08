import React from 'react';

import Image from 'next/image';

import bullish from '@/assets/images/Bullish.png';
import editBox2 from '@/assets/images/Edit-box2.png';
import messageBox from '@/assets/images/Message-box.png';
import { ButtonLink } from '@/components/atoms/ButtonLink';
import { Text } from '@/components/atoms/Text';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import { Container, GrayBackground, Title, Images, WhyCard } from './styles';

interface YourFeaturedEnterpriseSectionProps {
  children?: React.ReactNode;
}

export const YourFeaturedEnterpriseSection: React.FC<
  YourFeaturedEnterpriseSectionProps
> = () => {
  return (
    <Container>
      <ContainerWrapper>
        <Title color="primary800" size="4xl" maxWidth="700px">
          Sua <strong> empresa </strong> em destaque entre as{' '}
          <strong> melhores para se trabalhar </strong>
        </Title>

        <Text color="neutralGray700" size="lg" weight="minRegular">
          Com a Hublie, você encontra os talentos ideais para a sua empresa.
          Muito mais Transparência, Agilidade e Assertividade na Atração de
          Talentos
        </Text>

        <Images>
          <WhyCard>
            <Image src={bullish} alt="" width={60} height={60} />

            <Text color="primary800" weight="bold">
              <p>Ranking</p>
            </Text>

            <Text color="neutralGray700" size="sm" weight="regular">
              <p>
                Veja o ranking dos melhores profissionais do mercado por área de
                atuação e experiência
              </p>
            </Text>
          </WhyCard>

          <WhyCard>
            <Image src={messageBox} alt="" width={60} height={60} />

            <Text color="primary800" weight="bold">
              <p>Feedbacks</p>
            </Text>

            <Text color="neutralGray700" size="sm" weight="regular">
              <p>
                Acesse feedbacks e recomendações dos candidatos sob o ponto de
                vista de colegas e gestores
              </p>
            </Text>
          </WhyCard>

          <WhyCard>
            <Image src={editBox2} alt="" width={60} height={60} />

            <Text color="primary800" weight="bold">
              <p>Avaliação</p>
            </Text>

            <Text color="neutralGray700" size="sm" weight="regular">
              <p>
                Descubra a avaliação dos profissionais da área em comparação com
                candidatos de mesmo perfil
              </p>
            </Text>
          </WhyCard>
        </Images>

        <ButtonLink backgroundColor="primary800" href="/">
          Cadastre sua vaga gratuitamente
        </ButtonLink>
      </ContainerWrapper>

      <GrayBackground />
    </Container>
  );
};
