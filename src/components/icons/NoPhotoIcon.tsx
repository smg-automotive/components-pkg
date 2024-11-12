import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const NoPhotoIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'No photo',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>No photo icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m1.331 3.742 20 18 1.338-1.486-20-18zM2 6h.344l2.222 2H3v10h12.677l2.222 2H1V6zm7 6v-.01l5.534 4.982A5 5 0 0 1 9 11.999m10 0c0 1.048-.322 2.02-.873 2.824l-1.509-1.358a3 3 0 0 0-4.35-3.915l-1.509-1.358A5 5 0 0 1 19 12m2-4v9.41l2 1.8V5.998h-3.086l-2.707-2.707-.293-.293h-5.828l-.293.293-2.595 2.595 1.489 1.34 2.227-2.228h4.172l2.707 2.707.293.293H21M5 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
