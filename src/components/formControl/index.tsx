import React, { FC, PropsWithChildren } from 'react';
import {
  Button,
  FormControl as ChakraFormControl,
  FormErrorMessage,
  FormHelperText,
  Link,
} from '@chakra-ui/react';

import Tooltip from '../tooltip';
import Stack from '../stack';
import { TooltipIcon } from '../icons';
import FormLabel from '../formLabel';

type Props = {
  isDisabled?: boolean;
  isRequired?: boolean;
  errorMessage?: string;
  id: string;
  label?: string;
  hint?: string;
  tooltip?: string;
  size?: 'sm' | 'lg';
  labelButtonText?: 'string';
  labelButtonOnClick?: () => void;
};

const FormControl: FC<PropsWithChildren<Props>> = ({
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
    <FormLabel htmlFor={id} size={size}>
      {label}
      {isRequired ? <>&nbsp;</> : null}
    </FormLabel>
  );

  const formLabelWithTooltip = (
    <Stack direction="row" spacing="sm" align="center">
      {formLabel}
      <Tooltip label={tooltip}>
        <TooltipIcon pos="relative" bottom="xxs" />
      </Tooltip>
    </Stack>
  );

  const formLabelWithButton = (
    <Stack direction="row" justify="space-between">
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

  return (
    <ChakraFormControl
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isRequired={isRequired}
      id={id}
    >
      {label && !tooltip && !labelButtonText ? formLabel : null}
      {label && tooltip ? formLabelWithTooltip : null}
      {label && labelButtonText ? formLabelWithButton : null}
      {children}
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
      {hint ? <FormHelperText>{hint}</FormHelperText> : null}
    </ChakraFormControl>
  );
};

export default FormControl;
export { Props as FormControlProps };
