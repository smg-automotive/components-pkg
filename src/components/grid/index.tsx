import React, { FC } from 'react';
import { Grid as ChakraGrid, GridProps } from '@chakra-ui/react';

type Props = Pick<
  GridProps,
  | 'children'
  | 'templateAreas'
  | 'gap'
  | 'templateColumns'
  | 'templateRows'
  | 'padding'
>;

const Grid: FC<Props> = ({ children, ...props }) => {
  return <ChakraGrid {...props}>{children}</ChakraGrid>;
};

export default Grid;
export { Props as GridProps };
