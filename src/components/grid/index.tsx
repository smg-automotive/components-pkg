import React, { FC } from 'react';
import { SimpleGrid, SimpleGridProps } from '@chakra-ui/react';

type Props = Pick<
  SimpleGridProps,
  'minChildWidth' | 'columns' | 'spacing' | 'spacingX' | 'spacingY'
>;

const Grid: FC<Props> = (props) => <SimpleGrid {...props} />;

export default Grid;
export { Props as GridProps };
