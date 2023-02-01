import React from 'react';

import { ButtonLink } from '@/components/atoms/ButtonLink';
import { Card } from '@/components/atoms/Card';
import { Text } from '@/components/atoms/Text';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import { Container, ImageCard, FreeCard } from './styles';

interface RecruitersAllFreeSectionProps {
  children?: React.ReactNode;
}

export const RecruitersAllFreeSection: React.FC<
  RecruitersAllFreeSectionProps
> = () => {
  return (
    <Container>
      <ContainerWrapper>
        <FreeCard>
          <Text size="5xl">
            Tudo
            <strong>
              100% <br /> gratuito!
            </strong>
          </Text>

          <ButtonLink backgroundColor="primary500" href="/">
            FAÇA PARTE GRATUITAMENTE
          </ButtonLink>
        </FreeCard>

        <Card>
          <ImageCard />
        </Card>
      </ContainerWrapper>
    </Container>
  );
};
