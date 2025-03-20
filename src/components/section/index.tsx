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
  variant?: 'hero' | 'regular';
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
    <Stack direction={{ '2xs': 'column', md: 'row' }} gap="xl">
      {image ? (
        <Box maxW={maxImgW} flexShrink={0}>
          {image}
        </Box>
      ) : null}
      <Stack gap="md">
        <chakra.span css={styles.title}>{title}</chakra.span>
        {text ? <chakra.span css={styles.text}>{text}</chakra.span> : null}
      </Stack>
    </Stack>
  );
};

Section.displayName = 'Section';
