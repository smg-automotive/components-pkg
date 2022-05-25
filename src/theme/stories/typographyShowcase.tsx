import React, { FC } from 'react';
import { Text, useTheme } from '@chakra-ui/react';

type Props = {
  name: string;
};

const TypographyShowcase: FC<Props> = ({ name }) => {
  const theme = useTheme();
  return (
    <Text mb={5} style={theme.typography[name]}>
      {name}
    </Text>
  );
};

export default TypographyShowcase;
