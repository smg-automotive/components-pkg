import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const OptimizerIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Optimizer',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Optimizer icon</title>
      <g fill="none" fillRule="evenodd">
        <path
          stroke="currentColor"
          strokeLinejoin="round"
          d="M7.364 5.306 2.87 9.13M13.972 6.5l-3.917-1.701"
        />
        <path
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.051"
          d="M20.921 2.936 16.81 5.69"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M8.667 2.5a2 2 0 1 1-.002 4.001A2 2 0 0 1 8.667 2.5M22 0a2 2 0 1 1-.002 4.001A2 2 0 0 1 22 0M15.333 4.5a2 2 0 1 1-.001 4.001 2 2 0 0 1 .001-4.001M2 7.645a2 2 0 1 1-.001 4.001A2 2 0 0 1 2 7.645"
          clipRule="evenodd"
        />
        <path
          stroke="currentColor"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M.75 23.25h22.5"
        />
        <path
          stroke="currentColor"
          strokeLinecap="square"
          strokeWidth="1.889"
          d="M6.25 18.48h-4V24h4z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.941"
          d="m13.75 10.752-4-.002V24h4z"
        />
        <path
          stroke="currentColor"
          strokeWidth="1.922"
          d="M21.25 15.167h-4V24h4z"
        />
      </g>
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
