import React, { FC } from 'react';

import { useSlotRecipe } from '@chakra-ui/react';

import { Text } from '../text';

import { Flex } from '../flex';

import { Box } from '../box';

export type EnergyLabelProps = {
  efficiency: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
};

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
