import React, { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';

type ChipSize = 'sm' | 'md';

type ChipVariant = 'choice' | 'filter';

export type ChipProps = {
  children: React.ReactNode;
  variant?: ChipVariant;
  size?: ChipSize;
  isDisabled?: boolean;
  leftIcon?: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  'aria-label'?: string;
} & Omit<React.ComponentProps<typeof Box>, 'onClick' | 'children' | 'size'>;

const sizeStyles = {
  sm: {
    px: 'sm',
    py: 'xs',
    fontSize: 'xs',
    minH: 2,
    iconMargin: 'xs',
  },
  md: {
    px: 'md',
    py: 'sm',
    fontSize: 'sm',
    minH: 8,
    iconMargin: 'sm',
  },
};

const getVariantStyles = (variant: ChipVariant, isActiveParam?: boolean) => {
  if (variant === 'filter') {
    return {
      bg: isActiveParam ? 'blue.200' : 'blue.100',
      color: 'gray.900',
      border: '1px solid transparent',
      _hover: { bg: 'blue.50' },
      _active: { bg: 'blue.200' },
      _focusVisible: {
        bg: isActiveParam ? 'blue.200' : 'blue.100',
        outline: '2px solid',
        outlineColor: 'blue.300',
      },
    };
  }

  return {
    bg: isActiveParam ? 'gray.100' : 'white',
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
};

const Chip: FC<ChipProps> = ({
  children,
  variant = 'choice',
  size = 'md',
  isDisabled = false,
  leftIcon,
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
      {leftIcon && size !== 'sm' ? (
        <Box
          mr="xs"
          color="currentColor"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {leftIcon}
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
