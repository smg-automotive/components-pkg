import React, { FC } from 'react';
import { type RecipeVariantProps, useSlotRecipe } from '@chakra-ui/react';

import { markedTextRecipe } from 'src/themes/shared/slotRecipes/markedText';

import { Box, type BoxProps } from 'src/components/box';

import { MarkedTextMark } from './mark';

type SharedProps = Exclude<
  BoxProps,
  'position' | 'width' | 'display' | 'alignItems'
> &
  RecipeVariantProps<typeof markedTextRecipe>;

type HighlightProps = SharedProps & {
  variant?: 'highlight';
  highlightColor?: 'white' | 'gray.100' | 'brand.primary';
};

type UnderlineProps = SharedProps & {
  variant: 'underline';
  highlightColor?: never;
};

export type MarkedTextProps = HighlightProps | UnderlineProps;

export const MarkedText: FC<MarkedTextProps> = ({ children, ...props }) => {
  const recipe = useSlotRecipe({ key: 'markedText' });
  const [recipeProps, boxProps] = recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);

  const { variant, highlightColor } = props;

  return (
    <Box css={styles.container} {...boxProps}>
      <MarkedTextMark variant={variant} highlightColor={highlightColor} />
      <Box css={styles.text}>{children}</Box>
    </Box>
  );
};
