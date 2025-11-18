import React, { FC } from 'react';
import {
  ButtonGroup,
  ButtonProps,
  chakra,
  Button as ChakraButton,
  ChakraProps,
  IconButton,
  ResponsiveValue,
} from '@chakra-ui/react';

import {
  ChevronRightSmallIcon,
  CloseIcon,
  DeleteIcon,
} from 'src/components/icons';

import { FilterPatternProps } from '../props';

export type OpenFilterButtonPaddingX = '0' | 'md';
export type OpenFilterButtonDisplayType = 'default' | 'inline';
type Variant = 'sm' | 'md';
type Props = Pick<
  FilterPatternProps,
  'label' | 'displayValue' | 'Icon' | 'isApplied'
> &
  Pick<ButtonProps, 'backgroundColor' | 'color'> & {
    appliedLabel?: string;
    onClick: () => void;
    variant?: Variant;
    isDisabled?: boolean;
    height?: ResponsiveValue<string>;
    paddingX?: OpenFilterButtonPaddingX;
    showResetButton?: boolean;
    resetButtonAriaLabel?: string;
    onResetFilter?: () => void;
    displayType?: OpenFilterButtonDisplayType;
  };

const heightFromVariant: Record<Variant, ResponsiveValue<string>> = {
  sm: 'md',
  md: 'lg',
};

const disabledColor = 'gray.300';

const getColor = (
  isDisabled: boolean,
  color: ChakraProps['color'],
): ChakraProps['color'] => {
  if (isDisabled) return disabledColor;
  return color;
};

const getResetButtonConfig = (
  displayType: OpenFilterButtonDisplayType,
  iconColor: ChakraProps['color'],
  paddingX: OpenFilterButtonPaddingX,
) => {
  if (displayType === 'inline') {
    return {
      icon: <CloseIcon color={iconColor} w="xs" h="xs" />,
      w: 'md',
      minW: 'md',
      borderLeftColor: 'white',
      borderLeftWidth: '1px',
    };
  }
  return {
    icon: <DeleteIcon color={iconColor} />,
    paddingRight: paddingX,
  };
};

const getMainButtonRightPadding = (
  shouldDisplayResetButton: boolean,
  displayType: OpenFilterButtonDisplayType,
  paddingX: OpenFilterButtonPaddingX,
): OpenFilterButtonPaddingX | 'md' | 'sm' => {
  if (!shouldDisplayResetButton) return paddingX;
  return displayType === 'inline' ? 'md' : 'sm';
};

const getChevronIconSize = (displayType: OpenFilterButtonDisplayType) => {
  return displayType === 'inline' ? { w: 'xs', h: 'xs' } : { w: 'sm', h: 'sm' };
};

const getRightIcon = (
  shouldDisplayResetButton: boolean,
  iconColor: ChakraProps['color'],
  chevronIconSize: { w: string; h: string },
) => {
  if (shouldDisplayResetButton) return undefined;
  return <ChevronRightSmallIcon color={iconColor} {...chevronIconSize} />;
};

const renderInlineContent = (
  label: string,
  appliedLabel?: string,
  displayValue?: string,
  isApplied?: boolean,
  Icon?: React.ComponentType<{
    h?: string;
    w?: string;
    mr?: string;
    ml?: string;
  }>,
) => (
  <chakra.span
    overflow="hidden"
    whiteSpace="nowrap"
    display="flex"
    alignItems="center"
    w="full"
    minW="0"
  >
    {Icon ? <Icon h="xs" w="xs" mr="xs" /> : null}
    <chakra.span overflow="hidden" textOverflow="ellipsis">
      {[
        isApplied ? (appliedLabel ?? label) : label,
        isApplied ? displayValue : undefined,
      ]
        .filter(Boolean)
        .join(': ')}
    </chakra.span>
  </chakra.span>
);

const renderDefaultContent = (
  label: string,
  displayValue?: string,
  isApplied?: boolean,
  Icon?: React.ComponentType<{
    h?: string;
    w?: string;
    mr?: string;
    ml?: string;
  }>,
) => (
  <chakra.span display="flex" justifyContent="space-between" w="full" minW="0">
    <chakra.span
      mr="2xl"
      whiteSpace="nowrap"
      display="flex"
      alignItems="center"
      flexShrink={0}
    >
      {label}
      {Icon ? <Icon h="xs" w="xs" ml="xs" /> : null}
    </chakra.span>
    <chakra.span
      fontWeight="bold"
      overflow="hidden"
      textOverflow="ellipsis"
      whiteSpace="nowrap"
      minW="0"
      flex="1"
      textAlign="right"
    >
      {displayValue && isApplied ? displayValue : null}
    </chakra.span>
  </chakra.span>
);

const renderResetButton = (
  shouldDisplayResetButton: boolean,
  resetButtonAriaLabel: string,
  isDisabled: boolean,
  onResetFilter?: () => void,
  resetButtonConfig?: Record<string, unknown>,
) => {
  if (!shouldDisplayResetButton) return null;
  return (
    <IconButton
      aria-label={resetButtonAriaLabel}
      h="full"
      isDisabled={isDisabled}
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
      onClick={onResetFilter}
      {...resetButtonConfig}
    />
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
  backgroundColor = 'unset',
  color,
  showResetButton = true,
  resetButtonAriaLabel = 'Reset filter',
  onResetFilter,
  displayType = 'default',
}) => {
  const shouldDisplayResetButton =
    showResetButton && isApplied && !!onResetFilter;

  const iconColor = getColor(isDisabled, color || 'gray.500');
  const buttonColor = getColor(isDisabled, color || 'gray.900');

  const mainButtonRightPadding = getMainButtonRightPadding(
    shouldDisplayResetButton,
    displayType,
    paddingX,
  );
  const chevronIconSize = getChevronIconSize(displayType);

  const resetButtonConfig = getResetButtonConfig(
    displayType,
    iconColor,
    paddingX,
  );

  const rightIcon = getRightIcon(
    shouldDisplayResetButton,
    iconColor,
    chevronIconSize,
  );

  const buttonContent =
    displayType === 'inline'
      ? renderInlineContent(label, appliedLabel, displayValue, isApplied, Icon)
      : renderDefaultContent(label, displayValue, isApplied, Icon);

  return (
    <ButtonGroup
      h={height ?? heightFromVariant[variant]}
      isAttached
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
        cursor={isDisabled ? 'not-allowed' : 'pointer'}
        color={buttonColor}
        isDisabled={isDisabled}
        rightIcon={rightIcon}
        onClick={onClick}
      >
        {buttonContent}
      </ChakraButton>
      {renderResetButton(
        shouldDisplayResetButton,
        resetButtonAriaLabel,
        isDisabled,
        onResetFilter,
        resetButtonConfig,
      )}
    </ButtonGroup>
  );
};
