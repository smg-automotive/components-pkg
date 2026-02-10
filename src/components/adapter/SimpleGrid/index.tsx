import React, { FC } from 'react';
import { SimpleGridProps } from '@chakra-ui/react';

type Props = SimpleGridProps & {
  spacing?: SimpleGridProps['gap'];
  spacingX?: SimpleGridProps['gapX'];
  spacingY?: SimpleGridProps['gapY'];
};

export const SimpleGrid: FC<Props> = (props) => {
  const { spacing, spacingX, spacingY, ...rest } = props;
  return (
    <SimpleGrid
      {...rest}
      {...(spacing ? { gap: spacing } : {})}
      {...(spacingX ? { gapX: spacingX } : {})}
      {...(spacingY ? { gapY: spacingY } : {})}
    />
  );
};
