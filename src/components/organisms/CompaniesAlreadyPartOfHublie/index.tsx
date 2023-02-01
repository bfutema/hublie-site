import React, { useRef, useState } from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import logo1 from '@/assets/images/logo_1.png';
import logo2 from '@/assets/images/logo_2.png';
import logo3 from '@/assets/images/logo_3.png';
import logo4 from '@/assets/images/logo_4.png';
import logo5 from '@/assets/images/logo_5.png';
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

interface CompaniesAlreadyPartOfHublieProps {
  children?: React.ReactNode;
}

export const CompaniesAlreadyPartOfHublie: React.FC<
  CompaniesAlreadyPartOfHublieProps
> = () => {
  const imagesRef = useRef<HTMLDivElement>(null);

  const [currentImage, setCurrentImage] = useState<number>(1);

  return (
    <Container>
      <ContainerWrapper>
        <Title color="primary800" size="4xl">
          Empresas que já fazem parte da Hublie
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
                  width: '250px',
                  height: '200px',
                  backgroundImage: `url(${logo1.src})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </WhyCard>

            <WhyCard>
              <div
                style={{
                  width: '250px',
                  height: '200px',
                  backgroundImage: `url(${logo2.src})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </WhyCard>

            <WhyCard>
              <div
                style={{
                  width: '250px',
                  height: '200px',
                  backgroundImage: `url(${logo3.src})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </WhyCard>

            <WhyCard>
              <div
                style={{
                  width: '250px',
                  height: '200px',
                  backgroundImage: `url(${logo4.src})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </WhyCard>

            <WhyCard>
              <div
                style={{
                  width: '250px',
                  height: '200px',
                  backgroundImage: `url(${logo5.src})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </WhyCard>
          </Images>
        </Carousel>
      </ContainerWrapper>
    </Container>
  );
};
