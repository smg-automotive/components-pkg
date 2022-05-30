import React, { FC } from 'react';
import { Box, Text, useTheme } from '@chakra-ui/react';

type Props = {
  name: string;
};

const ShadowShowcase: FC<Props> = ({ name }) => {
  const theme = useTheme();
  return (
    <Box
      m={10}
      w={100}
      h={100}
      shadow={theme.shadows[name]}
      border="1px"
      borderColor="gray.100"
    >
      <Text align="center">{name}</Text>
    </Box>
  );
};

export default ShadowShowcase;
