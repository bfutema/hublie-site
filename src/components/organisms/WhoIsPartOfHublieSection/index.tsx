import React, { useRef, useState } from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import { Text } from '@/components/atoms/Text';
import { DepoimentCard } from '@/components/molecules/DepoimentCard';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import {
  Container,
  Carousel,
  Navigation,
  NextButton,
  PrevButton,
  Images,
} from './styles';

interface WhoIsPartOfHublieSectionProps {
  children?: React.ReactNode;
}

export const WhoIsPartOfHublieSection: React.FC<
  WhoIsPartOfHublieSectionProps
> = () => {
  const imagesRef = useRef<HTMLDivElement>(null);

  const [currentImage, setCurrentImage] = useState<number>(1);

  return (
    <Container>
      <ContainerWrapper>
        <Navigation>
          <Text color="white" size="2xl">
            Quem faz parte da Hublie diz
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
                const left = (334 + 24) * currentImage;

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
            <DepoimentCard
              who="Martha | Desenvolvedora FullStack"
              depoiment="Na minha busca por emprego conheci a Hublie pelo Linkedin, onde entraram em contato comigo falando sobre uma *start* oportunidade na minha área, na empresa que estou atuando há 6 meses em Home Office. Com certeza valeu muito a pena. *end*"
            />
            <DepoimentCard
              who="Amanda | Analista"
              depoiment="Tive todo o suporte durante o processo seletivo que participei, as orientações foram claras e objetivas. *start* Sem falar no processo super rápido e para ótimas empresas, não levou mais de 1 semana. *end* Utilizaria novamente os serviços da Hublie devido toda a agilidade e acompanhamento que foi do início do processo até a primeira semana de trabalho"
            />
            <DepoimentCard
              who="Juscelino"
              depoiment="Gostei muito da condução da conversa de hoje. Foi a primeira vez que senti diferença (positiva) de ter sido entrevistado por uma empresa de recrutamento antes da empresa final."
            />
            <DepoimentCard
              who="Cleiton"
              depoiment="Há 4 meses atrás recebi uma mensagem no LinkedIn de forma inesperada qual seria a mensagem que mudaria minha vida, com abordagem muito educada. A equipe Hublie me convidou para um teste seletivo de uma vaga de emprego Home Office. Me acompanharam desde o início, me deixando bem informado de todas as etapas da seleção e hoje estou aqui no emprego dos meus sonhos e com uma remuneração digna fazendo o que gosto. E melhor, trabalhando na minha área e com o que domino. Parabéns Hublie."
            />
          </Images>
        </Carousel>
      </ContainerWrapper>
    </Container>
  );
};
