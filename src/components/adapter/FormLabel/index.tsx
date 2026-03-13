import React, { FC, PropsWithChildren } from 'react';
import { Field } from '@chakra-ui/react';

export const FormLabel: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Field.Root>
      <Field.Label>{children}</Field.Label>
    </Field.Root>
  );
};
