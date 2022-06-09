import React, { FC } from 'react';
import { Td, Tr, useTheme } from '@chakra-ui/react';

type Props = {
  name: string;
};

const SizingShowCase: FC<Props> = ({ name }) => {
  const theme = useTheme();
  const unitRem = parseFloat(theme.sizes[name]);
  const unitPixel = unitRem / 0.0625;
  return (
    <Tr border="1px" borderColor="gray.100">
      <Td>{name}</Td>
      <Td>{`${unitRem}rem`}</Td>
      <Td>{`${unitPixel}px`}</Td>
    </Tr>
  );
};
export default SizingShowCase;
