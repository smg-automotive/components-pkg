import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const FlameIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Flame',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Flame icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.5 2c-2 0-3.689.756-4.5 4-.163.654-.163 1.204-.163 1.684 0 .966 0 1.648-1.337 2.316-2 1-2.812-2.687-2.812-2.687C3.435 8.565 3.013 10.746 3 12.938a9 9 0 1 0 18 0C21 10.125 20.5 9 18.5 8c0 2.5 0 3.5-1 4.5 0-3.974-1.544-5.421-2.773-6.573C13.637 4.905 12.795 4.116 13.5 2M12 20a4 4 0 0 1-4-4c0-.888.646-1.789 1.354-2.776C10.407 11.754 11.598 10.094 11 8c4.5 3.5 5 5.79 5 8a4 4 0 0 1-4 4"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
