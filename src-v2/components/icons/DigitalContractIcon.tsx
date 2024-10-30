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
          d="m18.965 3.971-1.982.011h-12V20.96h12v-7.98l1.982-2.236v12.198H3V2h15.965V3.97zm1.465-.124-9.244 10.712-.598 2.27 2.158-.92L21.99 5.195l-1.56-1.349zm-7.857 14.295H8.902v1.906h3.671v-1.906z"
          clipRule="evenodd"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  });
