import React from 'react';

import { ButtonLink } from '@/components/atoms/ButtonLink';
import { Card } from '@/components/atoms/Card';
import { Text } from '@/components/atoms/Text';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import { Container, ImageCard, FreeCard } from './styles';

interface CanidatesAllFreeSectionProps {
  children?: React.ReactNode;
}

export const CanidatesAllFreeSection: React.FC<
  CanidatesAllFreeSectionProps
> = () => {
  return (
    <Container>
      <ContainerWrapper>
        <FreeCard>
          <Text color="primary800" size="5xl">
            Tudo
            <strong>
              100% <br /> gratuito!
            </strong>
          </Text>

          <ButtonLink href="/">ACESSE O HUBLIE AGORA</ButtonLink>
        </FreeCard>

        <Card>
          <ImageCard />
        </Card>
      </ContainerWrapper>
    </Container>
  );
};
