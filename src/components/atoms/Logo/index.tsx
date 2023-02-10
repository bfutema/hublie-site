import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import logoWhite from '@/assets/images/logo-white.svg';
import logo from '@/assets/images/logo.svg';

import { SizeType } from './types';

import { Container } from './styles';

interface LogoProps {
  color?: 'white' | 'primary500';
  size?: SizeType;
  className?: string;
  children?: React.ReactNode;
}

export const Logo: React.FC<LogoProps> = ({
  color = 'primary500',
  size = 'md',
  className,
}) => {
  const width = size === 'sm' ? 122 : size === 'md' ? 200 : 300;

  return (
    <Container className={className}>
      <Link href="/">
        <Image
          src={color === 'white' ? logoWhite : logo}
          alt="Hublie Logo"
          width={width}
          // blurDataURL="data:..."
          // placeholder="blur"
        />
      </Link>
    </Container>
  );
};
