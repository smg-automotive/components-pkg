import React, { FC } from 'react';

import { Stack as ComponentsStack, type StackProps } from '@chakra-ui/react';

type Props = StackProps & {
  spacing?: StackProps['gap'];
};

export const Stack: FC<Props> = (props) => {
  const { spacing, ...rest } = props;
  return (
    <ComponentsStack
      {...rest}
      {...(spacing ? { gap: spacing } : {})}
      gap={spacing}
      paddingX={{ xs: 'lg', lg: 'sm' }}
    />
  );
};
