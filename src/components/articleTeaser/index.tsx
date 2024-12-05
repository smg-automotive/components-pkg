import React, { FC } from 'react';
import { chakra, ResponsiveValue, useSlotRecipe } from '@chakra-ui/react';

import { Sizes } from 'src/themes';

import Stack from '../stack';

export type Props = {
  title: string;
  text: string;
  imageUrl: string;
  url: string;
  maxImgW?: ResponsiveValue<Sizes>;
};

const ArticleTeaser: FC<Props> = ({
  title,
  text,
  imageUrl,
  url,
  maxImgW = '4xl',
}) => {
  const recipe = useSlotRecipe({ key: 'articleTeaser' });
  const [recipeProps, componentProps] = recipe.splitVariantProps({});
  const styles = recipe(recipeProps);

  return (
    <article>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Stack direction="column" spacing="lg" align="center">
          <chakra.img maxWidth={maxImgW} src={imageUrl} />
          <Stack direction="column" spacing="sm" width="full">
            <chakra.h2 css={styles.title}>{title}</chakra.h2>
            <chakra.span css={styles.text}>{text}</chakra.span>
          </Stack>
        </Stack>
      </a>
    </article>
  );
};

export { ArticleTeaser };
