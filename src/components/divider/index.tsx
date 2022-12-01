import React, { FC } from 'react';
import {
  Divider as ChakraDivider,
  DividerProps as ChakraDividerProps,
} from '@chakra-ui/react';

type DividerProps = Pick<ChakraDividerProps, 'borderColor'>;

const Divider: FC<DividerProps> = ({ ...props }) => {
  return <ChakraDivider {...props} />;
};

export default Divider;
