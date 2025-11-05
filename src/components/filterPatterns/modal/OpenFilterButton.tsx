import React, { FC } from 'react';
import {
  ButtonProps,
  chakra,
  Button as ChakraButton,
  IconButton,
  ResponsiveValue,
} from '@chakra-ui/react';

import { ChevronRightSmallIcon, DeleteIcon } from 'src/components/icons';

import Box from 'src/components/box';

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
    showResetButton?: boolean;
    resetButtonAriaLabel?: string;
    onResetFilter?: () => void;
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
  showResetButton = true,
  resetButtonAriaLabel = 'Reset filter',
  onResetFilter,
}) => {
  const shouldDisplayResetButton =
    showResetButton && isApplied && onResetFilter;
  return (
    <Box
      display="flex"
      alignItems="center"
      h={height[variant]}
      paddingX={paddingX}
      paddingY={paddingY[variant]}
      backgroundColor={backgroundColor}
    >
      <ChakraButton
        w="full"
        paddingX={0}
        isDisabled={isDisabled}
        cursor={isDisabled ? 'not-allowed' : 'pointer'}
        color={isDisabled ? 'gray.300' : 'gray.900'}
        rightIcon={
          shouldDisplayResetButton ? undefined : (
            <ChevronRightSmallIcon
              color={isDisabled ? 'gray.300' : 'gray.500'}
            />
          )
        }
        onClick={onClick}
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
      {shouldDisplayResetButton ? (
        <IconButton
          aria-label={resetButtonAriaLabel}
          ml="sm"
          icon={<DeleteIcon color={isDisabled ? 'gray.300' : 'gray.500'} />}
          cursor={isDisabled ? 'not-allowed' : 'pointer'}
          onClick={onResetFilter}
        />
      ) : null}
    </Box>
  );
};
