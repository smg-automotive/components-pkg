import React, { FC } from 'react';
import { Box, Text, useTheme } from '@chakra-ui/react';

type Props = {
  name: string;
};

const ShadowShowcase: FC<Props> = ({ name }) => {
  const theme = useTheme();
  return (
    <Box
      m={5}
      w={150}
      h={150}
      shadow={theme.shadows[name]}
      border="1px"
      borderColor="gray.100"
    >
      <Text align="center">{name}</Text>
    </Box>
  );
};

export default ShadowShowcase;
