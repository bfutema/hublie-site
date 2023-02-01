import React, { useRef, useState } from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import Image from 'next/image';

import addUser from '@/assets/images/Add-user.png';
import edit from '@/assets/images/Edit.png';
import frame from '@/assets/images/Frame-2.png';
import lineChart from '@/assets/images/Line-Chart.png';
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

interface SolutionsForYourCompanyProps {
  children?: React.ReactNode;
}

export const SolutionsForYourCompany: React.FC<
  SolutionsForYourCompanyProps
> = () => {
  const imagesRef = useRef<HTMLDivElement>(null);

  const [currentImage, setCurrentImage] = useState<number>(1);

  return (
    <Container>
      <ContainerWrapper>
        <Title color="white" size="4xl">
          Soluções Para Sua Empresa
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
              <Image src={edit} alt="" width={60} height={60} />

              <Text weight="bold">
                <p>Recrutamento e Seleção Ágil</p>
              </Text>

              <Text>
                <p>
                  Divulgue suas vagas gratuitamente, acesse os melhores talentos
                  por área e acelere suas contratações
                </p>
              </Text>
            </WhyCard>

            <WhyCard>
              <Image src={lineChart} alt="" width={60} height={60} />

              <Text weight="bold">
                <p>Plataforma ATS</p>
              </Text>

              <Text>
                <p>
                  Automatize seu processo de Recrutamento e Seleção de forma
                  simples e personalizada e de graça!
                </p>
              </Text>
            </WhyCard>

            <WhyCard>
              <Image src={addUser} alt="" width={60} height={60} />

              <Text weight="bold">
                <p>Hunting Ativo</p>
              </Text>

              <Text>
                <p>
                  Nossos HeadHunters encontram candidatos com as competências
                  técnicas e comportamentais que você precisa
                </p>
              </Text>
            </WhyCard>

            <WhyCard>
              <Image src={frame} alt="" width={60} height={60} />

              <Text weight="bold">
                <p>Smartsourcing</p>
              </Text>

              <Text>
                <p>
                  Montamos o time que você precisa e alocamos squads na sua
                  empresa com profissionais altamente qualificados
                </p>
              </Text>
            </WhyCard>
          </Images>
        </Carousel>
      </ContainerWrapper>
    </Container>
  );
};
