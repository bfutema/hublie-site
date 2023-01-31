/* eslint-disable react/no-danger */
import React from 'react';

import Image from 'next/image';

import logo from '@/assets/images/favicon.png';
import { Text } from '@/components/atoms/Text';

import { Container, Content, Who } from './styles';

interface DepoimentCardProps {
  depoiment: string;
  who: string;
  children?: React.ReactNode;
}

export const DepoimentCard: React.FC<DepoimentCardProps> = ({
  depoiment,
  who,
}) => {
  const html = depoiment
    .replaceAll('*start*', '<strong>')
    .replaceAll('*end*', '</strong>');

  return (
    <Container>
      <Content>
        <Text>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Text>
      </Content>

      <Who>
        <Image
          src={logo}
          alt="Hublie Logo"
          width={32}
          height={32}
          // blurDataURL="data:..."
          // placeholder="blur"
        />

        <Text color="primary800" size="xs" weight="medium">
          {who}
        </Text>
      </Who>
    </Container>
  );
};
