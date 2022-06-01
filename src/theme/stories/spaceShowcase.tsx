import React, { FC } from 'react';
import { Box, Td, Tr, useTheme } from '@chakra-ui/react';

type Props = {
  name: string;
};

const SpacingShowCase: FC<Props> = ({ name }) => {
  const theme = useTheme();
  const unitRem = parseFloat(theme.space[name]);
  const unitPixel = unitRem / 0.0625;
  return (
    <Tr border="1px" borderColor="gray.100">
      <Td>{name}</Td>
      <Td>{`${unitRem}rem`}</Td>
      <Td>{`${unitPixel}px`}</Td>
      <Td>
        <Box bg="gray.200" p={theme.space[name]}>
          <Box bg="white" textAlign="center" width="auto">
            {name}
          </Box>
        </Box>
      </Td>
    </Tr>
  );
};
export default SpacingShowCase;
