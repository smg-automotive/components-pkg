import React, { FC } from 'react';
import { Box, Switch } from '@chakra-ui/react';

const ThemeSwitch: FC = (props) => {
  console.log('ThemeSwitch render');
  return (
    <Box
      borderRadius="sm"
      padding="md"
      margin="md"
      backgroundColor="gray.200"
      display="inline-block"
      boxShadow="md"
    >
      <span>🚗</span>
      &nbsp;
      <Switch {...props} />
      &nbsp;
      <span>🏍️</span>
    </Box>
  );
};

export default ThemeSwitch;
