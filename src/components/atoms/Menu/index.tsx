import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Container } from './styles';

interface MenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

export const Menu: React.FC<MenuProps> = ({ isOpen, setIsOpen }) => {
  const router = useRouter();

  return (
    <Container isOpen={isOpen}>
      <li className={router.pathname === '/home' ? 'active' : ''}>
        <Link href="/home">Home</Link>
      </li>

      <li className={router.pathname === '/candidates' ? 'active' : ''}>
        <Link href="/candidates">Candidatos</Link>
      </li>

      <li className={router.pathname === '/enterprises' ? 'active' : ''}>
        <Link href="/enterprises">Empresas</Link>
      </li>

      <li className={router.pathname === '/recruiters' ? 'active' : ''}>
        <Link href="/recruiters">Recrutadores</Link>
      </li>

      <li className={router.pathname === '/about' ? 'active' : ''}>
        <Link href="/about">Sobre a Hublie</Link>
      </li>

      <li className={router.pathname === '/social' ? 'active' : ''}>
        <Link href="/social">Social</Link>
      </li>

      <li className={router.pathname === '/blog' ? 'active' : ''}>
        <Link href="/blog">Blog</Link>
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
