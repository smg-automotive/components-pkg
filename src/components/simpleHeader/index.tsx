import React, { FC } from 'react';

import { chakra, useSlotRecipe } from '@chakra-ui/react';

import { Center } from '../center';

import { CloseIcon } from '../icons';

import { Flex } from '../flex';

import { H1 } from '../heading';

export interface SimpleHeaderProps {
  title: string;
  url: string;
}

export const SimpleHeader: FC<SimpleHeaderProps> = ({ title, url, ...props }) => {
  const recipe = useSlotRecipe({ key: 'simpleHeader' });
  const [recipeProps] = recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);

  return (
    <chakra.header>
      <Center>
        <Flex
          paddingX={{ '2xs': 'lg', 'lg': '0' }}
          minHeight={{ '2xs': 'xl', md: '2xl' }}
          alignItems="center"
          justify="space-between"
          minWidth="full"
        >
          <H1 css={styles.title}>{title}</H1>
          <Flex
            alignSelf="baseline"
            paddingLeft="md"
            paddingTop={{ md: 'sm' }}
          >
            <a href={url}>
              <CloseIcon />
            </a>
          </Flex>
        </Flex>
      </Center>
    </chakra.header>
  );
};
