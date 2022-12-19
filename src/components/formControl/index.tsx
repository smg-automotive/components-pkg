import React, { FC, PropsWithChildren } from 'react';
import {
  FormControl as ChakraFormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/react';

import Tooltip from '../tooltip';
import Stack from '../stack';
import { TooltipIcon } from '../icons';

type Props = {
  isDisabled?: boolean;
  isRequired?: boolean;
  errorMessage?: string;
  id: string;
  label?: string;
  hint?: string;
  tooltip?: string;
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
}) => {
  const isInvalid = !!errorMessage;

  const formLabel = (
    <FormLabel htmlFor={id}>
      {label}
      {isRequired ? <>&nbsp;</> : null}
    </FormLabel>
  );

  const formLabelWithTooltip = (
    <Stack direction="row" spacing="sm">
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
