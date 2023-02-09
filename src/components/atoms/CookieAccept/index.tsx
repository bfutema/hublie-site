import React, { useRef, useState, useEffect } from 'react';

import { PrivacyPolicy } from '@/components/organisms/PrivacyPolicy';

import { Modal, ModalRef } from '../Modal';

import { AcceptButton, Container } from './styles';

export const CookieAccept: React.FC = () => {
  const modalPrivacyPolicyRef = useRef<ModalRef>(null);

  const [isShow, setIsShow] = useState<boolean>(false);

  function handleAccept() {
    localStorage.setItem('cookies-accept', 'accepted');

    setIsShow(false);
  }

  useEffect(() => {
    function init() {
      const cookiesAccepted = localStorage.getItem('cookies-accept');

      if (cookiesAccepted === 'accepted') {
        setIsShow(false);
      } else {
        setIsShow(true);
      }
    }

    init();
  }, []);

  return (
    <>
      <Container isOpen={isShow}>
        <p>
          <strong>Hublie e os cookies: </strong>
          usamos cookies para personalizar anúncios e melhorar a sua experiência
          no site. Ao continuar navegando, você concorda com a nossa{' '}
          <button
            type="button"
            onClick={() => modalPrivacyPolicyRef.current?.open()}
          >
            Política de Privacidade
          </button>
        </p>

        <AcceptButton type="button" onClick={handleAccept}>
          Continuar e fechar
        </AcceptButton>
      </Container>

      <Modal ref={modalPrivacyPolicyRef}>
        <PrivacyPolicy />
      </Modal>
    </>
  );
};
