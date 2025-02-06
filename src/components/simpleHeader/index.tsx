import React, { FC } from 'react';

import { chakra, Container, useSlotRecipe } from '@chakra-ui/react';

import { Center } from '../center';

import { CloseIcon } from '../icons';

import { Flex } from '../flex';

export interface SimpleHeaderProps {
  title: string;
  url: string;
}

export const SimpleHeader: FC<SimpleHeaderProps> = ({ title, url, ...props }) => {
  const recipe = useSlotRecipe({ key: 'simpleHeader' });
  const [recipeProps] = recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);

  return (
    <chakra.header css={styles.header}>
      <Center>
        <Flex
          width="full"
          maxWidth="container.lg"
          minHeight={{ '2xs': 'xl', md: '2xl' }}
          paddingX={{ '2xs': 'lg', lg: '0' }}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex justify="space-between" minWidth="full">
            <chakra.h1 css={styles.title}>{title}</chakra.h1>
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
        </Flex>
      </Center>
    </chakra.header>
  );
};
