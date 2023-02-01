import React, { useRef, useState } from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import { Text } from '@/components/atoms/Text';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import {
  Container,
  Title,
  Carousel,
  Navigation,
  NextButton,
  PrevButton,
  Images,
  WhyCard,
} from './styles';

interface HowItWorksProps {
  children?: React.ReactNode;
}

export const HowItWorks: React.FC<HowItWorksProps> = () => {
  const imagesRef = useRef<HTMLDivElement>(null);

  const [currentImage, setCurrentImage] = useState<number>(1);

  return (
    <Container>
      <ContainerWrapper>
        <Title color="white" size="4xl">
          Como funciona
        </Title>

        <Carousel>
          <Navigation>
            <NextButton
              type="button"
              onClick={() => {
                const left = (350 + 24) * currentImage;

                imagesRef.current?.scrollTo({ behavior: 'smooth', left });

                setCurrentImage((state) => state + 1);
              }}
            >
              <FiArrowRight size={32} />
            </NextButton>

            <PrevButton
              type="button"
              onClick={() => {
                imagesRef.current?.scrollTo({ behavior: 'smooth', left: 0 });

                setCurrentImage(1);
              }}
              disabled={currentImage === 1}
            >
              <FiArrowLeft size={32} />
            </PrevButton>
          </Navigation>

          <Images ref={imagesRef}>
            <WhyCard>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '99999px',
                  color: '#ffffff',
                  background: '#8662E7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                01
              </div>

              <Text size="sm" weight="regular">
                <p>Faça seu cadastro de Recrutador ou HeadHunter na Hublie</p>
              </Text>
            </WhyCard>

            <WhyCard>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '99999px',
                  color: '#ffffff',
                  background: '#8662E7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                02
              </div>

              <Text size="sm" weight="regular">
                <p>Indique candidatos para as vagas disponíveis</p>
              </Text>
            </WhyCard>

            <WhyCard>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '99999px',
                  color: '#ffffff',
                  background: '#8662E7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                03
              </div>

              <Text size="sm" weight="regular">
                <p>Acompanhe o andamento dos talentos indicados</p>
              </Text>
            </WhyCard>

            <WhyCard>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '99999px',
                  color: '#ffffff',
                  background: '#8662E7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                04
              </div>

              <Text size="sm" weight="regular">
                <p>
                  Seja recompensado com prêmios e moedas digitais para cada vaga
                  fechada
                </p>
              </Text>
            </WhyCard>
          </Images>
        </Carousel>
      </ContainerWrapper>
    </Container>
  );
};
