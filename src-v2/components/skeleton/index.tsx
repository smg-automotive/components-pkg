import React, { FC } from 'react';
import { Skeleton as ChakraSkeleton, SkeletonProps } from '@chakra-ui/react';

const Skeleton: FC<SkeletonProps> = ({ children, ...props }) => {
  return <ChakraSkeleton {...props}>{children}</ChakraSkeleton>;
};

export default Skeleton;
