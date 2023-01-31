import React, { useRef, useState } from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import image4 from '@/assets/images/businessman-working-on-tablet_9__1_.png';
import image3 from '@/assets/images/Office-Manager-Showing-Colleague-Something-On-Smartphone_1__1_.png';
import image1 from '@/assets/images/teamwork-meeting-with-business-people_4__2_.png';
import image2 from '@/assets/images/young-smiley-businesswomen-working-with-laptop-desk_1__1_.png';
import { BenefitCard } from '@/components/molecules/BenefitCard';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import {
  Container,
  Title,
  Carousel,
  Navigation,
  NextButton,
  PrevButton,
  Images,
} from './styles';

interface PlatformBenefitsSectionProps {
  children?: React.ReactNode;
}

export const PlatformBenefitsSection: React.FC<
  PlatformBenefitsSectionProps
> = () => {
  const imagesRef = useRef<HTMLDivElement>(null);

  const [currentImage, setCurrentImage] = useState<number>(1);

  return (
    <Container>
      <ContainerWrapper>
        <Title size="4xl">
          Conheça os <strong> benefícios da plataforma</strong>
        </Title>

        <Carousel>
          <Navigation>
            <NextButton
              type="button"
              onClick={() => {
                const left = (260 + 24) * currentImage;

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
            <BenefitCard
              color="primary500"
              image={image1}
              emphasisText="Encontre a vaga ideal para você"
              emphasisContinueText="na maior comunidade de talentos do Brasil"
              emphasisComplementText="Conectamos você com as melhores empresas de forma rápida, simples e
              inteligente"
            />

            <BenefitCard
              color="secondary500"
              image={image2}
              emphasisText="Acelere suas contratações com soluções inteligentes"
              emphasisContinueText="de Recrutamento e Seleção gratuitamente"
              emphasisComplementText="Conectamos a sua empresa com os melhores talentos de forma rápida, simples e humanizada"
            />

            <BenefitCard
              color="pink500"
              textColor="primary800"
              image={image3}
              emphasisText="Conectamos pessoas e empresas de forma simples, humanizada e inteligente"
              emphasisComplementText="Para criar experiências positivas para todo o ecossistema e estimular o crescimento das pessoas e das organizações envolvidas."
            />

            <BenefitCard
              color="primary800"
              textColor="white"
              image={image4}
              emphasisText="Faça parte da maior"
              emphasisContinueText="comunidade de Recrutadores e HeadHunters do Brasil"
              emphasisComplementText="Ajude empresas a encontrarem o talento ideal e receba bônus exclusivos!"
            />
          </Images>
        </Carousel>
      </ContainerWrapper>
    </Container>
  );
};
