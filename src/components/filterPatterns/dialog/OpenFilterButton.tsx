import React, { FC } from 'react';
import {
  ButtonGroup,
  chakra,
  Button as ChakraButton,
  HStack,
} from '@chakra-ui/react';

import { spacing } from 'src/themes/shared/tokens/spacing';
import { sizes } from 'src/themes/shared/tokens/sizes';
import { Colors } from 'src/themes/shared/tokens/colors';
import {
  ChevronRightSmallIcon,
  CloseIcon,
  DeleteIcon,
} from 'src/components/icons';

import { DialogFilterProps } from './props';

type Size = Exclude<keyof typeof sizes, 0 | 'container'>;
type Space = keyof typeof spacing;

export type OpenFilterButtonPaddingX = '0' | 'md';
export type OpenFilterButtonDisplayType = 'default' | 'inline';
type Variant = 'sm' | 'md';

type IconProps = {
  h?: Size;
  w?: Size;
  mr?: Space;
  ml?: Space;
};

type Props = Pick<
  DialogFilterProps,
  'label' | 'displayValue' | 'Icon' | 'isApplied'
> & {
  appliedLabel?: string;
  onClick: () => void;
  variant?: Variant;
  isDisabled?: boolean;
  height?: Size;
  paddingX?: OpenFilterButtonPaddingX;
  color?: Colors;
  backgroundColor?: Colors;
  showResetButton?: boolean;
  resetButtonAriaLabel?: string;
  onResetFilter?: () => void;
  displayType?: OpenFilterButtonDisplayType;
};

const heightFromVariant: Record<Variant, Size> = {
  sm: 'md',
  md: 'lg',
} as const;

const disabledColor = 'gray.300' as const;

const getColor = ({
  isDisabled,
  color,
}: {
  isDisabled: boolean;
  color: Colors;
}): Colors => {
  return isDisabled ? disabledColor : color;
};

const getMainButtonRightPadding = ({
  shouldDisplayResetButton,
  displayType,
  paddingX,
}: {
  shouldDisplayResetButton: boolean;
  displayType: OpenFilterButtonDisplayType;
  paddingX: OpenFilterButtonPaddingX;
}): OpenFilterButtonPaddingX | 'md' | 'sm' => {
  if (!shouldDisplayResetButton) return paddingX;
  return displayType === 'inline' ? 'md' : 'sm';
};

const getChevronIconSize = ({
  displayType,
}: {
  displayType: OpenFilterButtonDisplayType;
}): { w: Size; h: Size } => {
  return displayType === 'inline'
    ? ({ w: 'xs', h: 'xs' } as const)
    : ({ w: 'sm', h: 'sm' } as const);
};

const getRightIcon = ({
  shouldDisplayResetButton,
  iconColor,
  chevronIconSize,
}: {
  shouldDisplayResetButton: boolean;
  iconColor: Colors;
  chevronIconSize: { w: Size; h: Size };
}): React.ReactElement | undefined => {
  if (shouldDisplayResetButton) return undefined;
  return <ChevronRightSmallIcon color={iconColor} {...chevronIconSize} />;
};

const renderInlineContent = ({
  label,
  appliedLabel,
  displayValue,
  isApplied,
  Icon,
}: {
  label: string;
  appliedLabel: string | undefined;
  displayValue: string | undefined;
  isApplied: boolean | undefined;
  Icon: React.ComponentType<IconProps> | undefined;
}): React.ReactElement => {
  const displayText = isApplied
    ? [appliedLabel ?? label, displayValue].filter(Boolean).join(': ')
    : label;

  return (
    <chakra.span
      overflow="hidden"
      whiteSpace="nowrap"
      display="flex"
      alignItems="center"
      w="full"
      minW="0"
    >
      {Icon && <Icon h="xs" w="xs" mr="xs" />}
      <chakra.span overflow="hidden" textOverflow="ellipsis">
        {displayText}
      </chakra.span>
    </chakra.span>
  );
};

const renderDefaultContent = ({
  label,
  displayValue,
  isApplied,
  Icon,
}: {
  label: string;
  displayValue: string | undefined;
  isApplied: boolean | undefined;
  Icon: React.ComponentType<IconProps> | undefined;
}): React.ReactElement => (
  <chakra.span display="flex" justifyContent="space-between" w="full" minW="0">
    <chakra.span
      mr="2xl"
      whiteSpace="nowrap"
      display="flex"
      alignItems="center"
      flexShrink={0}
    >
      {label}
      {Icon && <Icon h="xs" w="xs" ml="xs" />}
    </chakra.span>
    {displayValue && isApplied && (
      <chakra.span
        fontWeight="bold"
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        minW="0"
        flex="1"
        textAlign="right"
      >
        {displayValue}
      </chakra.span>
    )}
  </chakra.span>
);

const renderResetButton = ({
  shouldDisplayResetButton,
  resetButtonAriaLabel,
  isDisabled,
  onResetFilter,
  displayType,
  iconColor,
  paddingX,
}: {
  shouldDisplayResetButton: boolean;
  resetButtonAriaLabel: string;
  isDisabled: boolean;
  onResetFilter: (() => void) | undefined;
  displayType: OpenFilterButtonDisplayType;
  iconColor: Colors;
  paddingX: OpenFilterButtonPaddingX;
}): React.ReactElement | null => {
  if (!shouldDisplayResetButton) return null;

  const commonProps = {
    'aria-label': resetButtonAriaLabel,
    h: 'full' as const,
    disabled: isDisabled,
    cursor: (isDisabled ? 'notAllowed' : 'pointer') as 'notAllowed' | 'pointer',
    onClick: onResetFilter,
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    backgroundColor: 'transparent' as const,
  };

  if (displayType === 'inline') {
    return (
      <ChakraButton
        {...commonProps}
        w="md"
        minW="md"
        borderLeftColor="white"
        css={{ borderLeftWidth: '1px' }}
        padding="0"
      >
        <CloseIcon color={iconColor} w="xs" h="xs" />
      </ChakraButton>
    );
  }

  return (
    <ChakraButton {...commonProps} paddingRight={paddingX} paddingLeft="0">
      <DeleteIcon color={iconColor} />
    </ChakraButton>
  );
};

export const OpenFilterButton: FC<Props> = ({
  appliedLabel,
  displayValue,
  Icon,
  isApplied,
  label,
  onClick,
  variant = 'md',
  isDisabled = false,
  height,
  paddingX = '0',
  backgroundColor,
  color,
  showResetButton = true,
  resetButtonAriaLabel = 'Reset filter',
  onResetFilter,
  displayType = 'default',
}) => {
  const shouldDisplayResetButton =
    showResetButton && isApplied && !!onResetFilter;

  const iconColor = getColor({ isDisabled, color: color || 'gray.500' });
  const buttonColor = getColor({ isDisabled, color: color || 'gray.900' });

  const mainButtonRightPadding = getMainButtonRightPadding({
    shouldDisplayResetButton,
    displayType,
    paddingX,
  });
  const chevronIconSize = getChevronIconSize({ displayType });

  const rightIcon = getRightIcon({
    shouldDisplayResetButton,
    iconColor,
    chevronIconSize,
  });

  const buttonContent =
    displayType === 'inline'
      ? renderInlineContent({
          label,
          appliedLabel,
          displayValue,
          isApplied,
          Icon,
        })
      : renderDefaultContent({ label, displayValue, isApplied, Icon });

  return (
    <ButtonGroup
      h={height ?? heightFromVariant[variant]}
      attached
      w="full"
      maxW="full"
      backgroundColor={backgroundColor}
      borderRadius="sm"
    >
      <ChakraButton
        flex="1"
        minW="0"
        h="full"
        paddingLeft={paddingX}
        paddingRight={mainButtonRightPadding}
        cursor={isDisabled ? 'notAllowed' : 'pointer'}
        color={buttonColor}
        disabled={isDisabled}
        onClick={onClick}
      >
        <HStack>
          {buttonContent}
          {rightIcon}
        </HStack>
      </ChakraButton>
      {renderResetButton({
        shouldDisplayResetButton,
        resetButtonAriaLabel,
        isDisabled,
        onResetFilter,
        displayType,
        iconColor,
        paddingX,
      })}
    </ButtonGroup>
  );
};
