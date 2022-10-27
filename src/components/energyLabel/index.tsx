import React, { FC } from 'react';

import Text from '../text';
import Flex from '../flex';
import Box from '../box';

type Efficiency = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

interface Props {
  efficiency: Efficiency;
}

const EnergyLabel: FC<Props> = ({ efficiency }) => {
  const colors: Record<Efficiency, `#${string}`> = {
    A: '#4CA651',
    B: '#54B646',
    C: '#CAD143',
    D: '#FEF050',
    E: '#F1AE3D',
    F: '#EE6E2D',
    G: '#D02F26',
  };

  return (
    <Flex height="20px" width="40px">
      <Box
        width="0"
        height="0"
        borderTopWidth="10px"
        borderTopColor="transparent"
        borderRightWidth="10px"
        borderRightColor={colors[efficiency]}
        borderBottomWidth="10px"
        borderBottomColor="transparent"
      />
      <Flex
        backgroundColor={colors[efficiency]}
        width="full"
        height="full"
        justifyContent="end"
        alignItems="center"
        paddingRight="xxs"
      >
        <Text color="white" textStyle="heading4">
          {efficiency}
        </Text>
      </Flex>
    </Flex>
  );
};

export default EnergyLabel;
