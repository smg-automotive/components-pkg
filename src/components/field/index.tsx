import React, { FC, PropsWithChildren } from 'react';
import { Button, Field as ChakraField, Link } from '@chakra-ui/react';

import Tooltip from '../tooltip';
import { Stack } from '../stack';
import { TooltipIcon } from '../icons';

// TODO:
// import FormLabel from '../../../src-v2/components/formLabel';

export type FieldProps = {
  isDisabled?: boolean;
  isRequired?: boolean;
  errorMessage?: string;
  id: string;
  label?: string;
  hint?: string;
  tooltip?: string;
  size?: 'sm' | 'lg';
  labelButtonText?: string;
  labelButtonOnClick?: () => void;
};

export const Field: FC<PropsWithChildren<FieldProps>> = ({
  children,
  isDisabled,
  isRequired,
  errorMessage,
  id,
  label,
  hint,
  tooltip,
  labelButtonText,
  labelButtonOnClick,
  size = 'lg',
}) => {
  const isInvalid = !!errorMessage;

  const formLabel = (
    <ChakraField.Label htmlFor={id}>
      {label}
      <ChakraField.RequiredIndicator />
    </ChakraField.Label>
  );

  const formLabelWithTooltip = (
    <Stack direction="row" gap="sm" align="center">
      {formLabel}
      <Tooltip label={tooltip}>
        <TooltipIcon pos="relative" bottom="xxs" />
      </Tooltip>
    </Stack>
  );

  const formLabelWithButton = (
    <Stack direction="row" justify="space-between" width="full">
      {formLabel}
      <Link
        as={Button}
        onClick={labelButtonOnClick}
        textStyle="body-small"
        color="blue.700"
        padding="0"
      >
        {labelButtonText}
      </Link>
    </Stack>
  );

  const formLabelWithTooltipAndButton = (
    <Stack direction="row" justify="space-between" width="full">
      {formLabelWithTooltip}
      <Link
        as={Button}
        onClick={labelButtonOnClick}
        textStyle="body-small"
        color="blue.700"
        padding="0"
      >
        {labelButtonText}
      </Link>
    </Stack>
  );

  let labelComponent = null;

  if (label) {
    if (tooltip && labelButtonText) {
      labelComponent = formLabelWithTooltipAndButton;
    } else if (tooltip) {
      labelComponent = formLabelWithTooltip;
    } else if (labelButtonText) {
      labelComponent = formLabelWithButton;
    } else {
      labelComponent = formLabel;
    }
  }

  return (
    <ChakraField.Root
      size={size}
      disabled={isDisabled}
      invalid={isInvalid}
      required={isRequired}
      id={id}
    >
      {labelComponent}
      {children}
      <ChakraField.ErrorText>{errorMessage}</ChakraField.ErrorText>
      {hint ? <ChakraField.HelperText>{hint}</ChakraField.HelperText> : null}
    </ChakraField.Root>
  );
};
