import React, { useRef, useState } from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import Image from 'next/image';

import announcement from '@/assets/images/Announcement__1_.png';
import clipboard from '@/assets/images/Clipboard__1_.png';
import coins from '@/assets/images/Coins__1_.png';
import faceId from '@/assets/images/Face-Id__1_.png';
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

interface WhyBePartOfHublieSectionProps {
  children?: React.ReactNode;
}

export const WhyBePartOfHublieSection: React.FC<
  WhyBePartOfHublieSectionProps
> = () => {
  const imagesRef = useRef<HTMLDivElement>(null);

  const [currentImage, setCurrentImage] = useState<number>(1);

  return (
    <Container>
      <ContainerWrapper>
        <Navigation>
          <Text color="white" size="2xl">
            Por que fazer parte da Hublie
          </Text>

          <div>
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
          </div>
        </Navigation>

        <Carousel>
          <Images ref={imagesRef}>
            <WhyCard>
              <Image src={faceId} alt="" width={60} height={60} />

              <Text color="primary800" weight="bold">
                <p>Assistente virtual</p>
              </Text>

              <Text color="neutralGray700">
                <p>
                  Acompanhamento diário de assistente virtual com inteligência
                  artificial para encontrar as vagas certas para você
                </p>
              </Text>
            </WhyCard>

            <WhyCard>
              <Image src={announcement} alt="" width={60} height={60} />

              <Text color="primary800" weight="bold">
                <p>O que falam sobre a empresa</p>
              </Text>

              <Text color="neutralGray700">
                <p>
                  Descubra o que os colaboradores falam sobre a empresa para a
                  qual você está se candidatando
                </p>
              </Text>
            </WhyCard>

            <WhyCard>
              <Image src={clipboard} alt="" width={60} height={60} />

              <Text color="primary800" weight="bold">
                <p>Currículo</p>
              </Text>

              <Text color="neutralGray700">
                <p>
                  Compare o seu currículo com o de outras pessoas do mesmo
                  perfil e saiba quais são as suas chances de ser contratado
                </p>
              </Text>
            </WhyCard>

            <WhyCard>
              <Image src={coins} alt="" width={60} height={60} />

              <Text color="primary800" weight="bold">
                <p>Salário</p>
              </Text>

              <Text color="neutralGray700">
                <p>
                  Confira se o seu salário está de acordo com a sua experiência
                  e veja até onde você pode chegar
                </p>
              </Text>
            </WhyCard>
          </Images>
        </Carousel>
      </ContainerWrapper>
    </Container>
  );
};
