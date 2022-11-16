import React, { FC } from 'react';
import { GridItem as ChakraGridItem, GridItemProps } from '@chakra-ui/react';

type Props = Pick<GridItemProps, 'children' | 'area' | 'colStart' | 'colEnd'>;

const GridItem: FC<Props> = ({ children, ...props }) => {
  return <ChakraGridItem {...props}>{children}</ChakraGridItem>;
};

export default GridItem;
export { Props as GridProps };
