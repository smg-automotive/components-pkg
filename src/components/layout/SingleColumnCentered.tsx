import React, { FC, PropsWithChildren } from 'react';

import { Box, Container } from '@chakra-ui/react';

import BaseLayout from './BaseLayout';

const SingleColumnCenteredLayout: FC<PropsWithChildren> = ({ children }) => {
  const isSingleChild = !Array.isArray(children);
  const [stepper, content] = isSingleChild ? [null, children] : children;

  return (
    <Container width="full" height="full" background="gray.100">
      <BaseLayout header={null} maxContentWidth="md">
        {!stepper ? null : <Box marginBottom="2xl">{stepper}</Box>}
        <Box>{content}</Box>
      </BaseLayout>
    </Container>
  );
};

export default SingleColumnCenteredLayout;
