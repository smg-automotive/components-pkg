import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const DigitalContractIcon: ComponentWithAs<'svg', IconProps> =
  createIcon({
    displayName: 'Digital Contract',
    viewBox: '0 0 24 24',
    path: (
      <>
        <title>Digital Contract icon</title>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m15.965 1.971-1.982.011h-12V18.96h12v-7.98l1.982-2.236v12.199H0V0h15.965zm1.465-.124L8.186 12.56l-.597 2.27 2.157-.92L18.99 3.196zM9.573 16.142H5.902v1.906h3.671z"
          clipRule="evenodd"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  });
