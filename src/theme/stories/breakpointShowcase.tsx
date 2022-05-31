import React, { FC } from 'react';
import { Td, Tr, useTheme } from '@chakra-ui/react';

type Props = {
  name: string;
};

const BreakpointShowCase: FC<Props> = ({ name }) => {
  const theme = useTheme();
  return (
    <Tr border="1px" borderColor="gray.100">
      <Td>{name}</Td>
      <Td>{theme.breakpoints[name]}</Td>
    </Tr>
  );
};
export default BreakpointShowCase;
