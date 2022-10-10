import React, { FC, PropsWithChildren } from 'react';
import {
  FormControl as ChakraFormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/react';

type Props = {
  isDisabled?: boolean;
  isRequired?: boolean;
  errorMessage?: string;
  id: string;
  label?: string;
  hint?: string;
};

const FormControl: FC<PropsWithChildren<Props>> = ({
  children,
  isDisabled,
  isRequired,
  errorMessage,
  id,
  label,
  hint,
}) => {
  const isInvalid = !!errorMessage;

  return (
    <ChakraFormControl
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isRequired={isRequired}
      id={id}
    >
      {label ? (
        <FormLabel htmlFor={id}>
          {label}
          {isRequired ? <>&nbsp;</> : null}
        </FormLabel>
      ) : null}
      {children}
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
      {hint ? <FormHelperText>{hint}</FormHelperText> : null}
    </ChakraFormControl>
  );
};

export default FormControl;
export { Props as FormControlProps };
