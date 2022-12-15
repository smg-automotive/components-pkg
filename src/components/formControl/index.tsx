import React, { FC, PropsWithChildren } from 'react';
import {
  FormControl as ChakraFormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/react';

import Tooltip from '../tooltip';
import { TooltipIcon } from '../icons';
import Flex from '../flex';

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

  const renderLabel = (
    <FormLabel htmlFor={id}>
      {label}
      {isRequired ? <>&nbsp;</> : null}
    </FormLabel>
  );

  const renderLabelWithTooltip = (
    <Flex justifyContent="start">
      {renderLabel}
      <Tooltip label={tooltip}>
        <TooltipIcon ml="sm" pos="relative" bottom="xxs" />
      </Tooltip>
    </Flex>
  );

  return (
    <ChakraFormControl
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isRequired={isRequired}
      id={id}
    >
      {label && !tooltip ? renderLabel : null}
      {label && tooltip ? renderLabelWithTooltip : null}
      {children}
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
      {hint ? <FormHelperText>{hint}</FormHelperText> : null}
    </ChakraFormControl>
  );
};

export default FormControl;
export { Props as FormControlProps };
