import React from 'react';

import { Burger } from './Burger';

import { Container } from './styles';

export const Navbar: React.FC = () => {
  return (
    <Container>
      <div>Nav Bar</div>
      <Burger />
    </Container>
  );
};
