import React, { FC } from 'react';
import { chakra, useRecipe } from '@chakra-ui/react';

export type CountVariant =
  | 'primary'
  | 'inverted'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

export type CountProps = {
  count: number;
  variant?: CountVariant;
  ariaLabel?: string;
};

export const Count: FC<CountProps> = ({ count, variant, ariaLabel }) => {
  const recipe = useRecipe({ key: 'count' });
  const styles = recipe({ variant });

  return (
    <chakra.span css={styles} aria-label={ariaLabel}>
      {count}
    </chakra.span>
  );
};
