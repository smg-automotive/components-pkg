import React, { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';

import { CheckmarkIcon } from 'src';

type ChipSize = 'md';

type ChipVariant = 'suggestion' | 'filter';

export type ChipProps = {
  children: React.ReactNode;
  variant?: ChipVariant;
  size?: ChipSize;
  isDisabled?: boolean;
  onClick?: () => void;
  isActive?: boolean;
  'aria-label'?: string;
} & Omit<React.ComponentProps<typeof Box>, 'onClick' | 'children' | 'size'>;

const sizeStyles = {
  md: {
    px: 'md',
    py: 'sm',
    fontSize: 'sm',
    minH: 8,
    iconMargin: 'sm',
  },
};

const getVariantStyles = (variant: ChipVariant, isActiveParam?: boolean) => {
  const suggestionStyles = {
    bg: 'white',
    color: 'gray.900',
    border: '1px solid',
    borderColor: 'gray.200',
    _hover: {
      bg: 'white',
      borderColor: 'black',
    },
    _active: {
      bg: 'gray.100',
      borderColor: 'gray.200',
    },
    _focusVisible: {
      bg: isActiveParam ? 'gray.100' : 'white',
      borderColor: 'black',
      outline: '2px solid',
      outlineColor: 'blue.300',
    },
  };

  const activeFilterStyles = {
    bg: 'blue.200',
    color: 'gray.900',
    border: '1px solid transparent',
    _hover: { bg: 'blue.50' },
    _active: { bg: 'blue.200' },
    _focusVisible: {
      bg: 'blue.200',
      outline: '2px solid',
      outlineColor: 'blue.300',
    },
  };

  if (variant === 'filter') {
    return isActiveParam ? activeFilterStyles : suggestionStyles;
  }

  return suggestionStyles;
};

const Chip: FC<ChipProps> = ({
  children,
  variant = 'suggestion',
  size = 'md',
  isDisabled = false,
  onClick,
  isActive,
  'aria-label': ariaLabel,
  ...rest
}) => {
  const sizeStyle =
    sizeStyles[size as keyof typeof sizeStyles] || sizeStyles['md'];

  const baseVariantStyles = getVariantStyles(variant, isActive);

  const handleClick = () => {
    if (!isDisabled && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!isDisabled && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick?.();
    }
  };

  return (
    <Box
      as="button"
      type="button"
      display="flex"
      alignItems="center"
      borderRadius="full"
      fontWeight="medium"
      transition="all 0.2s"
      outline="none"
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
      opacity={isDisabled ? 0.4 : 1}
      px={sizeStyle.px}
      py={sizeStyle.py}
      fontSize={sizeStyle.fontSize}
      minH={sizeStyle.minH}
      width="max-content"
      flexShrink={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      {...baseVariantStyles}
      {...rest}
    >
      {isActive && variant === 'filter' ? (
        <Box
          mr="xs"
          color="currentColor"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CheckmarkIcon height={16} width={16} />
        </Box>
      ) : null}
      <Box as="span" whiteSpace="nowrap">
        <Text textStyle="body-small" fontSize={sizeStyle.fontSize}>
          {children}
        </Text>
      </Box>
    </Box>
  );
};

Chip.displayName = 'Chip';

export default Chip;
