import React, { FC, ReactNode } from 'react';

import Text from '../text';
import ListItem from '../list/ListItem';
import Flex from '../flex';
import Box from '../box';

interface VehicleGroupDataFieldProps {
  label: ReactNode;
  value: ReactNode;
}

const VehicleGroupDataField: FC<VehicleGroupDataFieldProps> = ({
  label,
  value,
}) => (
  <ListItem>
    <Flex columnGap="lg" wrap="wrap">
      <Box flex={1}>
        <Text color="gray.600">{label}</Text>
      </Box>
      <Box flex={1}>
        <Text color="gray.900">{value}</Text>
      </Box>
    </Flex>
  </ListItem>
);

export default VehicleGroupDataField;
