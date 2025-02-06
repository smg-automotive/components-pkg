import React, { FC } from 'react';
import { List as ChakraList, useSlotRecipe } from '@chakra-ui/react';

export type ListProps = {
  variant?: 'icon-inside' | 'icon-outside';
  size?: 'sm' | 'md';
  start?: number;
  items: string[];
};

export const List: FC<ListProps> = ({ ...props }) => {
  const recipe = useSlotRecipe({ key: 'list' });
  const [recipeProps, componentProps] = recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);

  const { items, size, start, variant } = componentProps;

  return (
    <ChakraList.Root css={styles.root}>
      {items.map((text, index) => {
        return <ChakraList.Item key={index}>{text}</ChakraList.Item>
      })}
    </ChakraList.Root>
  );
};
