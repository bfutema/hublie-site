import React from 'react';

import Link, { LinkProps } from 'next/link';

import { theme } from '@/styles/themes';

import { Container } from './styles';

interface ButtonLinkProps extends LinkProps {
  backgroundColor?: keyof typeof theme.colors;
  children: React.ReactNode;
  className?: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  backgroundColor = 'secondary500',
  href,
  className,
  children,
}) => {
  return (
    <Container backgroundColor={backgroundColor} className={className}>
      <Link href={href}>{children}</Link>
    </Container>
  );
};
