import React from 'react';

import icon2 from '@/assets/images/Archive.png';
import icon4 from '@/assets/images/Fingerprint.png';
import icon3 from '@/assets/images/Gem.png';
import icon1 from '@/assets/images/Normal-speed.png';
import { ButtonLink } from '@/components/atoms/ButtonLink';
import { Text } from '@/components/atoms/Text';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import {
  Container,
  Title,
  RecruiterBenefitCards,
  RecruiterBenefitCard,
  CardIcon,
  CardInfo,
} from './styles';

interface RecruitersPresentationSectionProps {
  children?: React.ReactNode;
}

export const RecruitersPresentationSection: React.FC<
  RecruitersPresentationSectionProps
> = () => {
  return (
    <Container>
      <ContainerWrapper>
        <Title size="4xl" maxWidth="980px">
          Na Hublie, você
          <strong> aumenta sua renda indicando candidatos </strong> para as
          melhores empresas do país: tudo de forma rápida,{' '}
          <strong>100% digital e sem burocracia</strong>
        </Title>

        <RecruiterBenefitCards>
          <RecruiterBenefitCard>
            <CardIcon style={{ backgroundImage: `url(${icon1.src})` }} />

            <CardInfo>
              <Text weight="bold">Renda Extra</Text>

              <Text size="sm" weight="minRegular">
                Ganhe moedas digitais para cada candidato qualificado que você
                indicar
              </Text>
            </CardInfo>
          </RecruiterBenefitCard>

          <RecruiterBenefitCard>
            <CardIcon style={{ backgroundImage: `url(${icon2.src})` }} />

            <CardInfo>
              <Text weight="bold">100% Online</Text>

              <Text size="sm" weight="minRegular">
                Acesse nossa plataforma e indique talentos de qualquer lugar do
                mundo
              </Text>
            </CardInfo>
          </RecruiterBenefitCard>

          <RecruiterBenefitCard>
            <CardIcon style={{ backgroundImage: `url(${icon3.src})` }} />

            <CardInfo>
              <Text weight="bold">Plataforms de Gestão</Text>

              <Text size="sm" weight="minRegular">
                Sua plataforma de gestão de vagas e armazenamento de CV de forma
                gratuita e seu para sempre
              </Text>
            </CardInfo>
          </RecruiterBenefitCard>

          <RecruiterBenefitCard>
            <CardIcon style={{ backgroundImage: `url(${icon4.src})` }} />

            <CardInfo>
              <Text weight="bold">Assinatura Digital</Text>

              <Text size="sm" weight="minRegular">
                Gerencie a cobrança dos seus clientes, com assinatura digital,
                meio de pagamento, cobrança e perfil profissional
              </Text>
            </CardInfo>
          </RecruiterBenefitCard>
        </RecruiterBenefitCards>

        <ButtonLink href="/" backgroundColor="primary500">
          CADASTRE SUA VAGA GRATUITAMENTE
        </ButtonLink>
      </ContainerWrapper>
    </Container>
  );
};
