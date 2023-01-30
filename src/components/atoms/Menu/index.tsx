import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import Link from 'next/link';

import { Container } from './styles';

interface MenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

export const Menu: React.FC<MenuProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/">About Us</Link>
      </li>

      <li>
        <Link href="/">Contact Us</Link>
      </li>

      <li>
        <Link href="/">Sign In</Link>
      </li>

      <li>
        <Link href="/">Sign Up</Link>
      </li>

      <button type="button" className="close-burger-menu-button">
        <AiOutlineClose
          color="#fff"
          size={24}
          onClick={() => setIsOpen(false)}
        />
      </button>
    </Container>
  );
};
