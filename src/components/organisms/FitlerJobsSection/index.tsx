import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

import { v4 } from 'uuid';

import { Text } from '@/components/atoms/Text';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import {
  Container,
  Title,
  Jobs,
  JobCard,
  JobCardButton,
  CustomButton,
} from './styles';

interface FitlerJobsSectionProps {
  children?: React.ReactNode;
}

export const FitlerJobsSection: React.FC<FitlerJobsSectionProps> = () => {
  return (
    <Container>
      <ContainerWrapper>
        <Title size="4xl">
          Confira <strong> algumas das vagas </strong> <br /> que estão
          esperendo por você
        </Title>

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
