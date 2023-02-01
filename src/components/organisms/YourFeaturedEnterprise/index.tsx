import React, { useRef, useState } from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import Image from 'next/image';

import bullish from '@/assets/images/Bullish.png';
import editBox2 from '@/assets/images/Edit-box2.png';
import messageBox from '@/assets/images/Message-box.png';
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

interface YourFeaturedEnterpriseSectionProps {
  children?: React.ReactNode;
}

export const YourFeaturedEnterpriseSection: React.FC<
  YourFeaturedEnterpriseSectionProps
> = () => {
  const imagesRef = useRef<HTMLDivElement>(null);

  const [currentImage, setCurrentImage] = useState<number>(1);

  return (
    <Container>
      <ContainerWrapper>
        <Title color="primary800" size="4xl">
          Sua <strong> empresa </strong> em destaque entre as{' '}
          <strong> melhores para se trabalhar </strong>
        </Title>

        <Text color="primary800" size="lg" weight="minRegular">
          Com a Hublie, você encontra os talentos ideais para a sua empresa.
          Muito mais Transparência, Agilidade e Assertividade na Atração de
          Talentos
        </Text>

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
              <Image src={bullish} alt="" width={60} height={60} />

              <Text weight="bold">
                <p>Ranking</p>
              </Text>

              <Text>
                <p>
                  Veja o ranking dos melhores profissionais do mercado por área
                  de atuação e experiência
                </p>
              </Text>
            </WhyCard>

            <WhyCard>
              <Image src={messageBox} alt="" width={60} height={60} />

              <Text weight="bold">
                <p>Feedbacks</p>
              </Text>

              <Text>
                <p>
                  Acesse feedbacks e recomendações dos candidatos sob o ponto de
                  vista de colegas e gestores
                </p>
              </Text>
            </WhyCard>

            <WhyCard>
              <Image src={editBox2} alt="" width={60} height={60} />

              <Text weight="bold">
                <p>Avaliação</p>
              </Text>

              <Text>
                <p>
                  Descubra a avaliação dos profissionais da área em comparação
                  com candidatos de mesmo perfil
                </p>
              </Text>
            </WhyCard>
          </Images>
        </Carousel>
      </ContainerWrapper>
    </Container>
  );
};
