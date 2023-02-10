import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import facebook from '@/assets/icons/facebook-orange.svg';
import instagram from '@/assets/icons/instagram-orange.svg';
import linkedin from '@/assets/icons/linkedin-orange.svg';
import twitter from '@/assets/icons/twitter-orange.svg';
import youtube from '@/assets/icons/youtube-orange.svg';

import { ButtonLink } from '../ButtonLink';
import { Logo } from '../Logo';

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
      <Logo size="sm" color="white" className="container-logo" />

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

      <ButtonLink href="/" className="container-button-link">
        Acesse o portal
      </ButtonLink>

      <button type="button" className="close-burger-menu-button">
        <AiOutlineClose
          color="#fff"
          size={24}
          onClick={() => setIsOpen(false)}
        />
      </button>

      <div className="container-social-icons">
        <Image src={facebook} alt="facebook" />
        <Image src={twitter} alt="twitter" />
        <Image src={linkedin} alt="linkedin" />
        <Image src={instagram} alt="instagram" />
        <Image src={youtube} alt="youtube" />
      </div>
    </Container>
  );
};
