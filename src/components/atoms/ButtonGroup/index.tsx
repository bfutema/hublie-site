import React, { useState } from 'react';

import { v4 } from 'uuid';

import { Button, Container } from './styles';

interface ButtonProps {
  name: string;
  onClick: () => void;
}

interface ButtonGroupProps {
  className?: string;
  buttons: ButtonProps[];
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  className,
  buttons,
}) => {
  const [selectedButton, setSelectedButton] = useState<number>(-1);

  return (
    <Container className={className}>
      {buttons.map((item, index) => (
        <Button
          type="button"
          onClick={() => {
            item.onClick();
            setSelectedButton(index);
          }}
          key={v4()}
          isSelected={index === selectedButton}
        >
          {item.name}
        </Button>
      ))}
    </Container>
  );
};
