import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const ResetFiltersIcon = createIcon({
  displayName: 'ResetFilters',
  viewBox: '0 0 16 17',
  path: (
    <>
      <title>Reset filters icon</title>
      <path
        fill="currentColor"
        d="M12.5985 5.65715C11.5742 4.05644 9.79452 2.9975 7.77194 2.9975C4.59795 2.9975 2.02493 5.60391 2.02493 8.81909C2.02493 12.0343 4.59795 14.6407 7.77194 14.6407C9.35159 14.6407 10.7807 13.9964 11.8206 12.9508L13.2472 14.4065C11.8434 15.8181 9.90745 16.6919 7.77194 16.6919C3.47961 16.6919 0 13.1671 0 8.81909C0 4.47106 3.47961 0.946289 7.77194 0.946289C10.3064 0.946289 12.5565 2.1747 13.9751 4.0756V0.692383H16V7.70836H9.37395V5.65715H12.5985Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
