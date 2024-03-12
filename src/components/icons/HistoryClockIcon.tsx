import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const HistoryClockIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'History Clock',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>History clock icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 12.581a8 8 0 0 0-8.838-7.957l-.206-1.989q.515-.054 1.044-.054c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10q0-.528.054-1.044l1.99.206A8 8 0 1 0 20 12.581m-7-6v5.5l3.6 2.7-1.2 1.6-4.4-3.3v-5.5zm-5.702-.473a8 8 0 0 1 1.448-.838L7.93 3.444a10 10 0 0 0-1.81 1.047zM4.69 9.327a8 8 0 0 1 .838-1.448L3.91 6.702a10 10 0 0 0-1.047 1.81z"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
