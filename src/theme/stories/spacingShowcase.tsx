import React, { FC } from 'react';
import { Box, Td, Tr, useTheme } from '@chakra-ui/react';

type Props = {
  name: string;
};

const SpacingShowCase: FC<Props> = ({ name }) => {
  const theme = useTheme();
  const unitRem = parseFloat(theme.spacing[name]);
  const unitPixel = unitRem / 0.0625;
  return (
    <Tr border="1px" borderColor={theme.colors.gray[100]}>
      <Td>{name}</Td>
      <Td>{`${unitRem}rem`}</Td>
      <Td>{`${unitPixel}px`}</Td>
      <Td>
        <Box bg={theme.colors.gray[200]} p={theme.spacing[name]}>
          <Box bg={theme.colors.white} textAlign="center" width="auto">
            {name}
          </Box>
        </Box>
      </Td>
    </Tr>
  );
};
export default SpacingShowCase;
