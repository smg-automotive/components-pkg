import React, { FC } from 'react';

import { useSlotRecipe, RecipeVariantProps } from '@chakra-ui/react';

import { energyLabelRecipe } from 'src/themes/shared/slotRecipes/energyLabel';

import { Text } from '../text';

import { Flex } from '../flex';

import { Box } from '../box';

export type EnergyLabelProps = RecipeVariantProps<typeof energyLabelRecipe>;

export const EnergyLabel: FC<EnergyLabelProps> = (props) => {
  const recipe = useSlotRecipe({ key: 'energyLabel' });
  const [recipeProps] = recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);
  const { efficiency } = recipeProps;

  return (
    <Flex css={styles.root}>
      <Box css={styles.triangle} />
      <Flex css={styles.textWrapper}>
        <Text css={styles.text}>
          {String(efficiency)}
        </Text>
      </Flex>
    </Flex>
  );
};
