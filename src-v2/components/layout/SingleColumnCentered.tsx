import React, { FC, PropsWithChildren } from 'react';

import { Box, Container } from '@chakra-ui/react';

import { sizes } from 'src/themes/shared/sizes';

import BaseLayout from './BaseLayout';

export type SingleColumnCenteredLayoutProps = PropsWithChildren<{
  maxContentWidth?: keyof typeof sizes.container;
}>;

const SingleColumnCenteredLayout: FC<SingleColumnCenteredLayoutProps> = ({
  children,
  maxContentWidth = 'md',
}) => {
  const isSingleChild = !Array.isArray(children);
  const [stepper, content] = isSingleChild ? [null, children] : children;

  return (
    <Container width="full" height="full" background="gray.100">
      <BaseLayout header={null} maxContentWidth={maxContentWidth}>
        {!stepper ? null : <Box marginBottom="2xl">{stepper}</Box>}
        <Box>{content}</Box>
      </BaseLayout>
    </Container>
  );
};

export default SingleColumnCenteredLayout;
