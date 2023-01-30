import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RiMenu3Fill } from 'react-icons/ri';

import { Menu } from '../index';

import { Container } from './styles';

export const Burger: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const Icon = !isOpen ? (
    <RiMenu3Fill color="#3C1667" size={24} onClick={() => setIsOpen(true)} />
  ) : (
    <AiOutlineClose color="#fff" size={24} onClick={() => setIsOpen(false)} />
  );

  return (
    <Container isOpen={isOpen}>
      {Icon}

      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </Container>
  );
};
