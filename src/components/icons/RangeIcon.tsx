import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const RangeIcon = createIcon({
  displayName: 'Range',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7.194 10.703a.992.992 0 0 1-1.416 0c-1.02-1.039-2.782-3.115-2.782-5.058 0-2.015 1.563-3.649 3.49-3.649 1.928 0 3.491 1.634 3.491 3.649 0 1.943-1.763 4.02-2.783 5.058Z"
        clipRule="evenodd"
      />
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.485 5.337a.25.25 0 1 0 0 .498.25.25 0 0 0 0-.498"
      />
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m20.163 17.556-2.89 1.71a.552.552 0 0 0 0 .95l2.89 1.71c.371.22.84-.048.84-.48v-3.411c0-.431-.469-.7-.84-.48Z"
        clipRule="evenodd"
      />
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13.001 19.702H7.999a2 2 0 0 1-2-2.001v0a2 2 0 0 1 2-2.001h5.653a2.35 2.35 0 0 0 2.35-2.35v0a2.35 2.35 0 0 0-2.35-2.35H11"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
    fill: 'none',
  },
});
