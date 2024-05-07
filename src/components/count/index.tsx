import React, { FC } from 'react';
import { chakra } from '@chakra-ui/react';

export interface Props {
  variant?: 'primary' | 'inverted';
  count: number;
  ariaLabel?: string;
}

const Count: FC<Props> = ({ variant = 'primary', count, ariaLabel }) => {
  return (
    <chakra.span
      display="inline-block"
      padding="xs"
      verticalAlign="middle"
      textAlign="center"
      minW="2.6ch"
      minH="2.6ch"
      lineHeight="1.6ch"
      borderRadius="full"
      backgroundColor={variant === 'primary' ? 'brand.primary' : 'white'}
      aria-label={ariaLabel}
      textStyle="heading5"
    >
      {count}
    </chakra.span>
  );
};

export default Count;
