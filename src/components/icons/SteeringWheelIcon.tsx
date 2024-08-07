import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const SteeringWheelIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'SteeringWheel',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Steering wheel icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.999 12.129 20 12a8 8 0 0 0-.26-2.032 33 33 0 0 0-.73-.141 69 69 0 0 0-1.982-.339C15.431 9.24 13.495 9 12 9s-3.431.24-5.028.488a69 69 0 0 0-2.712.48 8 8 0 0 0-.259 2.158c.434.07.992.178 1.594.336 1.282.338 3.028.973 4.016 2.195.918 1.135 1.224 2.831 1.338 4.057.042.45.061.87.068 1.226a8 8 0 0 0 1.986-.002c.006-.355.025-.775.067-1.224.114-1.226.42-2.922 1.338-4.057.989-1.223 2.734-1.857 4.017-2.195a17 17 0 0 1 1.574-.333M12 4a8 8 0 0 1 6.78 3.752c-.419-.074-.91-.157-1.444-.24C15.72 7.26 13.657 7 12 7s-3.72.26-5.336.512a71 71 0 0 0-1.445.24A8 8 0 0 1 12 4m7.688 10.22a14 14 0 0 0-.754.176c-1.25.33-2.42.838-2.97 1.518-.515.636-.792 1.798-.903 2.986q-.024.264-.037.509a8.02 8.02 0 0 0 4.664-5.19M8.996 19.417a8.02 8.02 0 0 1-4.685-5.201c.242.05.504.11.774.18 1.25.33 2.42.838 2.97 1.518.515.636.792 1.798.903 2.986q.026.267.038.517M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});