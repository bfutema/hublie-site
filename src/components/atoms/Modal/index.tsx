import React, { useRef, useState, useImperativeHandle } from 'react';
import { FiX } from 'react-icons/fi';

import { useClickAway } from '@/hooks/useClickAway';

import { Container, Dialog } from './styles';

export type ModalRef = {
  open: () => void;
  close: () => void;
};

interface ModalProps {
  children?: React.ReactNode;
}

const Modal: React.ForwardRefRenderFunction<ModalRef, ModalProps> = (
  { children },
  ref,
) => {
  const dialogRef = useRef(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    open: () => {
      const main = document.getElementById('body');

      if (main) main.style.overflow = 'hidden';

      setIsOpen(true);
    },
    close: () => {
      const main = document.getElementById('body');

      if (main) main.style.overflow = 'scroll';

      setIsOpen(false);
    },
  }));

  useClickAway(
    dialogRef,
    () => {
      const main = document.getElementById('body');

      if (main) main.style.overflow = 'initial';

      setIsOpen(false);
    },
    { enabled: isOpen },
  );

  return (
    <Container isOpen={isOpen}>
      <Dialog ref={dialogRef} isOpen={isOpen}>
        {children}

        <button
          type="button"
          onClick={() => {
            const main = document.getElementById('body');

            if (main) main.style.overflow = 'initial';

            setIsOpen(false);
          }}
        >
          <FiX size={24} />
        </button>
      </Dialog>
    </Container>
  );
};

const Component = React.forwardRef(Modal);

export { Component as Modal };
