import React, { FC } from 'react';
import {
  BoxProps,
  chakra,
  RecipeVariantProps,
  useSlotRecipe,
} from '@chakra-ui/react';

import { articleTeaserRecipe } from 'src/themes/shared/slotRecipes/articleTeaser';

import { Stack } from '../stack';

type ArticleTeaserVariantProps = RecipeVariantProps<typeof articleTeaserRecipe>;

export type ArticleTeaserProps = ArticleTeaserVariantProps & {
  title: string;
  text: string;
  imageUrl: string;
  url: string;
  maxImgW?: BoxProps['maxWidth'];
};

export const ArticleTeaser: FC<ArticleTeaserProps> = ({
  maxImgW = '4xl',
  ...props
}) => {
  const recipe = useSlotRecipe({ key: 'articleTeaser' });
  const [recipeProps, componentProps] = recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);

  const { title, text, imageUrl, url } = componentProps;

  return (
    <article>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Stack direction="column" gap="lg" align="center">
          <chakra.img maxWidth={maxImgW} src={imageUrl} />
          <Stack direction="column" gap="sm" width="full">
            <chakra.h2 css={styles.title}>{title}</chakra.h2>
            <chakra.span css={styles.text}>{text}</chakra.span>
          </Stack>
        </Stack>
      </a>
    </article>
  );
};
