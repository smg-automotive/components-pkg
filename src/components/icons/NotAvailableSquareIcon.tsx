import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const NotAvailableSquareIcon: ComponentWithAs<'svg', IconProps> =
  createIcon({
    displayName: 'NotAvailableSquare',
    viewBox: '0 0 24 24',
    path: (
      <>
        <title>Not available square icon</title>
        <path fill="none" d="M.0012.0005h24v23.9998h-24z" />
        <path fill="currentColor" d="M4.0017 4.0014h16.0004v16.0003H4.0017z" />
        <path
          fill="none"
          stroke="#858585"
          strokeWidth="3.94"
          d="M652.144 169.447h15.622"
          transform="matrix(.512 0 0 .5024 -325.9558 -73.126)"
        />
      </>
    ),
    defaultProps: {
      boxSize: 'sm',
    },
  });
