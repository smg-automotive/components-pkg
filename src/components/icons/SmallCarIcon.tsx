import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const SmallCarIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Small-car',
  viewBox: '0 0 100 68',
  path: (
    <>
      <title id="smallCarTitle">Small-car icon</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M26.958 21.957c6.38-.344 18.008-.957 23.4-.957 3.049 0 6.833 1.593 10.387 3.444 2.34 1.219 4.705 2.62 6.79 3.855 1.094.649 2.112 1.252 3.008 1.759a1 1 0 0 0 .13.06l10.93 4.16a3 3 0 0 1 1.645 1.525L84 37.396a3 3 0 0 1 .197.552l.392 1.57a3 3 0 0 1 .09.728V45.5a2.5 2.5 0 0 1-2.5 2.5h-4.5v-2h4.5a.5.5 0 0 0 .5-.5v-5.254a1 1 0 0 0-.03-.242l-.393-1.571a1 1 0 0 0-.065-.184l-.752-1.593a1 1 0 0 0-.548-.508l-10.929-4.16a3 3 0 0 1-.403-.19c-.965-.545-2.017-1.17-3.13-1.829-2.05-1.215-4.307-2.553-6.608-3.752C56.254 24.36 52.864 23 50.358 23c-5.325 0-16.885.608-23.292.954a1 1 0 0 0-.692.336l-6.623 7.506c-.106.12-.181.264-.22.42l-.829 3.313c-.054.215-.13.415-.217.6a17 17 0 0 0-1.291 3.965c-.293 1.575-.281 3.066.22 4.153a.5.5 0 0 0 .16.17c.108.08.235.13.367.146l3.679.444-.24 1.986-3.678-.444a2.8 2.8 0 0 1-1.314-.521 2.47 2.47 0 0 1-.789-.942c-.76-1.647-.692-3.634-.371-5.357a19 19 0 0 1 1.452-4.463 1.2 1.2 0 0 0 .082-.221l.828-3.315a3 3 0 0 1 .661-1.257l6.623-7.506a3 3 0 0 1 2.084-1.01M66.858 48H32.5v-2h34.358z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M47 34h6l-1 2h-5zM30 34h6l-1 2h-5z" />
      <path
        fill="#currentColor"
        fillRule="evenodd"
        d="M26.857 41a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m-6.5 4.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0M72.857 41a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m-6.5 4.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M27 30h37l-2 2H25z" />
      <path fill="currentColor" d="m43 27 2-2v7h-2z" />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
