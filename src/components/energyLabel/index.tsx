import React, { FC } from 'react';
import { type RecipeVariantProps, useSlotRecipe } from '@chakra-ui/react';

import { energyLabelRecipe } from 'src/themes/shared/slotRecipes/energyLabel';

import { Text } from '../text';
import { Flex } from '../flex';
import { Box } from '../box';

type RecipeProps = RecipeVariantProps<typeof energyLabelRecipe>;
export type EnergyLabelProps = Required<Pick<RecipeProps, 'efficiency'>> &
  RecipeProps;

export const EnergyLabel: FC<EnergyLabelProps> = (props) => {
  const { efficiency } = props;
  const recipe = useSlotRecipe({ key: 'energyLabel' });
  const [recipeProps] = recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);

  return (
    <Flex css={styles.root}>
      <Box css={styles.triangle} />
      <Flex css={styles.textWrapper}>
        <Text css={styles.text}>{efficiency.toString()}</Text>
      </Flex>
    </Flex>
  );
};
