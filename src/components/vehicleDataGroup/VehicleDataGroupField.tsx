import React, { FC, ReactNode } from 'react';
import { Box, chakra, ListItem, useMultiStyleConfig } from '@chakra-ui/react';

interface VehicleGroupDataFieldProps {
  label: ReactNode;
  value: ReactNode;
}

const VehicleGroupDataField: FC<VehicleGroupDataFieldProps> = ({
  label,
  value,
}) => {
  const { listItem, listItemElement } = useMultiStyleConfig(`VehicleDataGroup`);

  return (
    <ListItem>
      <Box __css={listItem}>
        <chakra.span __css={listItemElement}>{label}</chakra.span>
        <chakra.span __css={listItemElement} color="gray.900">
          {value}
        </chakra.span>
      </Box>
    </ListItem>
  );
};

export default VehicleGroupDataField;
