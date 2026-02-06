import React, { FC } from 'react';
import { SimpleGridProps } from '@chakra-ui/react';

type Props = SimpleGridProps & {
  spacing?: SimpleGridProps['gap'];
  spacingX?: SimpleGridProps['gapX'];
};

export const SimpleGrid: FC<Props> = (props) => {
  const { spacing, spacingX, ...rest } = props;
  return <SimpleGrid {...rest} gap={spacing} gapX={spacingX} />;
};
