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

  const renderTooltip = (
    <Tooltip label={tooltip}>
      <TooltipIcon ml="sm" />
    </Tooltip>
  );

  return (
    <ChakraFormControl
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isRequired={isRequired}
      id={id}
    >
      {label && !tooltip ? renderLabel : null}
      {label && tooltip ? (
        <Flex justifyContent="start">
          {renderLabel}
          {renderTooltip}
        </Flex>
      ) : null}
      {children}
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
      {hint ? <FormHelperText>{hint}</FormHelperText> : null}
    </ChakraFormControl>
  );
};

export default FormControl;
export { Props as FormControlProps };
