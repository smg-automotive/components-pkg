import React, { FC } from 'react';

import { SimpleGridProps } from '@chakra-ui/react';

import { SimpleGrid as ComponentsSimpleGrid } from 'src/components/simpleGrid';

type Props = SimpleGridProps & {
  columns?: SimpleGridProps['columns'];
  spacing?: SimpleGridProps['gap'];
  spacingX?: SimpleGridProps['gapX'];
  spacingY?: SimpleGridProps['gapY'];
};

export const SimpleGrid: FC<Props> = (props) => {
  const { spacing, spacingX, spacingY, ...rest } = props;
  return (
    <ComponentsSimpleGrid
      {...rest}
      {...(spacing ? { gap: spacing } : {})}
      {...(spacingX ? { gapX: spacingX } : {})}
      {...(spacingY ? { gapY: spacingY } : {})}
    />
  );
};
