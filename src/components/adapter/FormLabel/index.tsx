import React, { FC, PropsWithChildren } from 'react';
import { Field } from '@chakra-ui/react';

export const FormLabel: FC<PropsWithChildren> = ({ children }) => {
  return <Field.Label>{children}</Field.Label>;
};
