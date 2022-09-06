import React, { FC } from 'react';

import {
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Alert as ChackraAlert,
  Flex,
} from '@chakra-ui/react';

interface Props {
  typeMessage: 'error' | 'warning' | 'info' | 'success';
}

const Alert: FC<Props> = ({ typeMessage }) => {
  return (
    <ChackraAlert status={typeMessage}>
      <AlertIcon />
      <Flex direction="column">
        <AlertTitle>Your browser is outdated!</AlertTitle>
        <AlertDescription>
          Your Chakra experience may be degraded.
        </AlertDescription>
      </Flex>
    </ChackraAlert>
  );
};

export default Alert;
