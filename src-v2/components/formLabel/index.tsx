import React, { FC, PropsWithChildren } from 'react';
import {
  FormLabel as ChakraFormLabel,
  FormLabelProps as ChakraFormLabelProps,
} from '@chakra-ui/react';

type FormLabelProps = { size?: 'sm' | 'lg' } & Pick<
  ChakraFormLabelProps,
  'htmlFor'
>;

const FormLabel: FC<PropsWithChildren<FormLabelProps>> = ({
  size = 'lg',
  htmlFor,
  children,
}) => (
  <ChakraFormLabel size={size} htmlFor={htmlFor}>
    {children}
  </ChakraFormLabel>
);

export default FormLabel;
