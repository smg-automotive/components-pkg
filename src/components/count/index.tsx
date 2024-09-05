import React, { FC } from 'react';
import { chakra } from '@chakra-ui/react';

export type CountVariant =
  | 'primary'
  | 'inverted'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

type ColorConfig = {
  bg: string;
  text: string;
};

const color: Record<CountVariant, ColorConfig> = {
  primary: {
    bg: 'brand.primary',
    text: 'black',
  },
  inverted: {
    bg: 'white',
    text: 'black',
  },
  info: {
    bg: 'blue.100',
    text: 'blue.500',
  },
  success: {
    bg: 'green.100',
    text: 'green.500',
  },
  warning: {
    bg: 'orange.100',
    text: 'orange.400',
  },
  error: {
    bg: 'red.100',
    text: 'red.400',
  },
};

export interface Props {
  variant?: CountVariant;
  count: number;
  ariaLabel?: string;
}

const Count: FC<Props> = ({ variant = 'primary', count, ariaLabel }) => {
  const bgColor = color[variant]?.bg || 'brand.primary';
  const textColor = color[variant]?.text || 'black';

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
      backgroundColor={bgColor}
      color={textColor}
      aria-label={ariaLabel}
      textStyle="heading5"
    >
      {count}
    </chakra.span>
  );
};

export default Count;
