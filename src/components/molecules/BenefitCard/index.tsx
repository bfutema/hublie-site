import React from 'react';

import { StaticImageData } from 'next/image';

import { Text } from '@/components/atoms/Text';
import { theme } from '@/styles/themes';

import { Container, Image, Content, ContentTitle } from './styles';

interface BenefitCardProps {
  color: keyof typeof theme.colors;
  textColor?: keyof typeof theme.colors;
  image: StaticImageData;
  emphasisText: string;
  emphasisContinueText?: string;
  emphasisComplementText: string;
  children?: React.ReactNode;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
  color,
  textColor = 'white',
  image,
  emphasisText,
  emphasisContinueText,
  emphasisComplementText,
}) => {
  const width = 260;

  return (
    <Container>
      <Image src={image} alt="" width={width} />

      <Content color={color} width={width}>
        <ContentTitle color={textColor} size="sm">
          <span>{emphasisText}</span>
          {emphasisContinueText}
        </ContentTitle>

        <div style={{ height: '90px' }}>
          <Text color={textColor} size="xs">
            {emphasisComplementText}
          </Text>
        </div>
      </Content>
    </Container>
  );
};
