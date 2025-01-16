import React, { FC } from 'react';
import { Separator as ChakraSeparator, type SeparatorProps } from '@chakra-ui/react';  

export const Separator: FC<SeparatorProps> = (props: SeparatorProps) => (
  <ChakraSeparator {...props} />
);

export type { SeparatorProps };