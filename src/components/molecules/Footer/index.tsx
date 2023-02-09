import React, { useRef } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import facebook from '@/assets/icons/facebook.svg';
import instagram from '@/assets/icons/instagram.svg';
import linkedin from '@/assets/icons/linkedin.svg';
import twitter from '@/assets/icons/twitter.svg';
import youtube from '@/assets/icons/youtube.svg';
import { Logo } from '@/components/atoms/Logo';
import { Modal, ModalRef } from '@/components/atoms/Modal';
import { Text } from '@/components/atoms/Text';
import { CancelationPolicy } from '@/components/organisms/CancelationPolicy';
import { PrivacyPolicy } from '@/components/organisms/PrivacyPolicy';
import { TermsOfUse } from '@/components/organisms/TermsOfUse';
import { ContainerWrapper } from '@/components/quarks/ContainerWrapper';

import { Container, Heading, Divider, Info, Logos } from './styles';

interface FooterProps {
  children?: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = () => {
  const modalTermsOfUseRef = useRef<ModalRef>(null);
  const modalPrivacyPolicyRef = useRef<ModalRef>(null);
  const modalCancelationPolicyRef = useRef<ModalRef>(null);

  return (
    <Container>
      <ContainerWrapper>
        <Heading>
          <Logo color="white" size="sm" />

          <ul>
            <li>
              <Link href="/candidates">Candidatos</Link>
            </li>

            <li>
              <Link href="/enterprises">Empresas</Link>
            </li>

            <li>
              <Link href="/recruiters">Recrutadores</Link>
            </li>

            <li>
              <Link href="/about">Sobre a Hublie</Link>
            </li>

            <li>
              <Link href="/social">Social</Link>
            </li>

            <li>
              <Link href="/blog">Blog</Link>
            </li>

            <li>
              <button
                type="button"
                onClick={() => modalTermsOfUseRef.current?.open()}
              >
                Termos de uso
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => modalPrivacyPolicyRef.current?.open()}
              >
                Política de privacidade
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => modalCancelationPolicyRef.current?.open()}
              >
                Política de cancelamento
              </button>
            </li>
          </ul>
        </Heading>

        <Divider />

        <Info>
          <div>
            <Logos>
              <Image src={facebook} alt="facebook" />
              <Image src={twitter} alt="twitter" />
              <Image src={linkedin} alt="linkedin" />
              <Image src={instagram} alt="instagram" />
              <Image src={youtube} alt="youtube" />
            </Logos>

            <Text color="white" size="xs" weight="minRegular">
              Hublie© 2022 Todos os direitos reservados.
            </Text>
          </div>

          <div>
            <Text color="white" size="lg" weight="minRegular" maxWidth="300px">
              Transformando o mercado de trabalho a partir da conexão entre
              pessoas e empresas de forma simples, humanizada e inteligente
            </Text>
          </div>
        </Info>
      </ContainerWrapper>

      <Modal ref={modalTermsOfUseRef}>
        <TermsOfUse />
      </Modal>

      <Modal ref={modalPrivacyPolicyRef}>
        <PrivacyPolicy />
      </Modal>

      <Modal ref={modalCancelationPolicyRef}>
        <CancelationPolicy />
      </Modal>
    </Container>
  );
};
