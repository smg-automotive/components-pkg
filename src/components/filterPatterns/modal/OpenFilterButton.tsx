import React, { FC } from 'react';
import {
  ButtonProps,
  chakra,
  Button as ChakraButton,
  ResponsiveValue,
} from '@chakra-ui/react';

import { ChevronRightSmallIcon } from 'src/components/icons';

import { FilterPatternProps } from '../props';

export type PaddingX = '0' | 'md';
type Variant = 'sm' | 'md';
type Props = Pick<
  FilterPatternProps,
  'label' | 'displayValue' | 'Icon' | 'isApplied'
> &
  Pick<ButtonProps, 'backgroundColor'> & {
    onClick: () => void;
    variant?: Variant;
    isDisabled?: boolean;
    paddingX?: PaddingX;
  };

const paddingY: Record<Variant, ResponsiveValue<string>> = {
  sm: 'sm',
  md: 'md',
};

const height: Record<Variant, ResponsiveValue<string>> = {
  sm: 'md',
  md: 'lg',
};

export const OpenFilterButton: FC<Props> = ({
  displayValue,
  Icon,
  isApplied,
  label,
  onClick,
  variant = 'md',
  isDisabled = false,
  paddingX = 0,
  backgroundColor = 'unset',
}) => {
  return (
    <ChakraButton
      onClick={onClick}
      rightIcon={
        <ChevronRightSmallIcon color={isDisabled ? 'gray.300' : 'gray.500'} />
      }
      display="flex"
      justifyContent="space-between"
      w="full"
      h={height[variant]}
      paddingX={paddingX}
      paddingY={paddingY[variant]}
      isDisabled={isDisabled}
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
      color={isDisabled ? 'gray.300' : 'gray.900'}
      backgroundColor={backgroundColor}
    >
      <chakra.span
        display="flex"
        justifyContent="space-between"
        w="full"
        minW="0"
      >
        <chakra.span
          mr="2xl"
          whiteSpace="nowrap"
          display="flex"
          alignItems="center"
        >
          {label}
          {Icon ? <Icon h="xs" w="xs" ml="xs" /> : null}
        </chakra.span>
        <chakra.span
          fontWeight="bold"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          {displayValue && isApplied ? displayValue : null}
        </chakra.span>
      </chakra.span>
    </ChakraButton>
  );
};
