import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

import { v4 } from 'uuid';

import { ButtonGroup } from '@/components/atoms/ButtonGroup';
import { Text } from '@/components/atoms/Text';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import {
  Container,
  Title,
  Jobs,
  JobCard,
  JobCardButton,
  CustomButton,
  ButtonsWrapper,
} from './styles';

interface FilterJobsSectionProps {
  children?: React.ReactNode;
}

export const FilterJobsSection: React.FC<FilterJobsSectionProps> = () => {
  const buttons = [
    { name: 'Popular', onClick: () => null },
    { name: 'Cidades', onClick: () => null },
    { name: 'Cargos', onClick: () => null },
    { name: 'Informações Salariais', onClick: () => null },
  ];

  return (
    <Container>
      <ContainerWrapper>
        <Title size="4xl">
          Confira <strong> algumas das vagas </strong> <br /> que estão
          esperendo por você
        </Title>

        <ButtonsWrapper>
          <ButtonGroup buttons={buttons} />
        </ButtonsWrapper>

        <Jobs>
          {Array.from({ length: 4 * 4 }).map(() => {
            return (
              <JobCard key={v4()}>
                <Text color="primary800">Vagas de enfermagem</Text>

                <JobCardButton type="button">
                  <BsArrowRight size={18} />
                </JobCardButton>
              </JobCard>
            );
          })}
        </Jobs>

        <CustomButton href="/">ver mais</CustomButton>
      </ContainerWrapper>
    </Container>
  );
};
