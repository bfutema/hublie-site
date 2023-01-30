import React from 'react';

import Link, { LinkProps } from 'next/link';

import { Container } from './styles';

interface ButtonLinkProps extends LinkProps {
  children: React.ReactNode;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ children, href }) => {
  return (
    <Container>
      <Link href={href}>{children}</Link>
    </Container>
  );
};
