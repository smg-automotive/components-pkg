import React, { FC } from 'react';

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react';

interface Props {
  typeMessage: 'error' | 'warning' | 'info' | 'success';
}

const AlertMessage: FC<Props> = ({ typeMessage }) => {
  return (
    <Alert status={typeMessage}>
      <AlertIcon />
      <AlertTitle>Your browser is outdated!</AlertTitle>
      <AlertDescription>
        Your Chakra experience may be degraded.
      </AlertDescription>
    </Alert>
  );
};

export default AlertMessage;
