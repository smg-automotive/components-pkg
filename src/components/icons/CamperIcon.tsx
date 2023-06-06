import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const CamperIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Camper',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Camper icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.667 5A1.667 1.667 0 0 0 3 6.667v4.334h10V8h8V6.666A1.667 1.667 0 0 0 19.333 5H4.667ZM1 6.667v10.134c0 .619.274 1.189.722 1.591.443.4 1.025.608 1.611.608h.839a3 3 0 0 0 5.656 0h5.344a2.999 2.999 0 0 0 5.656 0H23v-6.333l-.193-.257-.013-.018L21 10.001h2V6.667A3.667 3.667 0 0 0 19.333 3H4.667A3.667 3.667 0 0 0 1 6.667Zm2 10.134V13h10v4H9.828a3 3 0 0 0-5.656 0h-.839a.414.414 0 0 1-.274-.095C3.007 16.858 3 16.818 3 16.8ZM20 12h-5v-2h3.5l1.5 2Zm-4.828 5H15v-3h6v3h-.172a2.999 2.999 0 0 0-5.656 0ZM8 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm9 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM5 6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z"
        clipRule="evenodd"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
