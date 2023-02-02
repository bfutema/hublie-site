import React from 'react';

import Link, { LinkProps } from 'next/link';

import { theme } from '@/styles/themes';

import { Container } from './styles';

interface ButtonLinkProps extends LinkProps {
  color?: keyof typeof theme.colors;
  backgroundColor?: keyof typeof theme.colors;
  children: React.ReactNode;
  className?: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  color = 'white',
  backgroundColor = 'secondary500',
  href,
  className,
  children,
}) => {
  return (
    <Container
      color={color}
      backgroundColor={backgroundColor}
      className={className}
    >
      <Link href={href}>{children}</Link>
    </Container>
  );
};
