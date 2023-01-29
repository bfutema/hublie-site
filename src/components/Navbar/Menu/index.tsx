import React, { useState } from 'react';

import { Container } from './styles';

interface MenuProps {
  isOpen: boolean
}

export const Menu: React.FC<MenuProps> = ({ isOpen }) => {  

  return (
    <Container isOpen={isOpen}>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Sign In</li>
      <li>Sign Up</li>
    </Container>
  );
};
