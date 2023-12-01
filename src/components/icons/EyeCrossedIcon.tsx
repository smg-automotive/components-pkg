import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const EyeCrossedIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'EyeCrossedIcon',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Eye crossed icon</title>
      <path
        d="m1.331 3.743 20 18 1.338-1.486-20-18-1.338 1.486zm.829 7.867c.062-.149.825-1.901 2.32-3.687l1.492 1.342A14.901 14.901 0 0 0 4.18 12c.7 1.39 3.37 6 7.82 6a6.505 6.505 0 0 0 2.906-.694l1.582 1.424C15.223 19.488 13.729 20 12 20c-6.53 0-9.71-7.3-9.84-7.61L2 12l.16-.39zm5.917-.39.01-.05 2.574 2.315.002.003 2.574 2.316a4 4 0 0 1-5.16-4.584zm2.686-3.024 2.573 2.316.004.003 2.573 2.316a3.997 3.997 0 0 0-.587-3.053 4 4 0 0 0-4.563-1.582zM19.82 12a14.9 14.9 0 0 1-1.792 2.735l1.492 1.342c1.495-1.786 2.258-3.539 2.32-3.687L22 12l-.16-.39C21.71 11.3 18.53 4 12 4c-1.729 0-3.223.512-4.488 1.27l1.582 1.424A6.504 6.504 0 0 1 12 6c4.45 0 7.12 4.61 7.82 6z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
