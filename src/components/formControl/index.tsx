import React, { FC, PropsWithChildren } from 'react';
import {
  FormControl as ChakraFormControl,
  FormErrorMessage,
  FormHelperText,
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

  return (
    <ChakraFormControl
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isRequired={isRequired}
      id={id}
    >
      {label && !tooltip ? formLabel : null}
      {label && tooltip ? formLabelWithTooltip : null}
      {children}
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
      {hint ? <FormHelperText>{hint}</FormHelperText> : null}
    </ChakraFormControl>
  );
};

export default FormControl;
export { Props as FormControlProps };
