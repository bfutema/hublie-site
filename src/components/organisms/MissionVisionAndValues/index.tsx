import React from 'react';

import image3 from '@/assets/images/business-people-hand-shake_1.png';
import image1 from '@/assets/images/Mask_group_1.png';
import image2 from '@/assets/images/Mask_group_2.png';
import { Text } from '@/components/atoms/Text';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import { Container, ImageCard, FreeCard, Section } from './styles';

interface MissionVisionAndValuesSectionProps {
  children?: React.ReactNode;
}

export const MissionVisionAndValuesSection: React.FC<
  MissionVisionAndValuesSectionProps
> = () => {
  return (
    <Container>
      <ContainerWrapper>
        <Section>
          <FreeCard>
            <Text color="pink500" size="5xl">
              Missão
            </Text>

            <Text color="neutralGray700" size="lg" weight="minRegular">
              Conectar pessoas e empresas de forma inteligente para um mercado
              de trabalho mais transparente, inclusivo e humanizado.
            </Text>
          </FreeCard>

          <ImageCard style={{ backgroundImage: `url(${image1.src})` }} />
        </Section>

        <Section>
          <FreeCard>
            <Text color="pink500" size="5xl">
              Visão
            </Text>

            <Text color="neutralGray700" size="lg" weight="minRegular">
              Ser a maior empresa de geração de emprego do mundo, inspirando
              pessoas e organizações para um mercado de trabalho mais
              colaborativo, transparente, inovador e humanizado.
            </Text>
          </FreeCard>

          <ImageCard
            style={{
              backgroundImage: `url(${image2.src})`,
              order: -1,
              marginRight: '-54px',
            }}
          />
        </Section>

        <Section>
          <FreeCard>
            <Text color="pink500" size="5xl">
              Valores
            </Text>

            <Text color="neutralGray700" size="lg" weight="minRegular">
              Integridade e humanização em primeiro lugar Inovação e
              criatividade para prosperar nos desafios do novo mundo Ética e
              Transparência inegociáveis Respeito para todos, dentro e fora da
              organização Excelência e paixão em tudo o que nos propomos
            </Text>
          </FreeCard>

          <ImageCard style={{ backgroundImage: `url(${image3.src})` }} />
        </Section>
      </ContainerWrapper>
    </Container>
  );
};
