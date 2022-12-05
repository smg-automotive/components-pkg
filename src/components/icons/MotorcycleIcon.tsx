import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const MotorcycleIcon = createIcon({
  displayName: 'Motorcycle',
  viewBox: '0 0 24 24',
  path: (
    <path
      fill="#333"
      fill="currentcolor"
      d="m17 4-2 3.12V6a3 3 0 0 0-6 0v1L7 4H3l1 2h1.92l2.16 3.22A4 4 0 0 0 8 10l-2 3v4h3v4h6v-4h3v-4l-2-3c0-.215-.02-.43-.06-.64L18.1 6H20l1-2h-4ZM9 15H8v-1.4l.8-1.2.2.24V15Zm2-9a1 1 0 0 1 2 0v.13a3.83 3.83 0 0 0-2 0V6Zm2 13h-2v-5.13a3.91 3.91 0 0 0 2 0V19Zm-1-7a2 2 0 0 1-2-2 1.94 1.94 0 0 1 .55-1.37 2 2 0 0 1 2.9 0c.357.366.554.859.55 1.37a2 2 0 0 1-2 2Zm4 1.6V15h-1v-2.36l.2-.24.8 1.2Z"
    />
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
