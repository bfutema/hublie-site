import React, { useRef, useState } from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import Image from 'next/image';

import addUser from '@/assets/images/Add-user_pink.png';
import shop2 from '@/assets/images/Shop-2.png';
import { Text } from '@/components/atoms/Text';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import {
  Container,
  Carousel,
  Navigation,
  NextButton,
  PrevButton,
  Images,
  WhyCard,
} from './styles';

interface AboutWhoSectionProps {
  children?: React.ReactNode;
}

export const AboutWhoSection: React.FC<AboutWhoSectionProps> = () => {
  const imagesRef = useRef<HTMLDivElement>(null);

  const [currentImage, setCurrentImage] = useState<number>(1);

  return (
    <Container>
      <ContainerWrapper>
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
              <Image src={addUser} alt="" width={60} height={60} />

              <Text weight="bold">
                <p>Para Candidatos</p>
              </Text>

              <Text>
                <p>
                  Impulsionamos a carreira de talentos de diversas áreas para a
                  construção de verdadeiras oportunidades de desenvolvimento
                  profissional
                </p>
              </Text>
            </WhyCard>

            <WhyCard>
              <Image src={shop2} alt="" width={60} height={60} />

              <Text weight="bold">
                <p>Para Empresas</p>
              </Text>

              <Text>
                <p>
                  Encontramos os candidatos ideais para a sua empresa,
                  acelerando os processos de Recrutamento e Seleção e
                  facilitando o dia a dia das equipes de RH.
                </p>
              </Text>
            </WhyCard>
          </Images>
        </Carousel>
      </ContainerWrapper>
    </Container>
  );
};
