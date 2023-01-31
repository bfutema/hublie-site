import React from 'react';

import Link, { LinkProps } from 'next/link';

import { Container } from './styles';

interface ButtonStoreProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export const ButtonStore: React.FC<ButtonStoreProps> = ({
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
