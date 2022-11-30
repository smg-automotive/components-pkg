import React, { FC, PropsWithChildren } from 'react';
import { BoxProps as ChakraProps } from '@chakra-ui/react';

import List from '../list';
import { H4 } from '../heading';
import Box from '../box';

interface VehicleDataGroupProps extends ChakraProps {
  title?: string;
}

const VehicleDataGroup: FC<PropsWithChildren<VehicleDataGroupProps>> = ({
  title,
  children,
  ...rest
}) => (
  <Box {...rest}>
    {title ? <H4>{title}</H4> : null}
    <List mt="sm" display="flex" flexDirection="column" gap="xs">
      {children}
    </List>
  </Box>
);

export default VehicleDataGroup;
