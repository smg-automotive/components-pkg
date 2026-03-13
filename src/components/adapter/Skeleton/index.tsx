import React, { PropsWithChildren } from 'react';

import {
  Skeleton as SkeletonComponents,
  SkeletonProps,
} from 'src/components/skeleton';

type Props = Omit<SkeletonProps, 'loading'> & {
  isLoaded?: boolean;
};

export const Skeleton: React.FC<PropsWithChildren<Props>> = (props) => {
  const { isLoaded, ...rest } = props;
  return <SkeletonComponents {...rest} loading={!isLoaded} />;
};
