import React, { FC, PropsWithChildren } from 'react';
import { Box, List, useMultiStyleConfig } from '@chakra-ui/react';

import { H4 } from '../';

interface VehicleDataGroupProps {
  title?: string;
}

const VehicleDataGroup: FC<PropsWithChildren<VehicleDataGroupProps>> = ({
  title,
  children,
  ...rest
}) => {
  const { list } = useMultiStyleConfig(`VehicleDataGroup`);

  return (
    <Box {...rest}>
      {title ? <H4>{title}</H4> : null}
      <List __css={list}>{children}</List>
    </Box>
  );
};

export default VehicleDataGroup;
