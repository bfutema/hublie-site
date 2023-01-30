import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/images/logo.svg';

import { SizeType } from './types';

import { Container } from './styles';

interface LogoProps {
  size?: SizeType;
  children?: React.ReactNode;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  const width = size === 'sm' ? 122 : size === 'md' ? 200 : 300;

  return (
    <Container>
      <Link href="/">
        <Image
          src={logo}
          alt="Hublie Logo"
          width={width}
          // blurDataURL="data:..."
          // placeholder="blur"
        />
      </Link>
    </Container>
  );
};
