import React, { FC } from 'react';

import { chakra, useSlotRecipe } from '@chakra-ui/react';

import { Flex } from '../flex';

import { CloseIcon } from '../icons';

import { Center } from '../center';


export interface SimpleHeaderProps {
  title: string;
  url: string;
}

export const SimpleHeader: FC<SimpleHeaderProps> = ({ ...props }) => {
  const recipe = useSlotRecipe({ key: 'simpleHeader' });
  const [recipeProps, componentProps] = recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);
  const { title, url } = componentProps;

  return (
    <chakra.header css={styles.header}>
      <Center>
        <Flex css={styles.mainContainer}>
          <Flex justify="space-between" minWidth="full">
            <chakra.h1 css={styles.title}>{title}</chakra.h1>
            <Flex css={styles.iconWrapper}>
              <a href={url}>
                <CloseIcon />
              </a>
            </Flex>
          </Flex>
        </Flex>
      </Center>
    </chakra.header>
  );
};
