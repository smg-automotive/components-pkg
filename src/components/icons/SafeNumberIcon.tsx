import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const SafeNumberIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'SafeNumber',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Safe Number icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m12.718 1.236-.47-.26-.476.25-8.238 4.325-.534.28v12.931l.468.293 8.238 5.165.62.389.558-.475 5.447-4.645.807-.687-.734-.764-1.652-1.72.932-.932-3.173-3.173-1.586 1.587-1.587-1.587 1.587-1.586-3.173-3.173-1.708 1.708A3.18 3.18 0 0 0 7.1 11.42a3.176 3.176 0 0 0 .944 2.258l3.416 3.416a3.17 3.17 0 0 0 2.258.936 3.17 3.17 0 0 0 1.534-.391l.978 1.018-4.084 3.482-7.15-4.482V7.039l7.229-3.795 6.86 3.781v3.249h1.996V5.845l-.516-.284-7.847-4.325z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
