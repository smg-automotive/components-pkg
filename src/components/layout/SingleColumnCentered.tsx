import React, { FC, PropsWithChildren } from 'react';

import { Container } from '@chakra-ui/react';

import { Box } from 'src';

import { getSharedConfig } from 'src/themes/shared';

import { BaseLayout } from './BaseLayout';

const sharedConfig = getSharedConfig();

export type SingleColumnCenteredLayoutProps = PropsWithChildren<{
  maxContentWidth?: keyof typeof sharedConfig.theme.tokens.sizes.container;
}>;

export const SingleColumnCenteredLayout: FC<SingleColumnCenteredLayoutProps> = ({
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
