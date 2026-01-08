import React, { FC } from 'react';
import { chakra, useSlotRecipe } from '@chakra-ui/react';

interface DotsButtonProps {
  isCurrent: boolean;
}

export const DotsPaginationIndicator: FC<DotsButtonProps> = ({ isCurrent }) => {
  const recipe = useSlotRecipe({ key: 'carousel' });
  const styles = recipe();

  return (
    <chakra.span
      aria-current={isCurrent}
      css={styles.dotsPaginationIndicator}
    />
  );
};
