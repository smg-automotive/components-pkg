import React, { FC, PropsWithChildren } from 'react';
import {
  Box,
  Button,
  Field as ChakraField,
  Link,
  useSlotRecipe,
} from '@chakra-ui/react';

import Tooltip from '../tooltip';
import { TooltipIcon } from '../icons';

// TODO:
// import FormLabel from '../../../src-v2/components/formLabel';

export type FieldProps = {
  id: string;
  disabled?: boolean;
  required?: boolean;
  errorMessage?: string;
  label?: string;
  hint?: string;
  tooltip?: string;
  size?: 'sm' | 'lg';
  labelButtonText?: string;
  labelButtonOnClick?: () => void;
};

export const Field: FC<PropsWithChildren<FieldProps>> = ({
  children,
  disabled,
  required,
  errorMessage,
  id,
  label,
  hint,
  tooltip,
  labelButtonText,
  labelButtonOnClick,
  size = 'lg',
}) => {
  const recipe = useSlotRecipe({ key: 'field' });
  const [recipeProps] = recipe.splitVariantProps({ size });
  const styles = recipe(recipeProps);

  const invalid = !!errorMessage;
  const tooltipSnippet = tooltip ? (
    <Tooltip label={tooltip}>
      <TooltipIcon pos="relative" bottom="xxs" />
    </Tooltip>
  ) : null;
  const buttonSnippet = labelButtonText ? (
    <Link as={Button} onClick={labelButtonOnClick} css={styles.button}>
      {labelButtonText}
    </Link>
  ) : null;

  return (
    <ChakraField.Root
      size={size}
      disabled={disabled}
      invalid={invalid}
      required={required}
      id={id}
    >
      <Box css={styles.labelRoot}>
        <Box css={styles.tooltipWrapper}>
          <ChakraField.Label htmlFor={id}>
            {label}
            <ChakraField.RequiredIndicator />
          </ChakraField.Label>
          {tooltipSnippet}
        </Box>
        {buttonSnippet}
      </Box>
      {children}
      <ChakraField.ErrorText>{errorMessage}</ChakraField.ErrorText>
      {hint ? <ChakraField.HelperText>{hint}</ChakraField.HelperText> : null}
    </ChakraField.Root>
  );
};
