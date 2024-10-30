import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const ViewMotorcycleIcon: ComponentWithAs<'svg', IconProps> = createIcon(
  {
    displayName: 'ViewMotorcycleIcon',
    viewBox: '0 0 48 48',
    path: (
      <>
        <title>View motorcycle icon</title>
        <path
          d="M28.991 19v2H32l-3 3 1.41 1.41 3.72-3.72L36.28 27c-3.549.369-6.277 3.395-6.277 6.963 0 3.84 3.16 7 7 7 3.841 0 7-3.16 7-7a7.02 7.02 0 0 0-5.523-6.843v.04L36.81 23H39v-8h-2a4.002 4.002 0 0 0-2.89 1.25L32 11h-7l1 2h4.65L33 18.87V19h-4.009zm-21 7.677v2.341A5.006 5.006 0 0 0 6 33c0 2.743 2.257 5 5 5 2.055 0 3.837-1.267 4.602-3.055h2.117c-.855 2.902-3.556 5.045-6.719 5.045-3.84 0-7-3.16-7-7 0-2.766 1.639-5.179 3.991-6.313zM37 39c-2.743 0-5-2.257-5-5s2.257-5 5-5 5 2.257 5 5-2.257 5-5 5zM7.991 21v-2H4l1 2h2.991zM37 17v4c-1.097 0-2-.903-2-2s.903-2 2-2z"
          fill="currentColor"
          fillRule="nonzero"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          transform="translate(6.491 -3.555)"
          d="M8.552 19h6.895l.89 3.556H21V37H3V22.556h4.664L8.552 19Zm1.562 2-.389 1.556h4.55L13.885 21h-3.771ZM12 28.111a1.667 1.667 0 1 0 0 3.334 1.667 1.667 0 0 0 0-3.334Zm-3.667 1.667a3.667 3.667 0 1 1 7.334 0 3.667 3.667 0 0 1-7.334 0ZM5 35V24.556h14V35H5Z"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  },
);
