import React from 'react';
import { ComponentWithAs } from '@chakra-ui/system';
import { createIcon, IconProps } from '@chakra-ui/react';

export const CalculatorIcon: ComponentWithAs<'svg', IconProps> = createIcon({
  displayName: 'Calculator',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Calculator icon</title>
      <path
        d="M4 2H20V6L18 7V4H6V8H20V18C20 19.0609 19.5786 20.0783 18.8284 20.8284C18.0783 21.5786 17.0609 22 16 22H8C6.93913 22 5.92172 21.5786 5.17157 20.8284C4.42143 20.0783 4 19.0609 4 18V2ZM17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V10H6V18C6 18.5304 6.21071 19.0391 6.58579 19.4142C6.96086 19.7893 7.46957 20 8 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142ZM11 12H8V14H11V12ZM16 12H13V14H16V12ZM11 16H8V18H11V16ZM16 16H13V18H16V16Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
