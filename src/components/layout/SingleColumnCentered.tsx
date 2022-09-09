import React, { FC, PropsWithChildren } from 'react';

import { Box, Center, Container } from '@chakra-ui/react';

const SingleColumnCenteredLayout: FC<PropsWithChildren> = ({ children }) => {
  const isSingleChild = !Array.isArray(children);
  const [stepper, content] = isSingleChild ? [null, children] : children;

  return (
    <Container width="full" height="full" background="gray.100">
      <Center>
        <Container
          as="main"
          width="full"
          height="full"
          maxWidth="container.md"
          paddingY="2xl"
          paddingX={{ base: 'sm', md: 0 }}
        >
          {!stepper ? null : <Box marginBottom="2xl">{stepper}</Box>}
          <Box>{content}</Box>
        </Container>
      </Center>
    </Container>
  );
};

export default SingleColumnCenteredLayout;
