import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const ResetFiltersIcon = createIcon({
  displayName: 'ResetFilters',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Reset filters icon</title>
      <path
        fill="currentColor"
        d="M16.5985 8.65715C15.5742 7.05644 13.7945 5.9975 11.7719 5.9975C8.59795 5.9975 6.02493 8.60391 6.02493 11.8191C6.02493 15.0343 8.59795 17.6407 11.7719 17.6407C13.3516 17.6407 14.7807 16.9964 15.8206 15.9508L17.2472 17.4065C15.8434 18.8181 13.9075 19.6919 11.7719 19.6919C7.47961 19.6919 4 16.1671 4 11.8191C4 7.47106 7.47961 3.94629 11.7719 3.94629C14.3064 3.94629 16.5565 5.1747 17.9751 7.0756V3.69238H20V10.7084H13.374V8.65715H16.5985Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
