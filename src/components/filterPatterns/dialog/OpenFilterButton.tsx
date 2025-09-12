import React, { FC } from 'react';
import { chakra, Button as ChakraButton } from '@chakra-ui/react';

import { spacing } from 'src/themes/shared/tokens/spacing';
import { Colors } from 'src/themes/shared/tokens/colors';
import { Size } from 'src/themes/shared/slotRecipes/dialog';
import { ChevronRightSmallIcon } from 'src/components/icons';

import { DialogFilterProps } from './props';

export type Space = keyof typeof spacing;

export type PaddingX = '0' | 'md';
type Variant = 'sm' | 'md';
type Props = Pick<
  DialogFilterProps,
  'label' | 'displayValue' | 'Icon' | 'isApplied'
> & {
  onClick: () => void;
  variant?: Variant;
  isDisabled?: boolean;
  paddingX?: PaddingX;
  backgroundColor?: Colors;
};

const paddingY: Record<Variant, Space> = {
  sm: 'sm',
  md: 'md',
};

const height: Record<Variant, Size> = {
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
  paddingX = '0',
  backgroundColor = 'none',
}) => {
  return (
    <ChakraButton
      onClick={onClick}
      display="flex"
      justifyContent="space-between"
      w="full"
      h={height[variant]}
      paddingX={paddingX}
      paddingY={paddingY[variant]}
      disabled={isDisabled}
      cursor={isDisabled ? 'notAllowed' : 'pointer'}
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
        <ChevronRightSmallIcon color={isDisabled ? 'gray.300' : 'gray.500'} />
      </chakra.span>
    </ChakraButton>
  );
};
