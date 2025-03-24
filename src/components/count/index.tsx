import React, { FC } from 'react';
import { chakra, RecipeVariantProps, useRecipe } from '@chakra-ui/react';

import { countRecipe } from 'src/themes/shared/recipes/count';

type CountVariantProps = RecipeVariantProps<typeof countRecipe>;

export type CountProps = CountVariantProps & {
  count: number;
  ariaLabel?: string;
};

export const Count: FC<CountProps> = ({ count, ariaLabel, ...props }) => {
  const recipe = useRecipe({ key: 'count' });
  const [recipeProps] = recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);

  return (
    <chakra.span css={styles} aria-label={ariaLabel}>
      {count}
    </chakra.span>
  );
};
