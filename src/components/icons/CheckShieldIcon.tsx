import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const CheckShieldIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'CheckShield',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Check Shield icon</title>
      <g fill="none" fillRule="evenodd">
        <path
          d="M4.00008 2.0188V13.0188C3.99337 14.5177 4.40792 15.9884 5.19647 17.2632C5.98503 18.5379 7.11586 19.5655 8.46008 20.2288L12.0001 22.0188L15.5401 20.2388C16.8858 19.5748 18.0177 18.5456 18.8063 17.2689C19.595 15.9922 20.0087 14.5194 20.0001 13.0188V2.0188H4.00008ZM18.0001 13.0188C18.0089 14.1473 17.6992 15.2555 17.1067 16.216C16.5141 17.1765 15.6626 17.9504 14.6501 18.4488L12.0001 19.7788L9.35008 18.4588C8.33598 17.9596 7.48351 17.1842 6.89083 16.2217C6.29815 15.2593 5.98938 14.149 6.00008 13.0188V4.0188H18.0001V13.0188Z"
          fill="currentColor"
        />
        <path
          d="M7 12.3478L10.739 16.0188L17 9.3238L15.656 8.0188L10.656 13.3708L8.28 10.9948L7 12.3478Z"
          fill="currentColor"
        />
      </g>
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
