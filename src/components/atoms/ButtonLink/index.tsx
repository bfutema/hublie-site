import React from 'react';

import Link, { LinkProps } from 'next/link';

import { Container } from './styles';

interface ButtonLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  className,
  children,
}) => {
  return (
    <Container className={className}>
      <Link href={href}>{children}</Link>
    </Container>
  );
};
