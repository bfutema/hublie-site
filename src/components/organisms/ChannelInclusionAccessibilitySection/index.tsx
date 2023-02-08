import React from 'react';

import image1 from '@/assets/images/Mask_group_5.png';
import image2 from '@/assets/images/Mask_group_6.png';
import image3 from '@/assets/images/Mask_group_7.png';
import { Text } from '@/components/atoms/Text';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import { Container, ImageCard, FreeCard, Section } from './styles';

interface ChannelInclusionAccessibilitySectionProps {
  children?: React.ReactNode;
}

export const ChannelInclusionAccessibilitySection: React.FC<
  ChannelInclusionAccessibilitySectionProps
> = () => {
  return (
    <Container>
      <ContainerWrapper>
        <Section>
          <FreeCard>
            <Text color="green300" size="5xl">
              Canal de Denúncia e Proteção à Mulher
            </Text>

            <Text color="neutralGray700" size="md" weight="minRegular">
              Canal de Denúncia e Proteção à Mulher: entendemos que,
              infelizmente, ainda vivemos em um mundo desigual para as mulheres,
              e para combater o assédio e outros tipos de violência e garantir o
              respeito e a igualdade de gênero, desenvolvemos um canal de
              denúncias anônimas e auditoria para processos de proteção à mulher
              na Hublie e em nossas empresas parceiras.
            </Text>
          </FreeCard>

          <ImageCard style={{ backgroundImage: `url(${image1.src})` }} />
        </Section>

        <Section>
          <FreeCard>
            <Text color="green300" size="5xl">
              Inclusão Social
            </Text>

            <Text color="neutralGray700" size="md" weight="minRegular">
              Grupos minoritários vêm sofrendo injustiças sociais há séculos, e
              para gerar oportunidades para quem vive sob estigmas na sociedade,
              criamos grupos e ações dedicadas às comunidades LGBTQIAP+, negros,
              jovens de baixa renda, pessoas com deficiência e outros grupos
              minoritários.
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
            <Text color="green300" size="5xl">
              Acessibilidade
            </Text>

            <Text color="neutralGray700" size="md" weight="minRegular">
              Para garantir que todas as pessoas aproveitem todas as
              funcionalidades da Hublie, projetamos nossa plataforma de modo que
              todas as pessoas consigam entender, navegar e interagir com as
              páginas, incluindo tradução de todo o conteúdo em Libras.
            </Text>
          </FreeCard>

          <ImageCard style={{ backgroundImage: `url(${image3.src})` }} />
        </Section>
      </ContainerWrapper>
    </Container>
  );
};
