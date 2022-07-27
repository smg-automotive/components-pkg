import React, { FC } from 'react';

import { Box, chakra, Divider, useMultiStyleConfig } from '@chakra-ui/react';

import Stack from '../stack';

interface Props {
  title: string;
  onClose: () => void;
}

const SimpleHeading: FC<Props> = ({ title, onClose }) => {
  const styles = useMultiStyleConfig(`SimpleHeading`);

  return (
    <header>
      <Box paddingY="3xl" paddingX="5xl">
        <Stack direction="row" justify="between">
          <chakra.h3 __css={styles.title}>{title}</chakra.h3>
          <chakra.div onClick={onClose}>X</chakra.div>
        </Stack>
      </Box>
      <Divider border="1px" borderColor="gray.100" />
    </header>
  );
};

export default SimpleHeading;
