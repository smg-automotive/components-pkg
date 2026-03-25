import React, { FC, PropsWithChildren } from 'react';
import {
  Box,
  Button,
  Field as ChakraField,
  Link,
  RecipeVariantProps,
  useSlotRecipe,
} from '@chakra-ui/react';

import { fieldSlotRecipe } from 'src/themes/shared/slotRecipes/field';

import { Tooltip } from '../tooltip';
import { TooltipIcon } from '../icons';

type FieldVariantProps = RecipeVariantProps<typeof fieldSlotRecipe>;

export type FieldProps = FieldVariantProps & {
  id: string;
  disabled?: boolean;
  required?: boolean;
  errorMessage?: string;
  label?: string;
  hint?: string;
  tooltip?: string;
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
  size,
}) => {
  const recipe = useSlotRecipe({ key: 'field' });
  const [recipeProps] = recipe.splitVariantProps({ size });
  const styles = recipe(recipeProps);

  const invalid = !!errorMessage;
  const tooltipSnippet = tooltip ? (
    <Tooltip label={tooltip}>
      <TooltipIcon css={styles.tooltipIcon} pos="relative" bottom="xxs" />
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
      css={styles.root}
    >
      <Box css={styles.labelRoot}>
        <Box css={styles.tooltipWrapper}>
          {label ? (
            <ChakraField.Label htmlFor={id} css={styles.label}>
              {label}
              <ChakraField.RequiredIndicator />
            </ChakraField.Label>
          ) : null}
          {tooltipSnippet}
        </Box>
        {buttonSnippet}
      </Box>
      {children}
      <ChakraField.ErrorText css={styles.errorText}>
        {errorMessage}
      </ChakraField.ErrorText>
      {hint ? (
        <ChakraField.HelperText css={styles.helperText}>
          {hint}
        </ChakraField.HelperText>
      ) : null}
    </ChakraField.Root>
  );
};
