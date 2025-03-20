import React, { FC, ReactNode } from 'react';
import {
  Box,
  BoxProps,
  chakra,
  RecipeVariantProps,
  useSlotRecipe,
} from '@chakra-ui/react';

import { sectionRecipe } from 'src/themes/shared/slotRecipes/section';

import { Stack } from '../stack';

type SectionVariantProps = RecipeVariantProps<typeof sectionRecipe>;

export type SectionProps = SectionVariantProps & {
  title: string;
  text?: string;
  image?: ReactNode;
  maxImgW?: BoxProps['maxWidth'];
};

export const Section: FC<SectionProps> = ({ maxImgW = '2xl', ...props }) => {
  const recipe = useSlotRecipe({ key: 'section' });
  const [recipeProps, componentProps] = recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);

  const { title, text, image } = componentProps;

  return (
    <Stack css={styles.root}>
      {image ? (
        <Box css={styles.imageContainer} maxW={maxImgW}>
          {image}
        </Box>
      ) : null}
      <Stack css={styles.textContainer}>
        <chakra.span css={styles.title}>{title}</chakra.span>
        {text ? <chakra.span css={styles.text}>{text}</chakra.span> : null}
      </Stack>
    </Stack>
  );
};
