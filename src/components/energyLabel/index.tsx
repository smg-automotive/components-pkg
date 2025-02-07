import React, { FC } from 'react';

import { useSlotRecipe, RecipeVariantProps } from '@chakra-ui/react';

import { energyLabelRecipe } from 'src/themes/shared/slotRecipes/energyLabel';

import { Text } from '../text';

import { Flex } from '../flex';

import { Box } from '../box';

// type Efficiency = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

// export interface EnergyLabelProps {
//   efficiency: Efficiency;
// }

// export const colors: Record<Efficiency, string> = {
//   A: '#4CA651',
//   B: '#54B646',
//   C: '#CAD143',
//   D: '#FEF050',
//   E: '#F1AE3D',
//   F: '#EE6E2D',
//   G: '#D02F26',
// };

export type EnergyLabelProps = RecipeVariantProps<typeof energyLabelRecipe>

export const EnergyLabel: FC<EnergyLabelProps> = (props) => {
  const recipe = useSlotRecipe({ key: 'energyLabel' });
  const [recipeProps, componentProps] = recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);

  const { efficiency } = componentProps;

  return (
    <Flex css={styles.root}>
      <Box css={styles.triangle}
        // borderTopWidth="10px"
        // borderTopColor="transparent"
        // borderRightWidth="10px"
        // borderRightColor={colors[efficiency]}
        // borderBottomWidth="10px"
        // borderBottomColor="transparent"
      />
      <Flex css={styles.textWrapper}
        // backgroundColor={colors[efficiency]}
        // width="full"
        // height="full"
        // justifyContent="end"
        // alignItems="center"
        // paddingRight="xs"
      >
        <Text css={styles.text}>
          {efficiency}
        </Text>
      </Flex>
    </Flex>
  );
};
