import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const DaylightIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Daylight',
  viewBox: '0 0 48 48',
  path: (
    <>
      <title>Daylight icon</title>
      <path
        fill="currentColor"
        d="M24 15a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 16a7 7 0 1 1 0-14 7 7 0 0 1 0 14ZM23 7.04h2v6h-2v-6Zm12 16h6v2h-6v-2Zm-12 12h2v6h-2v-6Zm8.586-1.993L33 31.633l4.419 4.42-1.415 1.414-4.418-4.42ZM10.587 12.042l1.415-1.414 4.411 4.413L15 16.455l-4.413-4.413ZM7 23.04h6v2H7v-2Zm24.58-7.995 4.418-4.42 1.415 1.415-4.42 4.42-1.413-1.415ZM10.586 36.037l4.412-4.413 1.415 1.414L12 37.451l-1.414-1.414Z"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
